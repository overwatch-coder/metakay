import { useContext } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { productContext } from '../context/ProductContext';

const Success = () => {
    const { products } = useContext(productContext);

    if(products === null) {
        return Navigate({to: '/', replace: true})
    }

  return (
    <section className='px-7 flex flex-col items-center gap-y-6 my-20 text-center'>
        <BsFillCheckCircleFill size={65} color='green' /> 
        <h2 className='font-georgia text-2xl md:text-4xl font-semibold'>
            Thank you for your order!
        </h2>

        <h3 className='text-lg flex flex-col'>
            <span>Your order number is: </span>
            <span className='text-blue font-medium uppercase mx-1'>
                {products?.orderNumber}
            </span>
        </h3>

        <p>
            We'll contact you shortly on {products?.email} / {products?.phone} concerning your order
        </p>

        <Link to='/shop' className='mt-5 uppercase bg-gray px-4 py-3 text-white text-sm hover:bg-gray/80'>
            Continue Shopping
        </Link>
    </section>
  )
}

export default Success