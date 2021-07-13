import React from 'react';
import ItemCount from '../ItemCount';
import './ItemDetail.scss';

function ItemDetail ({data}) {

  return(
    <div className='ItemDetail'>
      <img src={data.img} alt="" className='ItemDetail__img' />
      <div className='ItemDetail__div'>
        <p>
          {data.description}
        </p>
        <h3>{data.price}</h3>
        <ItemCount initial={1} stock={8} onAdd={() => {alert('Producto agregado')}} />
      </div>
    </div>
  )
}

export default ItemDetail;