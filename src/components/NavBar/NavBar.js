import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.scss';

const NavBar = () => {

  return (
    <>
      <div className='NavBar'>
        <span>Frutos Secos</span>
        <span>Liquidos</span>
        <span>Cereales</span>
        <CartWidget />
      </div>
    </>
  )
}

export default NavBar