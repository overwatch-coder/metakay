import Carousel from 'react-elastic-carousel';
import ProductCarousel from './ProductCarousel';

const SingleCollection = ({photo, description, breakPoints, name, images}) => {
  return (
    <div className='relative group'>
        <img src={photo} alt={description} className='w-screen object-cover' />

        <div className='md:opacity-0 transition duration-1000 group-hover:opacity-100 py-16 md:py-24 px-3 md:px-10 text-left absolute top-0 right-0 bg-gray w-[300px] text-white mix-blend-luminosity md:w-1/2 rounded-md shadow-xl drop-shadow-2xl'>
            <h4 className='font-medium text-xl md:text-3xl flex flex-col space-y-3'>
                {description}
            </h4>
        </div>

        {/* Product Carousel or Slider */}
        <ProductCarousel 
            breakPoints={breakPoints} 
            name={name} 
            images={images} 
            extraClass={'h-[100vh] md:h-[150vh]'}
        />
    </div>
  )
}

export default SingleCollection