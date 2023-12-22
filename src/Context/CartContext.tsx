import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
  cartItems: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item: string) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
