import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount ({onAdd, stock}) {

  const [count, setCount] = useState(1);


  const countUp = (number) => {
    if (number < stock) {
      number ++
      setCount(number)
    } else {
      alert('Stock insuficiente')
    }
  }

  const countDown = (number) => {
    if (number >= 2) {
      number --
      setCount(number);
    } else {
      alert('No puede asignar una cantidad faltante.')
    }
  }

  return (
    <div className='ItemCountContainer'>
      <span className='button itemCountContainer__modifier' onClick={() => countDown(count)}>-</span>
      <h3 className='h3'>{count}</h3>
      <span className='button itemCountContainer__modifier' onClick={() => countUp(count)}>+</span>
      <span className='button' onClick={() => {onAdd(count)}}>Agregar</span>
    </div>
  )
}

export default ItemCount;