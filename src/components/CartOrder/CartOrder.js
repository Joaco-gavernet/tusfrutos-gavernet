import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './CartOrder.scss';

// Context
import { useCartContext } from '../../context/CartContext';

// Firestore
import { getFirestore } from '../../firebase';

const CartOrder = () => {

  // States
  const [ orderId, setOrderId ] = useState("");
  const [ formData, setFormData ] = useState({});


  // Context
  const { cart, totalPrice } = useCartContext();


  // Firestore
  const db = getFirestore();


  const handleChange = (evt) => {
    const value = evt.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: value
      }
    });
  }


  const sendFormData = (event) => {
    event.preventDefault()

    console.log('formdata', {
      buyer: formData,
      items: cart,
      total: totalPrice,
    });


    db.collection("order").add({
      formData,
      cart,
      totalPrice,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setOrderId(docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }


  useEffect(() => {


    // Checking functionality
    const items = db.collection("items").doc("1")
    items.get().then(querySnapshot => {
      let example = querySnapshot.data();
      console.log('example', example);
    })


  }, [])


  return (
    <>

      <Link to='/cart'>
        Regresar
      </Link>

      <section className="contactanos">
        <form
          className="form">
          <input name="name" type="text" id="name" className="name" placeholder="name" onChange={handleChange} />
          <input name="instagram" type="text" id="instagram" className="instagram" placeholder="instagram" onChange={handleChange} />
          <input name="email" type="email" id="email" className="email" placeholder="email" onChange={handleChange} />
          <textarea name="description" className="description" cols="30" rows="5" placeholder="description" onChange={handleChange} />
          <button className="button" onClick={sendFormData} >Confirmar compra</button>
        </form>
      </section>

      {
        orderId && (
          <div>
            <h3>Numero de orden:</h3>
            <h4>{orderId}</h4>
          </div>
        )
      }
      
    </>
  )

}



export default CartOrder;