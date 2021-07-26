import React, { useState, useContext } from 'react';

// Components
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.scss';

// Context
import { CartContext } from '../../context/CartContext';


function ItemDetail ({data}) {
  
  const { addItem, removeItem } = useContext(CartContext);
  
  const [ isVisible, setVisible ] = useState(true);
  const [ isButton, setButton ] = useState(false);

  const onAdd = (quantity) => {
    setVisible(!isVisible);
    setButton(!isButton);
    saveContext(data, quantity);
    // alert(`Se agregaron productos al carrito.`)
  }

  const saveContext = (item, quantity) => {
    addItem(item, quantity);
  }


  return(
    (data.stock !== 0) ? (
      <div className='ItemDetail'>
        <Link to='/'>
          <img src='../assets/times-circle-regular.svg' className='ItemDetail__close' alt="" />
        </Link>
        <img src={data.img} alt="" className='ItemDetail__img' />
        <div className='ItemDetail__div'>
          <p>
            {data.description}
          </p>
          <h3>{data.price}</h3>
          {
            isVisible && <ItemCount onAdd={onAdd} stock={data.stock} />
          }
          {
            isButton && <Link to='/cart'><span>Terminar compra</span></Link>
          }
          {
            isButton && <button onClick={() => {removeItem(data.id)}}>Eliminar producto</button>
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