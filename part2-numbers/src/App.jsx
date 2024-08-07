import { useState } from 'react'
import Persona from './components/Persona'


const App = (props) => {


  const initialPersons = [{ name: 'Arto Hellas' }];
  if (props.name) {
    initialPersons.push({ name: props.name });
  }
  /*const [persons, setPersons] = useState(initialPersons);
   */

  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
        </div>
        <ul>
          {persons.map((person, index) => (
            <Persona key={index} persona={person} />
          ))}
        </ul>

        <div>
          {/* <div>debug: {persons[0].name}</div> */}
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...

    </div>
  )
}

export default App