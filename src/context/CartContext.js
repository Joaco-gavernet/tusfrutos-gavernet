import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  const calculateTotalPrice = () => cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)


  const calculateTotalItems = () => cart.reduce((accumulator, item) => accumulator + item.quantity, 0);


  const addItem = (itemSelected, quantityUpdate = 1) => {
    
    if (isInCart(itemSelected.id)) {
      const newCartItem = cart.map(item => {
        if (item.id === itemSelected.id) {
          return { ...item, quantity: item.quantity + quantityUpdate };
        }
        return item;
      });
      setCart(newCartItem);
    } else {
      itemSelected.quantity = quantityUpdate;
      setCart([...cart, itemSelected]);
    }
  }


  const removeItem = (id) => {
    let itemSpected = cart.find(ex => ex.id === id);
    // let newCart = cart.splice(cart.indexOf(itemSpected), 1);
    // setCart(newCart);

    let index = cart.indexOf(itemSpected);
    console.log('itemToRemove', cart[index]);
    console.log('cart', cart);
  }



  const clear = () => setCart([]);
  const isInCart = (id) => cart.some(instance => instance.id === id);
  // isInStock()

  // updateQuantity()


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