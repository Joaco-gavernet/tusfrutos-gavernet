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

function ItemListContainer () {
  
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    setItemsData(itemDataBase)
  }, [])

  return (
    <>
      <h2>Listado de productos</h2>
      <ItemList data={itemsData} />
    </>
  )
}

export default ItemListContainer;