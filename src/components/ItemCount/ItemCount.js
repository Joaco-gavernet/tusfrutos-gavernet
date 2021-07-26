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
    if (number >= 1) {
      number --
      setCount(number);
    } else {
      alert('No puede ser menor que cero')
    }
  }

  return (
    <div className='ItemCountContainer'>
      <button className='itemCountContainer__modifier' onClick={() => countDown(count)}>-</button>
      <h3 className='h3'>{count}</h3>
      <button className='itemCountContainer__modifier' onClick={() => countUp(count)}>+</button>
      <button className='' onClick={() => {onAdd(count)}}>Agregar</button>
    </div>
  )
}

export default ItemCount;