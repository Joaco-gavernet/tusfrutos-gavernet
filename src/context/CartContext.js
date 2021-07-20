import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    // Verificar presencia

    setCart([...cart, {item, quantity}])
  }

  const removeItem = (id) => {
    let example = cart.find( ex => ex.item.id === id);
    cart.splice(cart.indexOf(example), 1);

    // (cart && cart.includes(item.id)) && cart.find(item => {
    //   if (item.id === id) {
    //     let index = cart.indexOf(item)
    //     return cart.splice(index, 1);
    //   }
    // })
  }

  // clear()
  
  // isInCart(id)

  useEffect(() => {
    console.log('CartContext:', cart);
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      removeItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}