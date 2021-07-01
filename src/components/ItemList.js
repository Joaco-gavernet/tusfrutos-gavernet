import React, {useEffect, useState} from 'react';
import Item from './Item.js';


function ItemList ({data}) {

  const [itemsData, setItemsData] = useState();

  useEffect(() => setItemsData(data), [ItemList]);

  return (
    <>
      {/* {itemsData.map((itemInstance, i) => <Item {...itemInstance} key={i} />)} */}
      {console.log(itemsData)}
    </>
  )
}

export default ItemList;




// //////////////////////////////////////////////////////////////////////

  // const [itemData, setItemData] = useState([]);

  // const ItemPromise = new Promise((resolve, reject) => {
  //   setTimeout(resolve(itemDataBase), 2000)
  //   reject('ItemPromise rejected.')
  // })

  // ItemPromise.then(answer => setItemData(answer))
  // ItemPromise.catch(answer => console.log(answer))

  // const [nut, setNut] = useState({});

  // useEffect(() => {
  //   fetch('https://mocki.io/v1/d100338d-4cc8-436c-84d7-936247afb1d1', {
  //     method: 'GET'
  //   })
  //   .then(ans => ans.json())
  //   .then(ans => setNut(ans))
  // }, [])

// //////////////////////////////////////////////////////////////////////


  // Intento de implementar la Promise con fetch
  // const ItemPromise = new Promise((resolve, reject) => {
    //   fetch('https://mocki.io/v1/96664b5c-e01d-49fb-a0de-b7d9a11a0127')
    //   .then(result => result.json())
    //   .then(resultJSON => resultJSON)
    // resolve()
    // .then(resolve(console.log('Success')))

  //   reject('Hubo un error');
  // })

  // ItemPromise.then(resultJSON => setItemData(resultJSON))
  // ItemPromise.then(result => console.log(result))
  // ItemPromise.catch(msj => console.log(msj));
  // ItemPromise.finally(console.log('Fin de la promesa'))
