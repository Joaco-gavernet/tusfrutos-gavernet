import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import itemDataBase from '../data/itemData';
import { useParams } from 'react-router-dom';

const itemPromise = new Promise(resolve => {
  return setTimeout(() => {
    resolve(itemDataBase)
  }, 2000)
})

export default function ItemListContainer () {
  
  const [itemsData, setItemsData] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    itemPromise.then(ans => setItemsData(ans)); // se puede simplificar con --> setItemsData
    itemPromise.catch(msj => console.log(msj));
  }, [category])

  return (
    <>
      <h2>{category}</h2>
      {
        (itemsData.length !== 0) ? console.log(itemsData.filter(item => item.category === category)) : null
      }
      <ItemList data={itemsData} />
    </>
  )
}

