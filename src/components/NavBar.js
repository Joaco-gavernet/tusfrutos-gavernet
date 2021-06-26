import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <>
      <h1>Tus Frutos Secos</h1>
      <div style={{display: 'flex', justifyContent: 'space-evenly', minWidth: '600px'}}>
        <span>Frutos Secos</span>
        <span>Mieles</span>
        <span>Cereales</span>
        <CartWidget />
      </div>
    </>
  )
}

export default NavBar