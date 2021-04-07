import React, { useState } from 'react';
import Planets from './components/Planets';
import People from './components/People';
import Navbar from './components/Navbar';

function App() {

  const [page, setPage] = useState('planets');

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
