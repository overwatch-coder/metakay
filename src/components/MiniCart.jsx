import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import ProductCart from './ProductCart';

const MiniCart = ({setOpenCart, openCart, emptyCartImg}) => {
    const { 
        totalUniqueItems, 
        items, 
        isEmpty, 
        removeItem, 
        updateItemQuantity, 
        cartTotal, 
        emptyCart 
    } = useCart();

  return (
    <div onClick={(event) => {setOpenCart(false); event.stopPropagation() }}
        className={`${openCart ? 'translate-x-[4%] md:translate-x-[0] absolute transition duration-700 h-screen bg-gray/50 inset-0' : 'translate-x-[99.99%] transition duration-700'}`}>

        <div onClick={(event) => {setOpenCart(true); event.stopPropagation()}}
            className='absolute right-3 bg-white w-full md:w-1/2 h-full scrollbar-hide overflow-y-scroll'
        >
            {/* Header section */}
            <div className='flex justify-between items-center pt-5 pb-3 border-b-2 border-gray/40 mx-5'>
                <h3 className='flex items-center gap-x-4'>
                    <span className='border-r-2 border-gray pr-3 text-gray font-semibold text-xl md:text-2xl'>
                        My Cart
                    </span>
                    <span className='font-medium text-gray text-lg md:text-xl'>
                        <b className='text-xl md:text-3xl'>{items ? totalUniqueItems : 0 }</b> Items
                    </span>
                </h3>

                <button onClick={(event) => {setOpenCart(!openCart); event.stopPropagation()}}>
                    <RxCross2 size={30} className="float-right z-50" />
                </button>
            </div>

            <>
                {isEmpty ?
                <div className="flex flex-col items-center gap-y-7 text-center mx-auto">
                    <img src={emptyCartImg} alt="Empty Cart" className="object-contain" />

                    <h3 className="text-xl md:text-3xl font-poppins capitalize">
                        Your cart is currently <span className="text-red-600">empty</span>
                    </h3>

                    <Link 
                        to='/shop' 
                        className="py-2 px-4 md:py-4 md:px-6 uppercase rounded-[30px] bg-gray transition hover:scale-105 text-white text-sm md:text-base hover:text-black hover:bg-white hover:border-gray hover:border-2"
                    >
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
                        isMiniCart={true}
                    />
                </div>
                }
            </>
        </div>
    </div>
  )
}

export default MiniCart