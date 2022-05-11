import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const indexProduct = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (indexProduct !== -1) {
      const newCart = [...cart];
      newCart[indexProduct].cantidad = newCart[indexProduct].cantidad +
        product.cantidad;
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const buyAll = () => setCart([]);

  const totalItem = cart.reduce((total, item) => total + item.cantidad, 0);

  const precioTotal = cart.reduce(
    (total, item) => total + item.cantidad * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        buyAll,
        totalItem,
        clear,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
