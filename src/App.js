import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App () {
  return (
    <>
      <div style={{
        padding: '0', 
        margin: '0', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexFlow: 'column', 
        maxWidth: '80%', 
        minHeight: '100vh', 
        paddingBottom: '10rem'}}>
        <NavBar />
        <h1>Tus Frutos Secos</h1>
        <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ut harum inventore dolores ab sunt eos velit. Nesciunt perferendis optio reprehenderit accusamus nisi sunt voluptas natus? Dolor quas id reprehenderit.
        </p>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;