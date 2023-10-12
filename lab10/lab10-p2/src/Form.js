import React from 'react';

function Form({ personName, onPersonChange, university, onUniversityChange }) {
  return (
      <div>
        <label>
          <input 
            type="text"
            value={personName}
            onChange={(e) => onPersonChange(e.target.value)}
            style={{ marginRight: '5px' }}
          />
        </label>
        <label>
            studies in 
          <input 
            type="text"
            value={university}
            onChange={(e) => onUniversityChange(e.target.value)}
            style={{ marginLeft: '5px' }}
          />
        </label>
      </div>
  );
}

export default Form;
