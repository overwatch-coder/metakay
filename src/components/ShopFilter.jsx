import { Link } from "react-router-dom";
import { useState } from 'react';
import { IoIosFunnel } from 'react-icons/io';
import { VscChevronDown, VscChevronUp, VscStarEmpty, VscStarFull } from 'react-icons/vsc';
import { homeCollection, shopCategory } from "../utils";


const ShopFilter = ({categoryClicked}) => {
    const [showCategory, setShowCategory] = useState(false);
    const [showCollection, setShowCollection] = useState(false);
 
    const handleCategoryClicked = (cat) => {
        categoryClicked(cat);
        setShowCategory(false);
    }

  return (
    <section className='px-7 relative'>
        {/* Category Section Mobile */}
        <div className='flex items-center justify-between'>
            <div 
            className='md:hidden flex items-center space-x-2 bg-gray px-3 py-2 text-white uppercase hover:opacity-95 hover:scale-105 cursor-pointer rounded'
            onClick={() => setShowCategory(!showCategory)}
            >
                <IoIosFunnel className='md:text-xl md:hidden' />
                <span>Filter</span>
            </div>

            <div className='flex items-center space-x-1 md:text-xl'>
                <Link to='/' className='border-b-[1px] hover:border-b-2'>Home</Link>
                <p>/</p>
                <h2 className='font-medium'>Shop</h2>
            </div>
        </div>

        {/* Dropdown for category filter */}
        <div className={`${showCategory ? 'flex' : 'hidden'} md:block z-30 flex-col gap-y-5 bg-gray w-full md:w-[180px] xl:w-[200px] py-3 px-4 xl:px-6 my-4 rounded shadow-md text-white ${showCollection ? 'h-[100vh]': 'h-[90vh]'} md:h-[140vh]`}>

            <h3 className='uppercase font-medium text-white py-5'>
                <span className='border-b-2 tracking-widest'>Category</span>
            </h3>

            {/* Different categories */}
            <div className='flex flex-col gap-y-5 pb-5'>
                {shopCategory.map((cat, index) => (
                    <article 
                        key={index} 
                        className='flex items-center space-x-2 cursor-pointer'
                        onClick={() => handleCategoryClicked(cat)}
                    >
                        <VscStarEmpty className='text-xl' />
                        <span className='text-base md:text-xl capitalize'>{cat}</span>
                    </article>
                ))}

                {/* Collection with dropdwn */}
                <article className='relative'>
                    <div
                        onClick={() => setShowCollection(!showCollection)}
                        className='flex items-center space-x-2 cursor-pointer'
                    >
                        <VscStarEmpty className='text-xl' />
                        <span className='text-base md:text-xl'>Collection</span>
                        {!showCollection ? <VscChevronDown className='text-2xl font-bold' /> : <VscChevronUp className='text-2xl font-bold' />}
                    </div>

                    {/* Sub dropdown for collection */}
                    <div className={`${showCollection ? 'flex flex-col px-5 gap-y-4 bg-gray w-full p-5 md:text-xl' : 'hidden'}`}>
                    {homeCollection.map((col, index) => (
                        <h5 
                            key={index} 
                            className='flex items-center space-x-3 cursor-pointer'
                            onClick={() => handleCategoryClicked(col)}
                        >
                            <VscStarFull />
                            <span>{ col }</span>
                        </h5>
                    ))}
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default ShopFilter