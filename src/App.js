import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';

// Variables
let props = {
  src: '././resources/nueces'
}

function App () {
  return (
    <div style={{padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column', minWidth: '100%'}}>
      <NavBar />
      <p style={{fontSize: '2rem', fontWeight: 'bold'}}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <CartWidget data={props} />
    </div>
  );
}

export default App;