import React, {useState, useEffect} from 'react';

function ItemCount ({initial, stock, onAdd}) {

  let [count, setCount] = useState(initial);

  useEffect(() => {console.log('Already loaded')}, []);
  useEffect(() => {console.log('Component updated')}, [count]);

  let countUp = () => {
    if (count < stock && stock > 0) {
      setCount(count++)
    } else {
      alert('Stock insuficiente')
    }
  }

  let countDown = () => {
    setCount(count--);
  }

  return (
    <div style={{minWidth: '250px', flexDirection: 'row', alignItems: 'center'}}>
      <button onClick={countDown}>-</button>
      <input style={{display: 'inline-block', minWidth: '50px', textAlign: 'center'}} value={count}></input>
      <button onClick={countUp}>+</button>
      <button onClick={onAdd}>Agregar producto</button>
    </div>
  )
}

export default ItemCount;