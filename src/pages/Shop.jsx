import { useState } from "react";
import Product from "../components/Product";
import { products } from "../utils";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const Shop = () => {
  const total = products.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const productPerPage = 12;
  const lastPageIndex = currentIndex * productPerPage;
  const firstPageIndex = lastPageIndex - productPerPage;

  const productsToDisplay = products.slice(firstPageIndex, lastPageIndex);

  let pages = [];
  for(let i = 1; i <= Math.ceil(total / productPerPage ); i++){
    pages.push(i);
  }

  const nextPage = () => {
    currentIndex === pages.length ? setCurrentIndex(1) : setCurrentIndex(prev => prev + 1);
  }

  const prevPage = () => {
    currentIndex === 1 ? setCurrentIndex(pages.length) : setCurrentIndex(prev => prev - 1);
  }

  return (
    <div>
      <section className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {productsToDisplay.map(({photo, name, slug, price, category}, index) => (
          <Product 
            productImage={photo}
            productName={name}
            slug={slug}
            price={price}
            key={index}
            category={category}
          />
        ))}
      </section>

      {/* Pagination */}
      <div className="my-10 flex justify-center items-center text-center space-x-5">
          <button 
            onClick={prevPage} 
            className={`${currentIndex === 1 ? 'opacity-60' : 'opacity-100 hover:opacity-80' } bg-gray p-4 text-white rounded`} 
            disabled={currentIndex === 1}
          >
            <HiChevronDoubleLeft className={`text-2xl text-white`} />
          </button>

          {pages.map(page => (
            <button 
              key={page} 
              className={`${currentIndex === page ? 'opacity-100' : 'opacity-60 hover:opacity-80'} bg-gray text-white p-4 rounded`}
              onClick={() => setCurrentIndex(page)}
            >
              {page}
            </button>
          ))}

          <button 
            onClick={nextPage} 
            className={`${currentIndex === pages.length ? 'opacity-60' : 'opacity-100 hover:opacity-80' } bg-gray p-4 text-white rounded`} 
            disabled={currentIndex === pages.length}
          >
            <HiChevronDoubleRight className={`text-2xl text-white`} />
          </button>
      </div>
    </div>
  )
}

export default Shop
