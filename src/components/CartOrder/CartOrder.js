import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Extras
import swal from 'sweetalert';

// Styles
import './CartOrder.scss';

// Context
import { useCartContext } from '../../context/CartContext';

// Firestore
import { getFirebase, getFirestore } from '../../firebase';

const CartOrder = () => {

  // States
  const [ formData, setFormData ] = useState({});


  // Context
  const { cart, calculateTotalPrice, clear, setOrderId } = useCartContext();


  // Firestore
  const db = getFirestore();
  // const firebase = getFirebase();


  const handleChange = (evt) => {
    const value = evt.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: value
      }
    });
  }


  const sendFormData = () => {
    clear();

    let totalPrice = calculateTotalPrice();


    // Sweet Alert configuration
    swal({
        title: "Su orden fue registrada!",
        text: 'Corrobore haber recibido el numero de orden por su casilla de correo.',
        icon: "success",
        showCancelButton: true,
      });

    // Checking inputs
    console.log('formdata', {
      buyer: formData,
      items: cart,
      total: totalPrice,
      // date: firebase.firestore.Timestamp.fromDate(new Date()),
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


  const verifyEmail = () => {
    let email1 = document.querySelector('.email1').value;
    let email2 = document.querySelector('.email2').value;
    
    if (email1 === email2) return true;
    return false;
  }

  const verifyOthers = () => {
    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.surname').value;
    let email1 = document.querySelector('.email1').value;
    let email2 = document.querySelector('.email2').value;

    if (name && surname && email1 && email2) {
      return true;
    }
    return false;

  }
  
  
  const verify = (event) => {
    event.preventDefault()

    let emailError = document.querySelector('.emailError');
    let emptyError = document.querySelector('.emptyError');

    emailError.style.display = 'none';
    emptyError.style.display = 'none';
    
    if (!verifyEmail()) {
      emailError.style.display = 'inline-block';
    }

    if (!verifyOthers()) {
      emptyError.style.display = 'inline-block';
    }
    
    if (verifyEmail() && verifyOthers()) {
      sendFormData();
    }
    
  }


  return (
    <>

      <Link to='/cart'>
        <span className='button'>
          Carrito
        </span>
      </Link>

      <section className="contactanos">
        <form className="form">
          <h3 className='emptyError'>Corrobore haber completado todas las casillas.</h3>
          <h3 className='emailError'>Corrobore haber ingresado correctamente su información.</h3>
          <input 
            name="name" 
            type="text" 
            id="name" 
            className="name" 
            placeholder="nombre" 
            onChange={handleChange} />
          <input name="surname" 
            type="text" 
            id="surname" 
            className="surname" 
            placeholder="surname" 
            onChange={handleChange} />
          <input name="email" 
            type="email" 
            id="email" 
            className="email email1" 
            placeholder="email" 
            onChange={handleChange} />
          <input 
            name="email" 
            type="email" 
            id="email" 
            className="email email2" 
            placeholder="verificacion email" 
            onChange={handleChange} />
          <textarea 
            name="description" 
            className="description" 
            cols="30" 
            rows="5" 
            placeholder="descripcion" 
            onChange={handleChange} />
          <Link to='/orderdata'>
            <button 
              className="button" 
              onClick={verify}>
                Confirmar compra
            </button>
          </Link>
        </form>
      </section>
    </>
  )

}



export default CartOrder;