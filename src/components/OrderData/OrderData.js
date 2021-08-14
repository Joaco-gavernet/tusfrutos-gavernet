import React from 'react';


// Styles



// Context
import { useCartContext } from '../../context/CartContext';



const OrderData = () => {
  

  const { orderId } = useCartContext();
  

  return ( 
    <div>
      <h3>Guarde su numero de orden</h3>
      <h4>{orderId}</h4>
    </div>
  );
}

export default OrderData;