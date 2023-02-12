import { useContext } from "react";
import { Helmet } from "react-helmet-async"
import { Link, useNavigation } from "react-router-dom";
import { productContext } from "../context/ProductContext";
import emptyCart from '../assets/cart_empty.png';
import ProductCart from "../components/ProductCart";

const Cart = () => {
  // displaying loading screen while data is being fetched
  const navigation = useNavigation();

  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }

  const { 
    cartProducts,
    clearCart, 
    removeFromCart,
    addQuantity,
    removeQuantity,
    totalPrice,
    individualPrice, 
  } = useContext(productContext);

  return (
    <section className="pb-20">
      <Helmet>
        <title>Cart - Checkout | Metakay Official</title>
      </Helmet>

       {/* Header Hero Section */}
        
      <div 
        className='bg-gray w-screen py-3 mb-10 text-center font-georgia font-medium uppercase text-white text-lg tracking-wider md:text-3xl'>
          <h2>Your Cart</h2>
      </div>

      <div className="px-7">
        {!(cartProducts.length > 0) ?
          <div className="flex flex-col items-center gap-y-7 text-center mx-auto">
            <img src={emptyCart} alt="Empty Cart" className="object-contain" />

            <h3 className="text-xl md:text-3xl font-poppins capitalize">Your cart is currently <span className="text-red-600">empty</span></h3>

            <Link 
              to='/shop' 
              className="py-2 px-4 md:py-4 md:px-6 uppercase rounded-[30px] bg-gray transition hover:scale-105 text-white text-sm md:text-base hover:text-black hover:bg-white hover:border-gray hover:border-2">
              Return to Shop
            </Link>
          </div>
          :

          <div className="shadow-lg shadow-gray backdrop-blur-2xl">
            <ProductCart 
              products={cartProducts} 
              removeFromCart={removeFromCart}
              clearCart={ clearCart }
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
              totalPrice={totalPrice} 
              individualPrice={individualPrice}
            />
          </div>
          
        }
      </div>
    </section>
  )
}

export default Cart
