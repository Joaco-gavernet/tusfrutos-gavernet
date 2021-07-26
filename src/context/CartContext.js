import React, { createContext, useState } from 'react';

export const CartContext = createContext();
// export const useCartContext = () => useContext(CartContext); // Ahorra tener que llamar al hook useContext al consumir el contexto en los distintos componentes. No funciona y no encuentro solucion. 


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  const calculateTotalPrice = () => cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)


  const calculateTotalItems = () => cart.reduce((accumulator, item) => accumulator + item.quantity, 0);


  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let element = cart.find(instance => instance.id === item.id)
      element.quantity = element.quantity + quantity;
    } else {
      item.quantity = quantity;
      setCart([...cart, item])
    }
  }


  const removeItem = (id) => {
    let itemSpected = cart.find(ex => ex.id === id);
    let newCart = cart.splice(cart.indexOf(itemSpected), 1);
    setCart(newCart);
  }


  const clear = () => setCart([]);


  const isInCart = (id) => cart.some(instance => instance.id === id);


  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      removeItem,
      clear,
      calculateTotalPrice,
      calculateTotalItems,
      }}>
      {children}
    </CartContext.Provider>
  )
}