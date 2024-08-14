import { useState } from 'react'
import Persona from './components/Persona'


const App = (props) => {


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchBy, setSearchByName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const searchByName = (name) => {
    return persons.filter(person => person.name.toLowerCase().includes(name.toLowerCase()))
  }

  const filteredPersons = searchByName(searchBy)

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input value={searchBy}
        onChange={(name) => setSearchByName(name.target.value)} />
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
          <p></p>
          number: <input value={newNumber}
            onChange={handleNumberChange}
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
        {filteredPersons.length !== 0 ? (
          filteredPersons.map((person, index) => (
            <Persona key={index} persona={person} />
          ))
        ) : (
          <li>No persons found</li>
        )}
      </ul>

    </div>
  )
}

export default App