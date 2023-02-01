import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Product from './Product';

const Carousel = ({
    products, 
    selectedProducts,
    firstPageIndex, 
    lastPageIndex,
    setLastPageIndex,
    setFirstPageIndex,
    gridClass
}) => {

    const nextPage = () => {
        const isLastIndex = lastPageIndex === products.length;

        if(isLastIndex){
            setFirstPageIndex(firstPageIndex);
            setLastPageIndex(lastPageIndex);
        } else{
            setFirstPageIndex(prev => prev + 1);
            setLastPageIndex(prev => prev + 1);
        }   
    }

    const prevPage = () => {
        const isFirstIndex = firstPageIndex === 0;

        if(isFirstIndex){
            setFirstPageIndex(firstPageIndex);
            setLastPageIndex(lastPageIndex);
        }else{
            setFirstPageIndex(prev => prev - 1);
            setLastPageIndex(prev => prev - 1);
        }
    }

  return (
    <div className='relative'>
        <button disabled={firstPageIndex === 0} className={`absolute top-1/2 -translate-y-1/2 left-1 cursor-pointer bg-white rounded-full p-1 md:p-2 text-black ${firstPageIndex === 0 ? 'opacity-30' : 'hover:opacity-80'}`} onClick={prevPage}>
            <FaChevronLeft className='text-xl sm:text-2xl md:text-3xl' />
        </button>

        <div className={`py-10 grid ${gridClass} gap-10`}>
            {selectedProducts.map((product, index) => (
                <Product 
                    productImage = {product.photo}
                    slug={product.slug} 
                    productName={product.name}
                    price={product.price}
                    key={index}
                />
            )) }
        </div>

        <button disabled={lastPageIndex === products.length } className={`absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer bg-white rounded-full p-1 md:p-2 text-black ${lastPageIndex === products.length  ? 'opacity-30' : 'hover:opacity-80'}`} onClick={nextPage}>
            <FaChevronRight className='text-xl sm:text-2xl md:text-3xl' />
        </button>
    </div>
  )
}

export default Carousel