import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  const addToCard = (product) => {
    setCard((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCard = (id) => {
    setCard((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCard(id);
      return;
    }
    setCard((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  return (
    <CardContext.Provider value={{ card, addToCard, removeFromCard, updateQuantity }}>
      {children}
    </CardContext.Provider>
  );
};