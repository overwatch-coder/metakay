import { createContext, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [navbarActive, setNavbarActive] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);

    const values = {
        navbarActive,
        setNavbarActive,
        cartProducts, 
        setCartProducts
    }

  return (
    <productContext.Provider value={values}>
        { children }
    </productContext.Provider>
  )
}

export default ProductContextProvider