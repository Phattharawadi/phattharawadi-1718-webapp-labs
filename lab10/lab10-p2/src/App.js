import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [university, setUniversity] = useState('');

  return (
    <div className="App">
      <h1>Form with Names</h1>
      <Form 
        personName={name1}
        onPersonChange={setName1}
        university={university}
        onUniversityChange={setUniversity}
      />
      <Form 
        personName={name2}
        onPersonChange={setName2}
        university={university}
        onUniversityChange={setUniversity}
      />
    </div>
  );
}

export default App;
