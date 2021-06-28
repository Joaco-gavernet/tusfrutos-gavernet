import React, {useState} from 'react';
import Item from './Item.js';

const itemDataBase = [
  {
    "name": "Pasas",
    "img": "assets/castanas.png",
    "description": "Humedas y sabrosas pasas de uva."
  },
  {
    "name": "Nueces",
    "img": "https://picsum.photos/id/237/200/300",
    "description": "Las tradicionales y tan buscadas nueces."
  },
  {
    "name": "Almendras",
    "img": "https://picsum.photos/id/237/200/300",
    "description": "Almendras para alargar tus años de vida."
  },
  {
    "name": "Castañas",
    "img": "https://picsum.photos/id/237/200/300",
    "description": "Mejores que cualquier otro fruto."
  }
]

function ItemList () {

  const [itemData, setItemData] = useState([]);

  const ItemPromise = new Promise((resolve, reject) => {
    setTimeout(resolve(itemDataBase), 2000)
    reject('ItemPromise rejected.')
  })

  ItemPromise.then(answer => setItemData(answer))
  ItemPromise.catch(answer => console.log(answer))

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

  return (
    <>
      {(true) ? (
        itemData.map((item, i) => <Item {...item} key={i} />)
        ) : (
          <p>Cargando...</p>
        )
      }
    </>
  )
}

export default ItemList;