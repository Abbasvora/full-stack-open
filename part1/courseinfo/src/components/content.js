const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  // console.log(props.content.part1)
  const parts = props.parts
  return (
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />

    </div>
  )
}

export default Content