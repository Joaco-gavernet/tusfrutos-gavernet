import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount ({onAdd, stock}) {

  const [ count, setCount ] = useState(1);

  const countUp = () => {
    count < stock && setCount(count + 1);
    count === stock && alert('No hay mas stock disponible.')
  }

  const countDown = () => {
    count > 1 && setCount(count - 1);
  }

  return (
    <div className='ItemCountContainer'>
      <span className='button itemCountContainer__modifier' onClick={countDown}>-</span>
      <h3 className='h3'>{count}</h3>
      <span className='button itemCountContainer__modifier' onClick={countUp}>+</span>

      <span className='button' onClick={() => {onAdd(count)}}>Agregar</span>
    </div>
  )
}

export default ItemCount;