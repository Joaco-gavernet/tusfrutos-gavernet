import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App () {
  return (
    <>  
      <div className='App'>
        <NavBar />
        <div className='container'>
          <h1>Tus Frutos Secos</h1>
          <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ut harum inventore dolores ab sunt eos velit. Nesciunt perferendis optio reprehenderit accusamus nisi sunt voluptas natus? Dolor quas id reprehenderit.
          </p>
          <ItemListContainer />
          <ItemDetailContainer />
        </div>
      </div>
    </>
  );
}

export default App;