const PersonForm = ({ onSubmit, nameValue, nameChnage, numberValue, numberChnage }) => {


  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={nameValue} onChange={nameChnage} />
        </div>
        <div>
          phone number: <input value={numberValue} onChange={numberChnage} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm