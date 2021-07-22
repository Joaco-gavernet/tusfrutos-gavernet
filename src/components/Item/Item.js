import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';


function Item ({name, description, img, id}) {

  return (
    <div className='Item' style={{display: 'flex'}}>
      <img src={img} alt="" className='Item__img' />

      <div className='Item__div'>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/item/:${id}`}>
          <button>Comprar</button>
        </Link>
      </div>

    </div>
  )

}




export default Item;