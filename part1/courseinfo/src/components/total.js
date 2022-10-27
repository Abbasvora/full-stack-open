const Total = (props) => {
  const parts = props.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total