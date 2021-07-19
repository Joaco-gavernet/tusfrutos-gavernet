import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

// Context
import { CartContext } from '../src/context/CartContext';


function App () {
  return (
    <>
      <CartContext.Provider value='I come from Context '>
        <div className='App'>
          <BrowserRouter>
            <NavBar />

            <div className='container'>
              <Switch>
                <Route exact path='/'>
                  <Landing />
                  <ItemListContainer />
                </Route>

                <Route exact path='/category/:id'>
                  <ItemListContainer />
                </Route>

                <Route exact path='/item/:id'>
                  <ItemDetailContainer />
                </Route>

                <Route exact path='/cart'>
                  <h2>Carrito</h2>
                </Route>
              </Switch>
            </div>
            
          </BrowserRouter>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;