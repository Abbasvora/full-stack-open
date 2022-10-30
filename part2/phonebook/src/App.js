import { useState, useEffect } from 'react'
import './main.css'
import Filter from './components/filter'
import Person from './components/person'
import PersonForm from './components/person-form'
import Notification from './components/notification'
import phoneBookServices from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filterPersons, setFilterPersons] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phoneBookServices.getAll().then(data => setPersons(data))
  }, [])

  const notEqual = (obj1, obj2) => {
    if (obj1['name'] !== obj2['name']) {
      return true
    }
    return false
  }

  const addPerson = (event) => {
    event.preventDefault()
    const differentName = persons.every((person) => notEqual(person, { name: newName }))
    if (differentName) {
      const personObj = {
        name: newName,
        number: newNumber
      }
      phoneBookServices.create(personObj).then(data => setPersons(persons.concat(data)))
      setMessage({ class: 'success', message: `${newName} added successfully` })
      setTimeout(() => {
        setMessage(null)
      }, 3000)

    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace old number with new one?`))
        updatePerson()
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = id => {
    const name = persons.filter(person => id === person.id)[0].name
    if (window.confirm(`Delete ${name}`)) {
      phoneBookServices.reqDelete(id).then(() => {
        const updated = persons.filter(person => id !== person.id)
        setPersons(updated)
      })
    }
  }

  const updatePerson = () => {
    const person = persons.find(person => newName === person.name)
    const id = person.id
    const changedPerson = { ...person, number: newNumber }

    phoneBookServices
      .update(id, changedPerson)
      .then(data => {
        setPersons(persons.map(person => id !== person.id ? person : data))
      })
      .catch((e) => {
        setMessage({ class: 'error', message: `Information of ${person.name} has been removed from server` })
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const newPersons = persons.filter((person) => {
      const lowerName = person.name.toLowerCase()
      if (lowerName.startsWith(event.target.value.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    setFilterPersons(newPersons)
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filterValue={filterName} filterChange={handleFilterChange} />
      <h3>add new number</h3>
      <PersonForm onSubmit={addPerson} nameValue={newName} nameChnage={handleNameChange} numberValue={newNumber} numberChnage={handleNumberChange} />
      <h3>Numbers</h3>
      <Person persons={persons} filterPersons={filterPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App