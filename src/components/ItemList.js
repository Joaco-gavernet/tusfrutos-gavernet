import React from 'react';
import Item from './Item.js';


function ItemList ({data}) {

  return (
    <>
      {data.map((element, i) => <Item {...element} key={i} />)}
    </>
  )
}

export default ItemList;
