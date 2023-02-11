import { createContext, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [navbarActive, setNavbarActive] = useState(false);

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    // add products to cart
    const addToCart = (product, reference) => {
      console.log(product, reference);
      setCartProducts(prev => ([...prev, product]));
    }

    // add items to local storage
    localStorage.setItem('cart', JSON.stringify(cartProducts));

    // remove products from cart
    const removeFromCart = (reference) => {
      console.log(reference, 'removed');
    }

    // clear carts
    const clearCart = () => {
      console.log('all products cleared');
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