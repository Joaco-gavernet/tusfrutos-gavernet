import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();
// export const useCartContext = () => useContext(CartContext); // Ahorra tener que llamar al hook useContext al consumir el contexto en los distintos componentes. No funciona y no encuentro solucion. 

    // let subtotal = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity);
    // setTotal(subtotal);


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    calculateTotal();
    console.log('total', total);
  }, [cart])


  const calculateTotal = () => {
    console.log('cart from calculateTotal', cart);

    if (cart.length >= 1) {

      // cart.map(
      //   instance => setTotal(total + (JSON.parse(instance.price) * instance.quantity))
      // )

      let example = cart.reduce(
        (accumulator, item) => accumulator + item.price, 0
      )

      console.log('example', example);
    }
  }


  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let element = cart.find(instance => instance.id === item.id)
      element.quantity = element.quantity + quantity
    } else {
      item.quantity = quantity;
      setCart([...cart, item])
    }
    console.log('cart from addItem', cart);
  }


  const removeItem = (id) => {
    let itemSpected = cart.find(ex => ex.id === id);
    cart.splice(cart.indexOf(itemSpected), 1);
  }


  const clear = () => setCart([]);


  const isInCart = (id) => cart.some(instance => instance.id === id);


  return (
    <CartContext.Provider value={{
      cart, 
      addItem,
      removeItem,
      clear,
      total,
      }}>
      {children}
    </CartContext.Provider>
  )
}