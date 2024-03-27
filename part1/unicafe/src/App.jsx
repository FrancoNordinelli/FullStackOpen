import { useState } from "react"


const Static = (props) => {

  if(props.bad === 0 && props.good === 0 && props.neutral === 0){
    return(
      <h1>No feedback given</h1>
    )
  }

  return (
    <div>
      <h1>statics</h1>
      <h4 style={{ margin: '0' }}>good {props.good}</h4>
      <h4 style={{ margin: '0' }}>neutral {props.neutral}</h4>
      <h4 style={{ margin: '0' }}>bad {props.bad} </h4>
      <p style={{ margin: '0' }}>all {props.good + props.bad + props.neutral}</p>
      <p style={{ margin: '0' }}>avarage {((props.good + props.bad * -1) / (props.good + props.bad + props.neutral))}</p>
      <p style={{ margin: '0' }}>positive {(props.good)*100 / ( props.good + props.bad + props.neutral)} %</p>
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
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Static good={good} neutral={neutral} bad={bad}/>
    </div >
  )
}



export default App
