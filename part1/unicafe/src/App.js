import { useState } from 'react'

// components
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, number }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
  )
}
const Statistics = ({ review }) => {

  const { good, neutral, bad } = review

  const totalFeedback = good + neutral + bad
  const avg = ((good * 1) + (neutral * 0) + (bad * -1)) / totalFeedback
  const positive = (good * 100) / totalFeedback

  if (good || neutral || bad) {
    return (
      <div>
        <table>
          <StatisticLine text='good' number={good} />
          <StatisticLine text='neutral' number={neutral} />
          <StatisticLine text='bad' number={bad} />
          <StatisticLine text='all' number={totalFeedback} />
          <StatisticLine text='avg' number={avg} />
          <StatisticLine text='positive' number={positive + ' %'} />
        </table>
      </div>
    )
  } else {
    return (
      <p>no feedback is given</p>
    )
  }


}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const rivewHandler = (fn, value) => {
    return () => {
      fn(value)
      console.log(value)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={rivewHandler(setGood, good + 1)} text='Good' />
      <Button onClick={rivewHandler(setNeutral, neutral + 1)} text='neutral' />
      <Button onClick={rivewHandler(setBad, bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics review={{ good, neutral, bad }} />
    </div>
  )
}

export default App
