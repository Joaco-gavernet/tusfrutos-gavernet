import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount ({onAdd, stock}) {

  const [count, setCount] = useState(1);

  const inputChangedHandler = (event) => {
    let number = event.target.value;
    if (number < stock && number > 0) onAdd(number);
    if (number < 0) alert('No puede ser menor que cero');
    if (number > stock) alert('Stock insuficiente');
  }

  const countUp = (number) => {
    if (number < stock) {
      number ++
      setCount(number)
    } else {
      alert('Stock insuficiente')
    }
  }

  const countDown = (number) => {
    if (number > 0) {
      number --
      setCount(number);
    } else {
      alert('No puede ser menor que cero')
    }
  }

  return (
    <div className='ItemCountContainer'>
      <button className='itemCountContainer__modifier' onClick={() => countDown(count)}>-</button>
      <input 
        className="input" 
        type='number'
        value={count}
        onChange={(event) => {inputChangedHandler(event)}} />
      <button className='itemCountContainer__modifier' onClick={() => countUp(count)}>+</button>
      <button className='' onClick={() => {onAdd(count)}}>Agregar</button>
    </div>
  )
}

export default ItemCount;