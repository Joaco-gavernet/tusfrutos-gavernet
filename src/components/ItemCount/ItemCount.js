import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount ({stock, onAdd}) {

  const [count, setCount] = useState(0)

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
      <button onClick={() => countDown(count)}>-</button>
      <input 
        className="input" 
        type='number'
        style={{display: 'inline-block', minWidth: '50px', textAlign: 'center'}} 
        value={count}
        onChange={(event) => {inputChangedHandler(event)}} />
      <button onClick={() => countUp(count)}>+</button>
      <button onClick={() => {onAdd(count)}}>Agregar producto</button>
    </div>
  )
}

export default ItemCount;