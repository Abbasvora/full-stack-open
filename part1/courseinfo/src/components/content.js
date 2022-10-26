const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.content.part1} exercise={props.content.exercises1} />
      <Part part={props.content.part2} exercise={props.content.exercises2} />
      <Part part={props.content.part3} exercise={props.content.exercises3} />

    </div>
  )
}

export default Content