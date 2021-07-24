import React, { useContext } from 'react';
import './Cart.scss';


// Context
import { CartContext } from '../../context/CartContext';



export default function Cart () {


  const { cart, clear, total } = useContext(CartContext);


  return (
    <>
      <div className='Cart'>
        <h2>Carrito</h2>
        <h3>Total: {total}</h3>
        {cart.map((instance, i) => console.log('instance', instance, 'i', i))}
        <button onClick={clear}>Vaciar carrito</button>
      </div>
    </>
  )
}