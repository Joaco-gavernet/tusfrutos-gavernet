import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [ totalPrice, setTotalPrice ] = useState(0);


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


  const removeItem = (id) => setCart(cart.filter(itemSelected => itemSelected.id !== id));


  const clear = () => setCart([]);
  const isInCart = (id) => cart.some(instance => instance.id === id);
  // isInStock()
  // updateQuantity()


  useEffect(() => {
    // Calculate total price
    let result = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)
    setTotalPrice(result);

    
  }, [cart])


  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      removeItem,
      clear,
      totalPrice,
      calculateTotalItems,
      }}>
      {children}
    </CartContext.Provider>
  )
}