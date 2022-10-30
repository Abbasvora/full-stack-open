const Person = ({ persons, filterPersons, deletePerson }) => {

  if (filterPersons.length !== 0) {
    persons = filterPersons
  }

  return (
    <div>
      <table>
        <tbody>
          {
            persons.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                  <td><button onClick={() => deletePerson(person.id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Person