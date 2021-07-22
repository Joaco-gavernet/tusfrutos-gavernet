import React from 'react';
import './Cart.scss';


// Context
import { useCartContext } from '../../context/CartContext';



export default function ItemListContainer () {


  const { cart } = useCartContext;


  return (
    <>
      <div className='Cart'>
        <h2>Carrito</h2>
        {console.log('cart', cart)}
      </div>
    </>
  )
}