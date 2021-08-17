import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';


function Item ({title, description, image, id}) {

  return (
    <Link to={`/item/${id}`} className='link'>
      <div className='Item'>
        <img src={image} alt="" className='Item__img' />

        <div className='Item__div'>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={`/item/${id}`} className='Item__link'>
            <span className='button'>Detalles</span>
          </Link>
        </div>
      </div>
    </Link>
  )

}




export default Item;