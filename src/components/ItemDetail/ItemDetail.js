import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.scss';

function ItemDetail ({data, stock}) {
  
  const [ quantityItem, setQuantityItem ] = useState('example');
  const [ isVisible, setVisible ] = useState(true);
  const [ isButton, setButton ] = useState(false);

  const onAdd = (receivedQuantity) => {
    setQuantityItem(JSON.parse(receivedQuantity));
    setVisible(!isVisible);
    setButton(!isButton);
  }

  console.log(quantityItem)


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