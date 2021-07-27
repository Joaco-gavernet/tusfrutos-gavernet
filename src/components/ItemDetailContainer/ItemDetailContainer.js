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
      let newItem = data.find(element => element.id === JSON.parse(newFilterCategory));
      setItem(newItem);
    };
    
    setTimeout(
      () => {
        Promise.resolve(itemDataBase)
        .then(ans => filterData(ans, id));
        console.log();
        setReceived(true);
      }
      , 500)
  }, [id]);


  return (
    <>
      {
        (received) ? (
          <ItemDetail data={item} />
        ) : (
          <Spinner animation="border" variant="dark" style={{display: 'flex', margin: '40vh'}} />
        )
      }
    </>
  )
}

export default ItemDetailContainer;