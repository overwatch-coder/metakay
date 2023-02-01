import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCollection from '../components/SingleCollection';
import { collection } from '../utils';

const Collection = () => {
    const { id } = useParams();

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const isFirstIndex = currentIndex === 0;
    !isFirstIndex ? setCurrentIndex(prev => prev - 1) : setCurrentIndex(collection.length - 1);
  }

  const next = () => {
    const isLastIndex = currentIndex === collection.length - 1;
    !isLastIndex ? setCurrentIndex(prev => prev + 1) : setCurrentIndex(0);
  }

  let singleCollection = collection.filter(col => col.name.toLowerCase() === id);

  return (
    <div className='pb-2'>

      {/* Hero Section */}
      <section className='relative bg-gray'>
        <img src={singleCollection[0].heroImage} alt="collection hero image" className='w-full object-cover mix-blend-multiply md:h-[85vh]' />

        <div className='absolute uppercase font-bold text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-white flex flex-col space-y-4 sm:space-y-6'>
            <span className='text-xl sm:text-2xl md:text-3xl'>Metakay's</span>
            <span className='text-5xl sm:text-7xl md:text-8xl font-georgia'>{id}</span>
          </h2>
        </div>
      </section>

      {/* Each Category */}
      <section 
        className='py-16 flex flex-col space-y-10'
      >
        {singleCollection.map(({photo, images, name, description}, index) => (
          <SingleCollection
            photo={photo}
            description={description}
            name={name}
            images={images} 
            breakPoints={breakPoints}
            key={index}
          />
        ))}
      </section>

      {/* Pagination goes here */}
      <div className='pb-20 text-center flex justify-center items-center space-x-5'>
          <button 
            className={`${currentIndex === 0 ? 'opacity-60' : 'hover:scale-110 hover:opacity-80'} text-base bg-gray text-white px-2 py-1 sm:px-4 sm:py-2 rounded`}
            onClick={prev}
            disabled={currentIndex === 0 }
          >
            Prev
          </button>

          {collection.map((col, index) => (
            <button 
              key={index} 
              className={`bg-gray text-white text-base px-3 py-2 sm:text-lg sm:py-3 sm:px-4 rounded hover:scale-110 ${index == currentIndex ? 'opacity-100' : 'opacity-60' }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </button>
          ))}

          <button 
            className={`${currentIndex === collection.length - 1 ? 'opacity-60' : 'hover:scale-110 hover:opacity-80'} text-base bg-gray text-white px-2 py-1 sm:px-4 sm:py-2 rounded`}
            disabled={currentIndex === collection.length - 1}
            onClick={next}
          >
            Next
          </button>
      </div>
    </div>
  )
}

export default Collection
