import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function Item ({name, description, img}) {

  return (
    <div style={{display: 'flex'}}>
      <img src={img} alt="" style={{maxWidth: '200px'}} />
      {console.log(img)}
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={'/item/:name'}>
          <button>Detalles</button>
        </Link>
        <ItemCount initial={1} stock={8} onAdd={() => {alert('Producto agregado')}} />
      </div>
    </div>
  )

}




export default Item;