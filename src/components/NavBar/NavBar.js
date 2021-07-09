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
            <Link to={'/menu/frutos'}>Frutos Secos</Link>
            <Link to={'/menu/embotellados'}>Embotellados</Link>
            <Link to={'/menu/cereales'}>Cereales</Link>
            <Link to={'/detail'}>Detalle</Link>
          </div>
        </div>
        <div className='NavBar__widgets'>
          <a href="https://www.instagram.com/tus.frutossecos/">
            <img src='assets/ig.png' alt='' className='NavBar__widgetsImg' />
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