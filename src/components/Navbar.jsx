import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTshirt } from 'react-icons/fa';
import { GiPoloShirt } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import { homeCollection } from "../utils";

const Navbar = ({setNavbarActive}) => {
    const [dropDownActive, setDropDownActive] = useState(false);

  return (
    <>
        <section className='relative cursor-pointer hover:text-gray' onClick={() => setDropDownActive(!dropDownActive)}>

            <div className='flex justify-between md:justify-start items-center gap-2'>
                <span>Collection</span>
                {!dropDownActive ? <FaChevronDown  /> : <FaChevronUp />}
            </div>

            {/* Dropdown */}
            <div className={dropDownActive ? 'md:absolute top-12 bg-white p-4 w-full md:w-40 mx-auto flex-col space-y-3 items-center uppercase': 'hidden'}>

            {homeCollection.map((col, index) => (
                <li 
                    key={index} 
                    onClick={() => setNavbarActive(false)}
                >
                    <NavLink to={`collection/${col.toLowerCase()}`} className='flex items-center gap-x-3 hover:text-blue'>
                        <GiPoloShirt color="green" />
                        <span className="capitalize">{col}</span>
                    </NavLink>
                </li>
            ))}
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
