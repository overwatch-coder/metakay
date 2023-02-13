import { Link } from 'react-router-dom';
import Logo from '../assets/logo-white.jpg';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { GrMenu, GrClose } from 'react-icons/gr';
import {  useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import { productContext } from '../context/ProductContext';
import { RxCross2 } from 'react-icons/rx';
import ProductCart from '../components/ProductCart';
import emptyCart from '../assets/cart_empty.png';

const Header = () => {
    const { 
        cartProducts,
        clearCart, 
        removeFromCart,
        addQuantity,
        removeQuantity,
        totalPrice,
        individualPrice, 
        openCart,
        setOpenCart
    } = useContext(productContext);

    const [navbarActive, setNavbarActive] = useState(false);

  return (
    <header className="bg-white w-screen fixed drop-shadow-md z-50 border-gray border-b-[1px] md:border-0">
        <section className='flex justify-between items-center mx-auto px-5'>
            {/* Logo */}
            <Link to='/' onClick={() => setNavbarActive(false)}>
                <img src={Logo} alt="metakay logo" className='w-16 md:w-24 h-16 md:h-24'  />
            </Link>

            {/* Nav links desktop */}
            <nav className='hidden md:flex justify-center items-center space-x-6 uppercase font-medium pr-5'>

                <Navbar setNavbarActive = { setNavbarActive } />

                {/* Cart desktop*/}
                <button onClick={() => setOpenCart(prev => !prev)} className='relative hover:text-gray'>
                    <MdOutlineShoppingBag className='text-3xl' />
                    <span className='absolute top-3 left-4 rounded-full bg-black text-white text-center px-1 mx-auto'>
                        {cartProducts ? cartProducts.length : 0 }
                    </span>
                </button>
            </nav>

            {/* Nav bar mobile*/}
            <div className='md:hidden pr-5 flex space-x-4 items-center relative'>

                {/* Cart Mobile*/}
                <button onClick={() => setOpenCart(prev => !prev)} className='relative hover:text-gray'>
                    <MdOutlineShoppingBag className='text-3xl' />
                    <span className='absolute top-3 left-4 rounded-full bg-black text-white text-center px-1 mx-auto'>
                        {cartProducts ? cartProducts.length : 0}
                    </span>
                </button>

                {!navbarActive ? 
                    <GrMenu 
                        className='text-2xl cursor-pointer' 
                        onClick={() => setNavbarActive(!navbarActive)} 
                    /> : 
                    <GrClose 
                        className='text-2xl cursor-pointer' 
                        onClick={() => setNavbarActive(!navbarActive)} 
                    /> 
                }
            </div>
        </section>

        {/* Nav links mobile*/}
        <nav 
            className={
                `md:hidden flex flex-col gap-y-5 space-y-2 py-6 absolute top-[65px] 
                ${navbarActive ? 'translate-x-0 transition duration-1000' : 
                'translate-x-[99.99%] transition duration-1000'} bg-white w-screen px-10 drop-shadow-md z-20`
            }>
            
            {/* Nav link component*/}
            <Navbar setNavbarActive={setNavbarActive} />

            {/* Social media*/}
            <div className='mx-auto'>
                <Social />
            </div>
        </nav>

        {/* Mini Cart Section */}
        <div onClick={(event) => {setOpenCart(false); event.stopPropagation() }}
            className={`${openCart ? 'translate-x-[0] absolute transition duration-700 h-screen bg-gray/50 inset-0' : 'translate-x-[99.99%] transition duration-700'}`}>

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
                            <b className='text-xl md:text-3xl'>{cartProducts ? cartProducts.length : 0}</b> Items
                        </span>
                    </h3>

                    <button onClick={(event) => {setOpenCart(!openCart); event.stopPropagation()}}>
                        <RxCross2 size={30} className="float-right z-50" />
                    </button>
                </div>

                <>
                    {cartProducts.length === 0 ?
                    <div className="flex flex-col items-center gap-y-7 text-center mx-auto">
                        <img src={emptyCart} alt="Empty Cart" className="object-contain" />

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
                            products={cartProducts} 
                            removeFromCart={removeFromCart}
                            clearCart={ clearCart }
                            addQuantity={addQuantity}
                            removeQuantity={removeQuantity}
                            totalPrice={totalPrice} 
                            individualPrice={individualPrice}
                            isMiniCart={true}
                        />
                    </div>
                    }
                </>
            </div>
        </div>
    </header>
  )
}

export default Header