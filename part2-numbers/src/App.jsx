import { useState } from 'react'
import Persona from './components/Persona'


const App = (props) => {


  const initialPersons = [{ name: 'Arto Hellas' }];
  if (props.name) {
    initialPersons.push({ name: props.name });
  }


  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }

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
          <div>
            <button type="submit">
              add
            </button>
          </div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <Persona key={index} persona={person} />
        ))}
      </ul>

    </div>
  )
}

export default App