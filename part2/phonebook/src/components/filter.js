const Filter = ({ filterValue, filterChange }) => {

  return (
    <div>
      filter show with: <input value={filterValue} onChange={filterChange} />
    </div>
  )
}

export default Filter