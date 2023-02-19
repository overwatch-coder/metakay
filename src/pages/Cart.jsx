import { Helmet } from "react-helmet-async"
import { Link, useNavigation } from "react-router-dom";
import emptyCartImg from '../assets/cart_empty.png';
import ProductCart from "../components/ProductCart";
import { useCart } from "react-use-cart";

const Cart = () => {
  // displaying loading screen while data is being fetched
  const navigation = useNavigation();

  // getting different functions from use cart context
  const { items, removeItem, isEmpty, updateItemQuantity, emptyCart, cartTotal } = useCart();

  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }


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
        {isEmpty ?
          <div className="flex flex-col items-center gap-y-7 text-center mx-auto">
            <img src={emptyCartImg} alt="Empty Cart" className="object-contain" />

            <h3 className="text-xl md:text-3xl font-poppins capitalize">Your cart is currently <span className="text-red-600">empty</span></h3>

            <Link 
              to='/shop' 
              className="py-2 px-4 md:py-4 md:px-6 uppercase rounded-[30px] bg-gray transition hover:scale-105 text-white text-sm md:text-base hover:text-black hover:bg-white hover:border-gray hover:border-2">
              Return to Shop
            </Link>
          </div>
          :
          <div className="shadow-lg">
            <ProductCart 
              products={items} 
              removeFromCart={removeItem}
              clearCart={ emptyCart }
              addQuantity={updateItemQuantity}
              removeQuantity={updateItemQuantity}
              totalPrice={cartTotal} 
            />
          </div>
          
        }
      </div>
    </section>
  )
}

export default Cart
