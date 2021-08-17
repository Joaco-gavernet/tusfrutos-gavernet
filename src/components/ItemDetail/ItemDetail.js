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

  const viewChange = () => {
    setVisible(!isVisible);
  }

  const onAdd = (quantity) => {
    viewChange();
    addItem(data, quantity);
  }


  return(
    <>
      {
        (data.stock !== 0) ? (
          <>
            <Link to='/'>
              <span className='button'>
                Home
              </span>
            </Link>
            <div className='ItemDetail'>
              <img src={data.image} alt="" className='ItemDetail__img' />
              <div className='ItemDetail__div'>
                <h2>{data.title}</h2>
                <p className='div__description'>
                  {data.description}
                </p>
                <h3>${data.price}</h3>
                {
                  isVisible && <ItemCount onAdd={onAdd} stock={data.stock} />
                }
                {
                  !isVisible && <Link to='/cart'><span className='button div__buttonEnd'>Terminar compra</span></Link>
                }
                {
                  !isVisible && <span className='button div__buttonRemove' onClick={() => {
                    viewChange();
                    removeItem(data.id)
                  }}>Eliminar producto</span>
                }
              </div>
            </div>
          </>
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