import { useState } from 'react'
import Persona from './components/Persona'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonFrom'
import PersonsList from './components/PersonList'

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
      <SearchFilter searchBy={searchBy} handleSearchChange={(e) =>setSearchByName(e.target.value)}/>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addNumber={addNumber}
        />
      <h2>Numbers</h2>
      <PersonsList filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App