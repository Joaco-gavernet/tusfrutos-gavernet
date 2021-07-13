import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
// import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import itemDataBase from '../../data/itemData';


function ItemDetailContainer () {

  const [item, setItem] = useState([]);
  const { id } = useParams();
  
  
  useEffect(() => {
    const filterData = (data, filterCategory) => {
      let newFilterCategory = filterCategory.substring(1);
      let newItem = data.find(element => element.id === newFilterCategory);
      setItem(newItem);
    };
    
    
    Promise.resolve(itemDataBase)
    .then(ans => filterData(ans, id));
  }, [id]);

  console.log('item', item);
  
  return (
    <>
      <ItemDetail data={item} />
    </>
  )

}

export default ItemDetailContainer;

// {
//   (item) ? 
//   (
//     <Spinner animation="border" variant="dark" />
//   ) : (
//     <></>
//   )
// }