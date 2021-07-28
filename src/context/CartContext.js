import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  const calculateTotalPrice = () => cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)


  const calculateTotalItems = () => cart.reduce((accumulator, item) => accumulator + item.quantity, 0);


  const addItem = (item, quantity = item.quantity) => {
    if (isInCart(item.id)) {
      if (isInStock(item)) {
        let newQuantity = item.quantity + 1;
        let example = cart.find(instance => instance.id === item.id).quantity = newQuantity;
        setCart(example);
        console.log('cart', cart);
      }
    } else {
      item.quantity = quantity;
      setCart([...cart, item])
    }
  }


  const decrementItem = () => {
    console.log('hola');
  }


  const removeItem = (id) => {
    let itemSpected = cart.find(ex => ex.id === id);
    let newCart = cart.splice(cart.indexOf(itemSpected), 1);
    setCart(newCart);
  }


  const clear = () => setCart([]);


  const isInCart = (id) => cart.some(instance => instance.id === id);

  const isInStock = (item) => {
    console.log('item', item)
    return item.quantity < 20
  } 


  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      decrementItem,
      removeItem,
      clear,
      calculateTotalPrice,
      calculateTotalItems,
      }}>
      {children}
    </CartContext.Provider>
  )
}