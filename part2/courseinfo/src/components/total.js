const Total = ({ parts }) => {
  const total = parts.reduce((prev, next) => {

    return prev + next.exercises
  }, 0)
  return (
    <div>
      <p><b>Number of exercises {total}</b></p>
    </div>
  )
}

export default Total