import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import TableRow from '../TableRow/TableRow';


// Context
import { CartContext } from '../../context/CartContext';



export default function Cart () {


  const { cart, clear, calculateTotalPrice, removeItem } = useContext(CartContext);


  const countUp = (instance) => {
    if (instance.quantity < instance.stock) {
      instance.quantity ++
    } else {
      alert('Stock insuficiente')
    }
  }

  const countDown = (instance) => {
    if (instance.quantity >= 1) {
      instance.quantity --
    } else {
      let itemSpected = cart.find(ex => ex.id === instance.id);
      cart.splice(cart.indexOf(itemSpected), 1);
    }
  }


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

                  {/* <tr className='tableRow'>
                    <td className='tableRow__detail'>
                      <img src='https://place-hold.it/100x100' alt="" />
                    </td>
                    <td className='tableRow__name'>
                      <h3 className='tableRow__name__h3'>Pasas</h3>
                    </td>
                    <td className='tableRow__count'>
                      <h3 className='tableRow__count__subtotal'>$1200</h3>
                      <div className='ItemCount'>
                        <button className='itemCount__modifier'>-</button>
                        <h3 className='itemCount__h3'>5</h3>
                        <button className='itemCount__modifier' onClick={() => console.log(cart[0])}>+</button>
                      </div>
                    </td>
                  </tr> */}

                  {cart.map((instance, i) => <TableRow key={i} data={instance} countUp={countUp} countDown={countDown} removeItem={removeItem} />)}

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