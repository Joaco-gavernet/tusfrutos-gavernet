import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.scss';


function ItemList ({data}) {

  return (
    <div className='ItemList'>
      {data.map((element, i) => <Item {...element} key={i} />)}
    </div>
  )
}

export default ItemList;
