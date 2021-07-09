import React from 'react';

function ItemDetail ({data}) {

  return(
    <>
      <img src={data.img} alt="" />
      <p>
        {data.description}
      </p>
      <h3>{data.price}</h3>
    </>
  )
}

export default ItemDetail;