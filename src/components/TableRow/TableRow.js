import React from 'react';

export default function TableRow ({data, countUp, countDown, removeItem}) {


  return (
    <tr className='tableRow'>
      <td className='tableRow__detail'>
        <img src={data.img} alt="" className='tableRow__detail__img' />
      </td>
      <td className='tableRow__name'>
        <h3 className='tableRow__name__h3'>{data.name}</h3>
      </td>
      <td className='tableRow__count'>
        <h3 className='tableRow__count__subtotal'>${data.price}</h3>
        <div className='ItemCount'>
          <button className='itemCount__modifier' onClick={() => countDown(data)}>-</button>
          <h3 className='itemCount__h3'>{data.quantity}</h3>
          <button className='itemCount__modifier' onClick={() => countUp(data)} >+</button>
        </div>
        <img src="../assets/trash.png" alt="" className="count__trash" onClick={() => {removeItem(data.id)}} />
      </td>
    </tr>
  )
}