import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
// import itemDataBase from '../../data/itemData';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';


// Firestore
import { getFirestore } from '../../firebase';


export default function ItemListContainer () {

  const [itemsData, setItemsData] = useState([]);
  const {id} = useParams();

  // const filterData = (data, filterCategory) => {
  //   setItemsData(data.filter(item => item.category === filterCategory));
  // }

  // useEffect(() => {
  //   if (id) Promise.resolve(itemDataBase).then(ans => filterData(ans, id));
  //   if (!id) Promise.resolve(itemDataBase).then(ans => setItemsData(ans));
  // }, [id])


    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('no result')
        } else {
          setItemsData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        }
    }).catch(error => {
        console.log('error', error);
    })



  return (
    <>
      <div className='ItemListContainer'>
        {
          (id) && (<h2>{id.charAt(0).toUpperCase() + id.slice(1) /* Convierte la primer letra a uppercase */}</h2>)
        }
        <ItemList data={itemsData} />
      </div>
    </>
  )
}