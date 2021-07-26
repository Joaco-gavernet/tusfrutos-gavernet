import React from 'react';

function CartWidget ({quantity}) {
  return (
    <>
      <img 
        src='../assets/shopping-cart-solid.svg' 
        alt='Shopping cart' 
        className='widgets__cart'
        width='30px' />
      <h3 className='widgets__cartCounter'>{quantity}</h3>
    </>
  )
}

export default CartWidget;