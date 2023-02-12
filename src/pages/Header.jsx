import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo-white.jpg';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { GrMenu, GrClose } from 'react-icons/gr';
import {  useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import { productContext } from '../context/ProductContext';

const Header = () => {
    const { cartProducts } = useContext(productContext);
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

                <Navbar setNavbarActive={setNavbarActive} />

                {/* Cart desktop*/}
                <NavLink to='/cart' className='relative hover:text-gray'>
                    <MdOutlineShoppingBag className='text-3xl' />
                    <span className='absolute top-3 left-4 rounded-full bg-black text-white text-center px-1 mx-auto'>
                        {cartProducts ? cartProducts.length : 0}
                    </span>
                </NavLink>
            </nav>

            {/* Nav bar mobile*/}
            <div className='md:hidden pr-5 flex space-x-4 items-center relative'>

                {/* Cart Mobile*/}
                <NavLink to='/cart' className='relative hover:text-gray'>
                    <MdOutlineShoppingBag className='text-3xl' />
                    <span className='absolute top-3 left-4 rounded-full bg-black text-white text-center px-1 mx-auto'>
                        {cartProducts ? cartProducts.length : 0}
                    </span>
                </NavLink>

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
    </header>
  )
}

export default Header