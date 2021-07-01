import React from 'react';
import ItemCount from './ItemCount';


function Item ({name, description, img}) {

  return (
    <>
      <div style={{display: 'flex'}}>
        <img src={img} alt="" style={{maxWidth: '200px'}} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <ItemCount initial={1} stock={8} onAdd={() => {alert('Producto agregado')}} />
        </div>
      </div>
    </>
  )

}




export default Item;