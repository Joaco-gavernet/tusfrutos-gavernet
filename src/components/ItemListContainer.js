import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import itemDataBase from '../data/itemData';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



export default function ItemListContainer () {
  
  const [itemsData, setItemsData] = useState([]);
  const {id} = useParams();
  console.log(id)

  const filterData = (data, filterCategory) => {
    setItemsData(data.filter(item => item.category === filterCategory));
  }

  useEffect(() => {
    Promise.resolve(itemDataBase)
    .then(ans => filterData(ans, id));
  }, [id])

  return (
    <>
      {
        (itemsData.length !== 0) ? (
          <>
            <h2>{id.charAt(0).toUpperCase() + id.slice(1) /* Convierte la primer letra a uppercase */}</h2>
            <ItemList data={itemsData} />
          </>
        ) : (
          <Spinner animation="border" variant="dark" />
        )
      }
    </>
  )
}
