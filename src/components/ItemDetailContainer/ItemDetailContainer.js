import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

// Data
// const itemData = {
//   img: 'https://picsum.photos/200/300',
//   description: 'lorem impaosidj a;ljdslakj poamscd;laj fdjasjdfha;lskjd pdjfas;kdjf;lkasdfhkj',
//   price: '300',
// }

const itemData = ['https://picsum.photos/200/300', 'lorem impaosidj a;ljdslakj poamscd;laj fdjasjdfha;lskjd pdjfas;kdjf;lkasdfhkj', '300']

const itemPromise = new Promise(resolve => {
  return setTimeout(() => {
    resolve(itemData)
  }, 3000);
})

function ItemDetailContainer () {

  const [item, setItem] = useState([]);

  useEffect(() => {
    itemPromise.then(response => setItem(response));
    itemPromise.catch(error => console.log(error));
  }, []);

  return (
    <>
      <ItemDetail data={item} />
    </>
  )

}

export default ItemDetailContainer;