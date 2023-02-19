import { createContext, useState } from "react";

export const productContext = createContext("");

const ProductContextProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false);
    const [products, setProducts] = useState(null);

    const values = {
      openCart,
      setOpenCart,
      products,
      setProducts
    }

  return (
    <productContext.Provider value={values}>
        { children }
    </productContext.Provider>
  )
}

export default ProductContextProvider