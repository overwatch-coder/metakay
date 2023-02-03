import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTshirt } from 'react-icons/fa';
import { GiPoloShirt } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import {  useContext } from 'react';
import { productContext } from '../context/ProductContext';

const Navbar = () => {
    const [dropDownActive, setDropDownActive] = useState(false);
    const { setNavbarActive } = useContext(productContext);

  return (
    <>
        <section className='relative cursor-pointer hover:text-gray' onClick={() => setDropDownActive(!dropDownActive)}>

            <div className='flex justify-between md:justify-start items-center gap-2'>
                <span>Collection</span>
                {!dropDownActive ? <FaChevronDown  /> : <FaChevronUp />}
            </div>

            {/* Dropdown */}
            <div className={dropDownActive ? 'md:absolute top-12 bg-white p-4 w-full md:w-40 mx-auto flex-col space-y-3 items-center uppercase': 'hidden'}>

                <li onClick={() => setNavbarActive(false)}>
                    <NavLink to='collection/eunoia' className='flex items-center gap-x-3 hover:text-gray'>
                        <FaTshirt className='text-blue-600' />
                        <span>Eunoia</span>
                    </NavLink>
                </li>
                

                <div className='border-b-[1px] border-b-gray'></div>

                <li onClick={() => setNavbarActive(false)}>
                    <NavLink to='collection/unilever' className='flex items-center gap-x-3 hover:text-gray'>
                        <GiPoloShirt className='text-red-600' />
                        <span>Unilever</span>
                    </NavLink>
                </li>
            </div>
        </section>

        <li onClick={() => setNavbarActive(false)}>
            <NavLink to='/shop' className='hover:text-gray'>Shop</NavLink>
        </li>

        <li onClick={() => setNavbarActive(false)}>
            <NavLink to='/contact' className='hover:text-gray'>Contact</NavLink>
        </li>
    </>
  )
}

export default Navbar
