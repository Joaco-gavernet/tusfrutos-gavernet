import React from 'react';
import NavBar from './components/NavBar';
import NutWidget from './components/NutWidget';
import ItemListContainer from './components/ItemListContainer';
// import CardContainerHook from './components/CardContainerHook';
import CardContainer from './components/CardContainer';
import ItemCount from './components/ItemCount';

// Vars 
let nutData = {
  src: './resources/nueces.png'
};

let name = ['Joaquin', 'Nicolas', 'Rosario'];


function App () {
  return (
    <>
      <div style={{padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column', maxWidth: '80%', minHeight: '100vh', paddingBottom: '10rem'}}>
        <NavBar />
        <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ut harum inventore dolores ab sunt eos velit. Nesciunt perferendis optio reprehenderit accusamus nisi sunt voluptas natus? Dolor quas id reprehenderit.
        </p>
        <NutWidget data={nutData} width='300px' />
        <ItemListContainer data={name} />
        {/* <CardContainerHook /> */}
        <CardContainer />
        <ItemCount initial={1} stock={8} onAdd={() => {alert('Producto agregado')}} />
      </div>
    </>
  );
}

export default App;