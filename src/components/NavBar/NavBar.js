import React, { useContext } from 'react';
import CartWidget from '../CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContext';

function NavBar () {

  const example = useContext(CartContext);

  return (
    <>
      <div className='NavBar'>
        {console.log(example)}
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
            <img src='../assets/ig.png' alt='' className='NavBar__widgetsImg' />
          </a>
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar