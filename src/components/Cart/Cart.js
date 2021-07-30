import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import CartItem from '../CartItem/CartItem';


// Context
import { useCartContext } from '../../context/CartContext';


export default function Cart () {


  const { cart, clear, calculateTotalPrice } = useCartContext();

  return (
    <>
      <div className='Cart'>
        <h2>Carrito</h2>
        {
          (cart.length > 0) ? (
            <>
              <table className='table'>
                <tbody>
                  <tr>
                    <th colSpan="2">
                      <h3>Total: ${calculateTotalPrice()}</h3>
                    </th>
                  </tr>

                  {cart.map((instance, i) => <CartItem key={i} data={instance} />)}

                </tbody>
              </table>

              <button onClick={clear}>Vaciar carrito</button>
            </>
          ) : (
            <>
              <h3>No hay productos en el carrito.</h3>
              <Link to="/">
                <span className='button'>
                  Sumar productos
                </span>
              </Link>

              <Link to="/cart/order">
                <span className='button'>
                  Finalizar orden
                </span>
              </Link>
            </>
          )
        }
        
      </div>
    </>
  )
}