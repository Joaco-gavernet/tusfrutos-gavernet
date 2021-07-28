import React, { useEffect, useState } from 'react';

// Components
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// Firestore
import { getFirestore } from '../../firebase/index';


function ItemDetailContainer () {


  // States
  const [ item, setItem ] = useState([]);
  const [ received, setReceived ] = useState(false);

  
  // Params
  const { id } = useParams();

    
  useEffect(() => {
    
    let db = getFirestore();
    let itemCollection = db
    .collection("items")
    .doc(id.substring(1));

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.exists) {
          setItem(querySnapshot.data())
        } else {
          console.log('Entro false');
        }
    })
    .catch(error => console.log('error', error))

    setReceived(true);
  }, [id])


  return (
    <>
      {
        (received) ? (
          <ItemDetail data={item} />
        ) : (
          <Spinner animation="border" variant="dark" style={{display: 'flex', margin: '40vh'}} />
        )
      }
    </>
  )
}

export default ItemDetailContainer;