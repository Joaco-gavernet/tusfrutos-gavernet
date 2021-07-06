import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import itemDataBase from '../data/itemData';

const itemPromise = new Promise(resolve => {
  return setTimeout(() => {
    resolve(itemDataBase)
  }, 2000)
})

export default function ItemListContainer () {
  
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    itemPromise.then(ans => setItemsData(ans));
    itemPromise.catch(msj => console.log(msj));
  }, [])

  return (
    <>
      <h2>Listado de productos</h2>
      <ItemList data={itemsData} />
    </>
  )
}

