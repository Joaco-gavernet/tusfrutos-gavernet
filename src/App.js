import React from 'react';
import NavBar from './components/NavBar';

function App () {
  return (
    <div style={{padding: '0', margin: '0', display: 'flex', justifyContent: 'center', flexFlow: 'column', minWidth: '100%'}}>
      <NavBar />
      <p style={{fontSize: '2rem', fontWeight: 'bold'}}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
