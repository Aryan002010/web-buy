import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [total, setTotal] = useState();

  return (
    <ShoppingContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
