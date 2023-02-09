import { createContext, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [navbarActive, setNavbarActive] = useState(false);

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    // add products to cart
    const addToCart = (product, id) => {
      console.log(product, id);
    }

    // remove products from cart
    const removeFromCart = (products, id) => {
      console.log(products, id);
    }

    // clear carts
    const clearCart = (products) => {
      console.log(products);
    }

    const values = {
        navbarActive,
        setNavbarActive,
        cartProducts, 
        setCartProducts,
        addToCart,
        removeFromCart,
        clearCart
    }

  return (
    <productContext.Provider value={values}>
        { children }
    </productContext.Provider>
  )
}

export default ProductContextProvider