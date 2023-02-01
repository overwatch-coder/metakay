import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel'
import Product from './Product';
import { products } from '../utils';

const HomePageShop = () => {

    // setting various breakpoints for carousel
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 700, itemsToShow: 4 },
    ]

  return (
    <section className='py-20 px-5 md:px-16 flex flex-col space-y-5 mx-auto'>
        <div className='text-center uppercase flex justify-center items-center space-x-3'>
            <div className='border-gray border-2 w-16 sm:w-20'></div>
            <h3 className='font-medium text-[18px] sm:text-2xl lg:text-3xl'>Best Seller</h3>
            <div className='border-gray border-2 w-16 sm:w-20'></div>
        </div>

        {/* Product Carousel or Slider */}
        <div>
            <Carousel 
                breakPoints={breakPoints} 
                pagination={false}
                itemPadding={[10]}
                showEmptySlots={false}
                showArrows={true}
            >

            {/* Mapping through all the available products */}
                {products.slice(0,8).map((product, index) => (
                    <Product 
                        productImage = {product.photo}
                        slug={product.slug} 
                        productName={product.name}
                        price={product.price}
                        key={index}
                    />
                )) }
            </Carousel>
        </div>
        

        <Link to='/shop' 
            className='mx-auto text-center p-3 rounded-full bg-gray hover:scale-105 hover:opacity-80 text-white uppercase font-medium text-xs lg:text-base'
        >
            View all products
        </Link>
    </section>
  )
}

export default HomePageShop