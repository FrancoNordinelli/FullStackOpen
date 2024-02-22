
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part}{' '}{props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const totalExercises = exercises1+exercises2+exercises3

  return (
    <div>
      <Header course={course}></Header>
      <Content part='Fundamentals of React' exercises={exercises1}></Content>
      <Content part='Using props to pass data' exercises={exercises2}></Content>
      <Content part='State of a component' exercises={exercises3}></Content>
      <Total total={totalExercises} />
    </div>
  )
}

export default App
