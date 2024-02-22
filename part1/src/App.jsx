
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
    

    <Header course={course}></Header>
      <Part part={part1.name} exercises={part1.exercises}></Part>
      <Part part={part2.name} exercises={part2.exercises}></Part>
      <Part part={part3.name} exercises={part3.exercises}></Part>

    <Total total={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}


export default App
