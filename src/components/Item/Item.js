import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';


function Item ({name, description, image, id}) {

  return (
    <div className='Item' style={{display: 'flex'}}>
      <img src={image} alt="" className='Item__img' />

      <div className='Item__div'>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/item/${id}`}>
          <span className='button'>Detalles</span>
        </Link>
      </div>

    </div>
  )

}




export default Item;