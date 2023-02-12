import { FiPlus, FiMinus } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCart = ({
        products, 
        removeFromCart, 
        clearCart,
        addQuantity,
        removeQuantity,
        totalPrice,
        individualPrice
    }) => {

    const handleCheckout = () => {
        console.log(products);
        // const number = 212698551516;
        // const message = {...products, number: +233241579315, total: totalPrice};
		// const url = `https://api.whatsapp.com/send/?phone=${number}&text=${JSON.stringify(message)}&type=phone_number&app_absent=0`;
		// window.open(url, "_blank");
    }

    let deliveryFee = parseFloat(10.50);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 py-10 px-5">
        <div className="col-span-1 lg:col-span-2 md:px-5 pb-5 flex flex-col gap-y-5">
            <h2 className="flex justify-between items-center">
                <span className="font-bold text-gray md:text-xl uppercase">Shopping Cart</span>
                <span className="text-sm">{products.length} items</span>
            </h2>

            <div className="flex flex-col gap-y-10 pt-5">
                {products.map((prod, index) => (
                    <div key={index} className="grid grid-cols-2 gap-y-3 md:grid-cols-5 gap-x-5 md:place-items-center border-b-2 last:border-b-0 border-gray/25 pb-5">

                        <img 
                            src={`https:${prod.image}`} 
                            alt={prod.name} 
                            className="w-20 h-24 object-cover" 
                        />

                        <Link to={`/shop/${prod.slug}`} className='flex flex-col gap-y-2'>
                            <span className='font-bold'>{prod.name}</span>
                            <span className='text-gray text-sm font-medium'>Size: {prod.size}</span>
                        </Link>

                        <h4 className='flex items-center gap-x-3 pt-4 md:pt-0'>
                            <button onClick={() => removeQuantity(prod.reference, prod.size)}>
                                <FiMinus size={20} />
                            </button>
                            <span className='font-extrabold text-lg'>{prod.quantity}</span>
                            <button onClick={() => addQuantity(prod.reference, prod.size)}>
                                <FiPlus size={20} />
                            </button>
                        </h4>

                        <h4 className='font-medium pt-4 md:pt-0'>
                            $ {individualPrice(prod.quantity, prod.price)}
                        </h4>

                        <button 
                            onClick={() => removeFromCart(prod.reference, prod.size)}
                            className="col-span-2 md:col-span-1"
                        >
                            <MdDeleteForever 
                                size={30} 
                                className="text-red-400 hover:text-red-600 float-right" 
                            />
                        </button>
                    </div>
                ))}
            </div>

            <div className='flex items-center gap-x-5 py-10 flex-row-reverse justify-between'>
                <button 
                    className='uppercase bg-red-500 hover:bg-red-700 px-4 py-3 text-white text-sm font-medium'
                    onClick={clearCart}
                >
                    Clear Cart
                </button>

                <Link 
                    to='/shop' 
                    className='uppercase bg-gray px-4 py-3 text-white text-sm hover:bg-gray/80'
                >
                    Back to shop
                </Link>
            </div>
        </div>

        
        <div className="col-span-1 bg-gray text-white px-5 flex flex-col gap-y-5">
            <h2 className='text-lg md:text-xl lg:text-2xl uppercase py-5 border-b-2 border-white/30 pb-5'>Order Summary</h2>

            <div className='flex flex-col gap-y-7 py-5 mb-auto'>
                <h3 className='flex justify-between items-center'>
                    <span className='font-medium'>Subtotal</span>
                    <span>${ totalPrice }</span>
                </h3>

                <h3 className='flex justify-between items-center text-lg'>
                    <span className='font-medium'>Delivery</span>
                    <span>{deliveryFee !== 'Free' ? `$ ${deliveryFee}` : 'Free'}</span>
                </h3>

                <h4 className='flex justify-between items-center text-base md:text-lg py-10 border-t-2 border-white/30'>
                    <span className='font-bold uppercase'>Total</span>
                    <span>$ { deliveryFee !== 'Free' ? `${deliveryFee + totalPrice }` : totalPrice }</span>
                </h4>
            </div>

            <button 
                className='my-10 p-3 w-full sm:w-[200px] lg:w-full md:p-3 lg:p-4 font-medium bg-white text-black uppercase hover:bg-transparent hover:text-white hover:border-2 hover:border-white'
                onClick={handleCheckout}
            >
                Checkout
            </button>
        </div>
    </section>
  )
}

export default ProductCart