const Person = ({ persons, filterPersons }) => {

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