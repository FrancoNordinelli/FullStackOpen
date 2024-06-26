
const Header = ({ name }) => {
    return <h1>{name}</h1>;
  }
  

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises} 
        </p>
    )
}

const Total = ({exercises}) =>{

    const total = exercises.reduce((acum, currentValue) => {
        return acum+currentValue.exercises
    }, 0)
    return(
        <p>
            total of {total} exercises
        </p>
    )
}
const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts}/>
        </div>
    )
}
export default Course