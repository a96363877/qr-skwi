// src/CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);

  const addToCart = (item: any) => {
    setCartItems((prevItems: any[]) => [...prevItems, item]);
    setTotal((prv) => prv + parseFloat(item.price));
  };

  const removeFromCart = (itemId: any) => {
    setCartItems((prevItems: any) =>
      prevItems.filter((item: any) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ total, cartItems, addToCart, removeFromCart, clearCart } as any}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
