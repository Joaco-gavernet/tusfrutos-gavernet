import React from 'react';

function ItemDetail ({data}) {

  return(
    <>
      <img src={data[0]} alt="" />
      <p>
        {data[1]}
      </p>
      <h3>{data[2]}</h3>
    </>
  )
}

export default ItemDetail;