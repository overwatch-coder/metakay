import { createContext, useState } from "react";

export const productContext = createContext("");

const ProductContextProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    // add products to cart
    const addToCart = (product) => {
      if(cartProducts.length > 0){
        // find current product with reference
        const currentProducts = cartProducts.filter(prod => prod.reference === product.reference);
        const otherProducts = cartProducts.filter(prod => prod.reference !== product.reference);

        if(currentProducts.length > 0){
          const currentProduct = currentProducts.filter(prod => prod.size === product.size);
          const otherCurrentProducts = currentProducts.filter(prod => prod.size !== product.size);

          if(currentProduct.length > 0){
            currentProduct[0].quantity += 1;
            setCartProducts(([...currentProduct, ...otherCurrentProducts, ...otherProducts]));
          }else{
            setCartProducts(([{...product, quantity: 1}, ...otherCurrentProducts, ...otherProducts]));
          }
        }else{
          product.quantity = 1;
          setCartProducts(prev => [...prev, product]);
        }
      }else{
        product.quantity = 1;
        setCartProducts(prev => [...prev, product]);
      }
      
    }

    // add items to local storage
    localStorage.setItem('cart', JSON.stringify(cartProducts));

    // remove products from cart
    const removeFromCart = (reference, size) => {
      const remainingProducts = cartProducts.filter(product => product.reference !== reference);
      const productsToDeleteFrom = cartProducts.filter(product => product.reference === reference);
      const productsRemaining = productsToDeleteFrom.filter(prod => prod.size !== size);

      setCartProducts([...productsRemaining,...remainingProducts]);
      localStorage.setItem('cart', JSON.stringify([...productsRemaining,...remainingProducts]));
    }

    // clear carts
    const clearCart = () => {
      setCartProducts([]);
      localStorage.removeItem('cart');
    }

    // add one quantity to product
    const addQuantity = (reference, size) => {
      // get all other products without ref which doesn't match filter param
      const remainingProducts = cartProducts.filter(product => product.reference !== reference);

      // get all products with ref which match filter params
      const products = cartProducts.filter(product => product.reference === reference);

      // get all products with ref, size which doesn't match filter param
      const productsRemaining = products.filter(prod => prod.size !== size);

      // get exact product with ref and size
      const product = products.filter(prod => prod.size === size);

      // update product quantity
      product[0].quantity += 1;
      setCartProducts([...product, ...remainingProducts, ...productsRemaining]);
      localStorage.setItem('cart', JSON.stringify([...product, ...remainingProducts, ...productsRemaining]));
    }

    // remove one quantity from product
    const removeQuantity = (reference, size) => {
      // get all other products without ref which doesn't match filter param
      const remainingProducts = cartProducts.filter(product => product.reference !== reference);

      // get all products with ref which match filter params
      const products = cartProducts.filter(product => product.reference === reference);

      // get all products with ref, size which doesn't match filter param
      const productsRemaining = products.filter(prod => prod.size !== size);

      // get exact product with ref and size
      const product = products.filter(prod => prod.size === size);

      // update product quantity
      if(product[0].quantity === 1){
        removeFromCart(reference, size);
        setCartProducts([...productsRemaining, ...remainingProducts]);
        localStorage.setItem('cart', JSON.stringify([...productsRemaining, ...remainingProducts]));
      }else{
        product[0].quantity -= 1;
        setCartProducts([...product, ...remainingProducts, ...productsRemaining]);
        localStorage.setItem('cart', JSON.stringify([...product, ...remainingProducts, ...productsRemaining]));
      }
    }

    // get overall total price of products
    const totalPrice = cartProducts.reduce((sum, product) => sum += product.quantity * product.price, 0);

    // get individual total price of products
    const individualPrice = (quantity, price) => {
      return quantity * price;
    }

    const values = {
        cartProducts, 
        setCartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        addQuantity,
        removeQuantity,
        individualPrice,
        totalPrice 
    }

  return (
    <productContext.Provider value={values}>
        { children }
    </productContext.Provider>
  )
}

export default ProductContextProvider