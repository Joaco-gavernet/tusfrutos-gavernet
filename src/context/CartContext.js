import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let element = cart.find(instance => instance.id === item.id)
      element.quantity = element.quantity + quantity
    } else {
      item.quantity = quantity;
      setCart([...cart, item])
    }
  }


  const removeItem = (id) => {
    let itemSpected = cart.find(ex => ex.id === id);
    cart.splice(cart.indexOf(itemSpected), 1);
  }


  const clear = () => console.log(cart);


  const isInCart = (id) => cart.some(instance => instance.id === id);


  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      removeItem,
      clear,
      }}>
      {children}
    </CartContext.Provider>
  )
}