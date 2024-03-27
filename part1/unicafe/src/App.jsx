import { useState } from "react"

const StatisticsLine = ({ text, value }) => {


  return (
    
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        
  )
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  if (total === 0) {
    return <h1>No feedback given</h1>
  }

  const godBad = props.godBad + props.bad
  return (
    <div>
      <table>
        <tbody>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={total} />
      <StatisticsLine text="avarage" value={(props.good + (props.bad * (-1))) / total} />
      <StatisticsLine text="positive" value={(props.good / total) * 100 + ' ' + '%'} />
      </tbody>
      </table>
    </div>
  )
}



const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div >
  )
}



export default App
