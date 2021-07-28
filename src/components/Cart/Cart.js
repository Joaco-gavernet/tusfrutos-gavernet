import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import TableRow from '../TableRow/TableRow';


// Context
import { useCartContext } from '../../context/CartContext';


export default function Cart () {


  const { cart, clear, calculateTotalPrice, removeItem, addItem, decrementItem } = useCartContext();


  useEffect(() => {
    
  }, [cart])


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

                  {cart.map((instance, i) => <TableRow key={i} data={instance} countUp={addItem} countDown={decrementItem} removeItem={removeItem} />)}

                </tbody>
              </table>

              <button onClick={clear}>Vaciar carrito</button>
            </>
          ) : (
            <>
              <h3>No hay productos en el carrito.</h3>
              <Link to="/">
                <span>Seguir comprando</span>
              </Link>
            </>
          )
        }
        
      </div>
    </>
  )
}