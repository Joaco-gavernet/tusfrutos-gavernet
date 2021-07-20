import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState({
    total: 0,
    selection: null,
  });

  const calculateTotal = (amount) => {
    cart.total = cart.total + JSON.parse(amount);
    console.log(cart.total);
  }

  const addItem = (item, quantity = 5) => {
    let itemId = item.id;
    let itemPrice = item.price;
    let subtotal = itemPrice * quantity;
    console.log('selection', cart.selection);

    calculateTotal(subtotal);
    
    setCart(
      {...cart, 
        selection:
        {
          itemId,
          quantity,
        }
      }
    )

  }

  useEffect(() => {
    console.log('CartContext value:', cart);
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}