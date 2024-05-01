import Content from './Content'
import Header from './Header'

const Course = () => {
    //COURSES ARRAY
    const courses = [
        //CONTEST COURSES. HALF STACK APPLICATION DEVELOPMENT, NODE JS
        {
            name: 'Half Stack Application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    const CourseItem = ({ course }) => {
        return (
            <div>
                <h2>{course.name}</h2>
                <div>
                    {course.parts.map(part => (
                        <Part key={part.id} part={part} />
                    ))}
                </div>
            </div>
        );
    };

    const Part = ({ part }) => {
        return (
            <div>
                <p>{part.name}</p>
            </div>
        );
    };

    return (
        
        <div>
            {courses.map(course => (
                <CourseItem key={course.id} course={course} />
            ))}
        </div>
    
    )
}

export default Course