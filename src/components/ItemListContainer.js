import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const itemDataBase = [
  {
    "name": "Pasas",
    "img": "assets/castanas.png",
    "description": "Humedas y sabrosas pasas de uva."
  },
  {
    "name": "Nueces",
    "img": "assets/nueces.png",
    "description": "Las tradicionales y tan buscadas nueces."
  },
  {
    "name": "Almendras",
    "img": "assets/almendras.png",
    "description": "Almendras para alargar tus años de vida."
  },
  {
    "name": "Castañas",
    "img": "assets/castanas.png",
    "description": "Mejores que cualquier otro fruto."
  }
]

const itemPromise = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve(itemDataBase)
  }, 2000)
  reject('itemPromise failed')
})

export default function ItemListContainer () {
  
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    itemPromise.then(ans => setItemsData(ans));
    itemPromise.catch(msj => console.log(msj));
  }, [])

  return (
    <>
      <h2>Listado de productos</h2>
      <ItemList data={itemsData} />
    </>
  )
}

