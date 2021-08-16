import React, { useState } from 'react';

// Components
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.scss';

// Context
import { useCartContext } from '../../context/CartContext';


function ItemDetail ({data}) {


  const { addItem, removeItem } = useCartContext();
  
  const [ isVisible, setVisible ] = useState(true);
  const [ isButton, setButton ] = useState(false);

  const viewChange = () => {
    setVisible(!isVisible);
    setButton(!isButton);
  }

  const onAdd = (quantity) => {
    viewChange();
    addItem(data, quantity);
  }


  return(
    <>
      {
        (data.stock !== 0) ? (
          <div className='ItemDetail'>
            <Link to='/'>
              <span className='button'>
                Regresar
              </span>
            </Link>
            <img src={data.image} alt="" className='ItemDetail__img' />
            <div className='ItemDetail__div'>
              <h2>{data.title}</h2>
              <p>
                {data.description}
              </p>
              <h3>${data.price}</h3>
              {
                isVisible && <ItemCount onAdd={onAdd} stock={data.stock} />
              }
              {
                isButton && <Link to='/cart'><span className='button'>Terminar compra</span></Link>
              }
              {
                isButton && <span className='button' onClick={() => {
                  viewChange();
                  removeItem(data.id)
                }}>Eliminar producto</span>
              }
            </div>
          </div>
        ) : (
          <div>
            <h2>No hay mas stock de {data.name}</h2>
          </div>
        )
      }
    </>
  )
}

export default ItemDetail;