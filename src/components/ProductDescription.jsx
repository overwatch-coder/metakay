import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProductDescription = ({title, description}) => {
    const [showDropdown, setShowDropdown] = useState(true);

  return (
    <section className="bg-gray mx-5 lg:mx-16 px-5 md:px-10 mb-10">
        <h3 
            className={`flex justify-between items-center text-white text-xl font-medium cursor-pointer py-4 ${showDropdown ? 'py-10' : 'py-5'}`}
            onClick={() => setShowDropdown(prev => !prev)}
        >
          <span>{title}</span>
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </h3>

        {/* Description drop down */}
        <div 
            className={`text-white leading-9 lg:leading-10 tracking-wider text-sm lg:text-base flex flex-col gap-y-4 ${showDropdown ? 'block pt-5 pb-10' : 'hidden'}`}>
          {description}
        </div>
    </section>
  )
}

export default ProductDescription