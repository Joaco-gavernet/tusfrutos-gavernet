import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


// Components
import ItemList from '../ItemList/ItemList';


// Styles
import './ItemListContainer.scss';


// Firestore
import { getFirestore } from '../../firebase';


export default function ItemListContainer () {


  const [ itemsData, setItemsData ] = useState([]);


  const { id } = useParams();


  useEffect(() => {

      let db = getFirestore();
      let itemCollection;

      if (id) {
        itemCollection = db.collection("items").where("categoryId", "==", id);
      } else {
        itemCollection = db.collection("items");
      }

      itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('no result');
        } else {
          let partialStore = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          let filteredSnapshot = partialStore.filter(doc => doc.stock > 1);
          setItemsData(filteredSnapshot);
        }
      })

}, [id])



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