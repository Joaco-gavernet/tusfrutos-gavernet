import React from 'react';


// Components
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';


// Styles
import 'bootstrap/dist/css/bootstrap.css';


// Context
import { CartContextProvider } from './context/CartContext';


function App () {
  return (
    <>
        <div className='App'>
          <CartContextProvider>
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
                  <Cart />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
          </CartContextProvider>
        </div>
    </>
  );
}

export default App;