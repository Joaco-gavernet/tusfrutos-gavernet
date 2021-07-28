import React from 'react';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

// Styles
import './NavBar.scss';

// Context
import { useCartContext } from '../../context/CartContext';


function NavBar () {

  const { cart, calculateTotalItems } = useCartContext();

  return (
    <>
      <div className='NavBar'>
        <Link to={'/'}>
          <img src='../assets/logo.png' alt='' className='NavBar__img' />
        </Link>

        <div>
          <h3>Categorias</h3>
          <div className='NavBar__links'>
            <Link to={'/category/frutos'}>Frutos Secos</Link>
            <Link to={'/category/embotellados'}>Embotellados</Link>
            <Link to={'/category/cereales'}>Cereales</Link>
          </div>
        </div>
        <div className='NavBar__widgets'>
          <a href="https://www.instagram.com/tus.frutossecos/">
            <img src='../assets/ig.png' alt='' className='widgets__instagram' />
          </a>
          {
            (cart.length > 0) && (
              <Link to={'/cart'}>
                <CartWidget quantity={calculateTotalItems()} />
              </Link>
            )
          }
        </div>
      </div>
    </>
  )
}

export default NavBar