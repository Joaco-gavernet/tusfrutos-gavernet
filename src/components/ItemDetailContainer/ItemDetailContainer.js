import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

// Data
const itemData = [
  {
    "img": "https://picsum.photos/200/300",
    "description": "lorem impaosidj a;ljdslakj poamscd;laj fdjasjdfha;lskjd pdjfas;kdjf;lkasdfhkj",
    "price": "300",
  }
]

const itemPromise = new Promise(resolve => {
  return setTimeout(() => {
    resolve(itemData)
  }, 3000);
})

function ItemDetailContainer () {

  const [item, setItem] = useState([]);
  const { name } = useParams();
  console.log(name);
  
  useEffect(() => {
    itemPromise.then(response => setItem(response));
    itemPromise.catch(error => console.log(error));
  }, []);

  return (
    <>
      {
        (item.length === 0) ? 
        (
          <Spinner animation="border" variant="dark" />
        ) : (
          <ItemDetail data={item[0]} />
        )
      }
    </>
  )

}

export default ItemDetailContainer;