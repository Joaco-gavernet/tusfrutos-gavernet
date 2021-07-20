import React, { useState, useContext } from 'react';

// Components
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.scss';

// Context
import { CartContext } from '../../context/CartContext';


function ItemDetail ({data, stock}) {
  
  const { addItem } = useContext(CartContext);
  
  const [ isVisible, setVisible ] = useState(true);
  const [ isButton, setButton ] = useState(false);

  const onAdd = (quantity) => {
    setVisible(!isVisible);
    setButton(!isButton);
    console.log(quantity);

    saveContext(quantity);
  }

  const saveContext = (quantity) => {
    addItem(data, quantity);
    // console.log('trying to pass the quantity to set the total')
  }


  return(
    (stock !== 0) ? (
      <div className='ItemDetail'>
        <img src={data.img} alt="" className='ItemDetail__img' />
        <div className='ItemDetail__div'>
          <p>
            {data.description}
          </p>
          <h3>{data.price}</h3>
          {
            isVisible && <ItemCount stock={stock} onAdd={onAdd} />
          }
          {
            isButton && <Link to='/cart'><button>Terminar compra</button></Link>
          }
        </div>
      </div>
    ) : (
      <div>
        <h2>No hay mas stock de {data.name}</h2>
      </div>
    )
  )
}

export default ItemDetail;