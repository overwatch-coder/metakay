import { Link, useOutletContext } from 'react-router-dom';
import Carousel from 'react-elastic-carousel'
import Product from './Product';
import { useContext } from 'react';
import { productContext } from '../context/ProductContext';

const HomePageShop = () => {

    // setting various breakpoints for carousel
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 700, itemsToShow: 4 },
    ]

    // const { allProducts } = useContext(productContext);
    const { allProducts } = useOutletContext();

  return (
    <section className='py-20 flex flex-col space-y-5 mx-auto'>
        <div className='text-center uppercase flex justify-center items-center space-x-3'>
            <div className='border-gray border-2 w-16 sm:w-20'></div>
            <h3 className='font-medium text-[18px] sm:text-2xl lg:text-3xl'>Best Seller</h3>
            <div className='border-gray border-2 w-16 sm:w-20'></div>
        </div>

        {/* Product Carousel or Slider */}
        <div className='pb-6'>
            <Carousel 
                breakPoints={breakPoints} 
                pagination={false}
                itemPadding={[10]}
                showEmptySlots={false}
                showArrows={true}
            >

            {/* Mapping through all the available products */}
                {allProducts?.slice(0,10).map(({fields}, index) => (
                    <Product 
                        productImage = {fields.photo?.fields?.file.url}
                        slug={fields.slug} 
                        productName={fields.name}
                        price={fields.price}
                        key={index}
                    />
                )) }
            </Carousel>
        </div>
        
        <Link to='/shop' 
            className='mx-auto text-center py-4 px-5 md:p-5 rounded-full bg-gray hover:scale-105 hover:opacity-80 text-white uppercase font-medium text-xs lg:text-base'
        >
            View all products
        </Link>
    </section>
  )
}

export default HomePageShop