import { createContext, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [navbarActive, setNavbarActive] = useState(false);

    const values = {
        navbarActive,
        setNavbarActive,
    }

  return (
    <productContext.Provider value={values}>
        { children }
    </productContext.Provider>
  )
}

export default ProductContextProvider