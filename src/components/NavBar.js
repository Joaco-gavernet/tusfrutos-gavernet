import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        minWidth: '600px',
        minHeight: '80px'}}>
        <span>Frutos Secos</span>
        <span>Liquidos</span>
        <span>Cereales</span>
        <CartWidget />
      </div>
    </>
  )
}

export default NavBar