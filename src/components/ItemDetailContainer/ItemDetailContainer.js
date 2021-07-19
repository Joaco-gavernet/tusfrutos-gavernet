import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import itemDataBase from '../../data/itemData';
import { Spinner } from 'react-bootstrap';


function ItemDetailContainer () {


  // States
  const [item, setItem] = useState([]);
  const [received, setReceived] = useState(false);

  
  // Params
  const { id } = useParams();
  

  // Effectos
  useEffect(() => {
    const filterData = (data, filterCategory) => {
      let newFilterCategory = filterCategory.substring(1);
      let newItem = data.find(element => element.id === newFilterCategory);
      setItem(newItem);
    };
    
    Promise.resolve(itemDataBase)
    .then(ans => filterData(ans, id));
    setReceived(true);
  }, [id]);
  

  return (
    <>
      {
        (received) ? (
          <ItemDetail data={item} stock={5} />
        ) : (
          <Spinner animation="border" variant="dark" style={{display: 'flex', margin: '40vh'}} />
        )
      }
    </>
  )
}

export default ItemDetailContainer;