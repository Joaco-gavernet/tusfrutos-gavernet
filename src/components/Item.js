import React from 'react';


function Item ({name, description, img}) {

  return (
    <>
      <div>
        <h2>{name}</h2>
        <img src={img} alt="" style={{maxWidth: '200px'}} />
        <p>{description}</p>
      </div>
    </>
  )

}




export default Item;