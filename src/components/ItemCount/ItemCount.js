import React, {useState} from 'react';


// Styles
import './ItemCount.scss';

// Extras
import swal from 'sweetalert';


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

      <span className='button' onClick={() => {
        onAdd(count)
        // swal({
        //     title: "Producto agregado!", 
        //     icon: "success",
        //     buttons: false,
        //     timer: 1000
        //   });
        }}>Agregar</span>
    </div>
  )
}

export default ItemCount;