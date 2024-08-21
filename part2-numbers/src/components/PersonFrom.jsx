import React from 'react';

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addNumber }) => (
  <form onSubmit={addNumber}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
      <p></p>
      number: <input value={newNumber} onChange={handleNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </div>
  </form>
);

export default PersonForm;
