import React from 'react';
import ItemList from './ItemList';

function ItemListContainer ({data}) {
  return (
    <>
      <h2>Hola {data[2]}, como estas?</h2>
      <h3>Aca van nuestros items.</h3>
      <ItemList />
    </>
  )
}

export default ItemListContainer;