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

    if (id) {

      let db = getFirestore();
      let itemCollection = db.collection("items").where("categoryId", "==", id);
      itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('no result');
        } else {
          setItemsData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) ))
        }
      })

    } else {

      let db = getFirestore();
      let itemCollection = db.collection("items");
      itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('no result')
        } else {
          setItemsData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        }
      }).catch(error => {
        console.log('error', error);
      })

    }

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