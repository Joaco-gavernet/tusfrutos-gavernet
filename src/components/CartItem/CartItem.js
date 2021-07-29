import React, { useState } from 'react';

// Context
import { useCartContext } from '../../context/CartContext';

export default function CartItem ({data}) {

  const { removeItem } = useCartContext();
  const [ count, setCount ] = useState(data.quantity);

  const countUp = () => {
    if (count < data.stock) {
      let newQuantity = data.quantity += 1;
      setCount(newQuantity);
    } else {
      alert('No hay mas stock disponible.')
    }
  }

  const countDown = () => {
    if (count > 1) {
      let newQuantity = data.quantity -= 1;
      setCount(newQuantity);
    } else {
      removeItem(data.id);
    }
  }

  return (
    <tr className='CartItem'>
      <td className='CartItem__detail'>
        <img src={data.image} alt="" className='CartItem__detail__img' />
      </td>
      <td className='CartItem__name'>
        <h3 className='CartItem__name__h3'>{data.name}</h3>
      </td>
      <td className='CartItem__count'>
        <h3 className='CartItem__count__subtotal'>${data.price}</h3>
        <div className='ItemCount'>
          <span className='button itemCount__modifier' onClick={countDown}>-</span>
          <h3 className='itemCount__h3'>{count}</h3>
          <span className='button itemCount__modifier' onClick={countUp} >+</span>
        </div>
        <img src="../assets/trash.png" alt="" className="count__trash" onClick={() => {removeItem(data.id) }} style={{display: "none"}}  />
      </td>
    </tr>
  )
}