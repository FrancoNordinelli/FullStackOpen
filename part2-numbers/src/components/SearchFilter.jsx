import React from 'react';

const Filter = ({ searchBy, handleSearchChange }) => (
  <div>
    filter shown with: <input value={searchBy} onChange={handleSearchChange} />
  </div>
);

export default Filter;
