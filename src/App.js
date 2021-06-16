import React from 'react';
import NavBar from './components/NavBar';
import NutWidget from './components/NutWidget';
import ItemListContainer from './components/ItemListContainer';

// Vars 
let imgData = {
  src: './resources/nueces.png'
};

let name = ['Joaquin', 'Nicolas', 'Juan'];

function App () {
  return (
    <div style={{padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column', maxWidth: '80%', minHeight: '100vh'}}>
      <NavBar />
      <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ut harum inventore dolores ab sunt eos velit. Nesciunt perferendis optio reprehenderit accusamus nisi sunt voluptas natus? Dolor quas id reprehenderit.
      </p>
      <NutWidget data={imgData} width='300px' />
      <ItemListContainer data={name} />
    </div>
  );
}

export default App;