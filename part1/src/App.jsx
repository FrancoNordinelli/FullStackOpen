
const Content = (props) => {

  return (
    <div>
      {props.name} {props.exercises}

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
  const course = {
    name: 'Half Stack application development',
    parts : [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]
  }

  return (
    <div>
      <Content name={course.name}></Content>
      <Content name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content name={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div >
  )
}



export default App
