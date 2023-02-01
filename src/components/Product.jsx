import { FaCartPlus, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({productImage, slug, productName, price, category}) => {
  return (
    <div className='flex flex-col col-span-1'>
        <Link to={`/shop/${slug}`}>
          <img src={productImage} alt={productName} className='w-full object-cover h-[50vh]' />
        </Link>

        <div className='bg-gray py-4 text-white flex justify-around'>
            <FaCartPlus className='cursor-pointer text-sm md:text-base lg:text-xl hover:scale-110' />

            <Link to={`/shop/${slug}`} className='hover:scale-110'>
                <FaEye className='text-sm md:text-base lg:text-xl' />
            </Link>
        </div>

        <div className='flex space-x-2 text-xs text-gray font-light items-center'>
          {category && category.map((cat, index) => (
              <p key={index} className="after:content-['|'] after:last:content-[''] after:px-[2px] sm:after:px-2 text-sm lg:text-base">{cat}</p>
          ) )}
        </div>

        <div className='py-2 flex justify-between items-center font-medium'>
            <p className='text-xs sm:text-sm lg:text-base'>{productName}</p>

            <p className='text-xs sm:text-sm lg:text-base'>${price}.00</p>
        </div>
    </div> 
  )
}

export default Product