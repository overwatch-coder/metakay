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

            {images.length > 1 ?
              images.map(({fields: {file: { url }}}, index) => (
                <img 
                  src={'https:' + url} 
                  alt={name} 
                  key={index} 
                  className={`w-full object-cover pt-5 ${extraClass}`} 
                />
              )) : 
              <img 
                src={'https:' + images.fields.file.url} 
                alt={name}
                className={`w-full object-cover pt-5 ${extraClass}`}  
              />
            }
        </Carousel>
    </div>
  )
}

export default ProductCarousel