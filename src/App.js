import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {
  return (
    <>  
      <div className='App'>
        <BrowserRouter>
          <NavBar />

          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <h1>Tus Frutos Secos</h1>
                <p style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ut harum inventore dolores ab sunt eos velit. Nesciunt perferendis optio reprehenderit accusamus nisi sunt voluptas natus? Dolor quas id reprehenderit.
                </p>
              </Route>

              <Route exact path='/category/:id'>
                <ItemListContainer />
              </Route>

              <Route exact path='/item/:name'>
                <ItemDetailContainer />
              </Route>
            </Switch>
          </div>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;