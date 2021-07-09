import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import itemDataBase from '../data/itemData';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



export default function ItemListContainer () {
  
  const [itemsData, setItemsData] = useState([]);
  const {category} = useParams();
  
  const itemPromise = new Promise(resolve => {
    if (category) {
      return setTimeout(() => {
        let filtered = itemDataBase.filter(item => item.category === category)
        resolve(filtered);
      }, 2000);
    } else {
      return resolve(itemDataBase);
    } 


    // return setTimeout(() => {
    //   resolve(itemDataBase)
    // }, 2000)
  })

  const filterData = () => {
    if (category) {
      let dataFiltered = itemsData.filter(item => item.category === category);
      console.log(dataFiltered);
      return dataFiltered;
    }
  }

  useEffect(() => {
    itemPromise.then(setItemsData); // ans => setItemsData(ans)
    let result = filterData();
    setItemsData(result);
  }, [category])

  return (
    <>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1) /* Convierte la primer letra a uppercase */}</h2>
      {
        (itemsData.length !== 0) ? (
          <ItemList data={itemsData} />
        ) : (
          <Spinner animation="border" variant="dark" />
        )
      }
    </>
  )
}
