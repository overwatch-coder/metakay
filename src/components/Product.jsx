import { FaCartPlus, FaEye } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Product = ({productImage, slug, productName, price, category}) => {
  const location = useLocation();

  return (
    <div className={`flex flex-col col-span-1`}>
        <Link to={`/shop/${slug}`}>
          <img 
            src={'https:' + productImage } 
            alt={productName} 
            className={`${location.pathname === '/shop' ? 'w-full' : 'w-[350px]'} md:w-[300px] object-cover h-[60vh] md:h-[50vh]`} 
          />
        </Link>

        <div className='bg-gray py-4 text-white flex justify-around'>
            <Link to={`/shop/${slug}`} className='hover:scale-110'>
              <FaCartPlus className='cursor-pointer text-base lg:text-xl hover:scale-110' />
            </Link>

            <Link to={`/shop/${slug}`} className='hover:scale-110'>
                <FaEye className='text-base lg:text-xl' />
            </Link>
        </div>

        <div className='flex space-x-2 text-gray font-light items-center'>
          {category && category.map((cat, index) => (
              <p key={index} className="after:content-['|'] after:last:content-[''] after:px-[2px] sm:after:px-2 text-sm lg:text-base">{cat}</p>
          ) )}
        </div>

        <div className='py-2 flex justify-between items-center font-medium'>
            <p className='lg:text-base'>{productName}</p>

            <p className='lg:text-base'>${price}</p>
        </div>
    </div> 
  )
}

export default Product