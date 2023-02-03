import Carousel from 'react-elastic-carousel';

const ProductCarousel = ({breakPoints, images, name, extraClass}) => {
  return (
    <div>
        {/* Product Carousel or Slider */}
        <Carousel 
            breakPoints={breakPoints} 
            pagination={false}
            itemPadding={[20]}
            showEmptySlots={false}
            showArrows={true}
        >

            {/* Mapping through all the available products */}
            {images.map((image, index) => (
              <img 
                src={image} 
                alt={name} 
                key={index} 
                className={`w-full object-cover pt-5 ${extraClass}`} 
              />
            ))}
        </Carousel>
    </div>
  )
}

export default ProductCarousel