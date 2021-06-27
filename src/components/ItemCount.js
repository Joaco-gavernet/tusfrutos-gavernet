import React, {useState, useEffect} from 'react';

function ItemCount ({initial, stock, onAdd}) {

  let [count, setCount] = useState(initial);

  useEffect(() => {console.log('ItemCount did mount')}, [count]);

  const inputChangedHandler = (event) => {
    setCount(event.target.value);
  }

  const countUp = () => {
    if (count < stock && stock > 0) {
      setCount(count++)
    } else {
      alert('Stock insuficiente')
    }
  }

  const countDown = () => {
    if (count > 0) {
      setCount(count--);
    } else {
      alert('Producto eliminado');
    }
  }

  return (
    <div style={{minWidth: '250px', flexDirection: 'row', alignItems: 'center'}}>
      <button onClick={countDown}>-</button>
      <input 
        className="input" 
        style={{display: 'inline-block', minWidth: '50px', textAlign: 'center'}} 
        value={count} 
        onChange={(event) => {inputChangedHandler(event)}} />
      <button onClick={countUp}>+</button>
      <button onClick={onAdd}>Agregar producto</button>
    </div>
  )
}

export default ItemCount;