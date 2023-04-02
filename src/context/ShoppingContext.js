import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setTotal(total + item.price);
    setCart([...cart, item]);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cart,
        addToCart,
        total,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
