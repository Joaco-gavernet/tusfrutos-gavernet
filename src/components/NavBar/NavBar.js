import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
      <div className='NavBar'>
        <Link to={'/'}>
          <img src='https://picsum.photos/100' alt='' />
        </Link>
        <div>
          <h3>Categorias</h3>
          <div className='NavBar__links'>
            <Link to={'/category/frutos'}>Frutos Secos</Link>
            <Link to={'/category/embotellados'}>Embotellados</Link>
            <Link to={'/category/cereales'}>Cereales</Link>
            <Link to={'/detail'}>Detalle</Link>
          </div>
        </div>
        <div className='NavBar__widgets'>
          <a href="https://www.instagram.com/tus.frutossecos/">
            <img src='../assets/ig.png' alt='' className='NavBar__widgetsImg' />
          </a>
          <Link to={'/'}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar