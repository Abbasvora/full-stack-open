import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import Person from './components/person'
import PersonForm from './components/person-form'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filterPersons, setFilterPersons] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data))
      .catch((err) => console.log(err))
  }, [])

  const notEqual = (obj1, obj2) => {
    if (obj1['name'] !== obj2['name']) {
      return true
    }
    return false
  }

  const addPerson = (event) => {
    event.preventDefault()
    const sameName = persons.every((person) => notEqual(person, { name: newName }))
    if (sameName) {
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObj))

    } else {
      window.alert(`${newName} already exists`)

    }
    setNewName('')
    setNewNumber('')
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
      <Filter filterValue={filterName} filterChange={handleFilterChange} />
      <h3>add new number</h3>
      <PersonForm onSubmit={addPerson} nameValue={newName} nameChnage={handleNameChange} numberValue={newNumber} numberChnage={handleNumberChange} />
      <h3>Numbers</h3>
      <Person persons={persons} filterPersons={filterPersons} />
    </div>
  )
}

export default App