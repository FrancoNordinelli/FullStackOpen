import React from 'react';
import Persona from './Persona';

const PersonsList = ({ filteredPersons }) => (
  <ul>
    {filteredPersons.length !== 0 ? (
      filteredPersons.map((person, index) => (
        <Persona key={index} persona={person} />
      ))
    ) : (
      <li>No persons found</li>
    )}
  </ul>
);

export default PersonsList;
