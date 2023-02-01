import { useState } from "react";
import { FaCartPlus } from 'react-icons/fa';
import { BsGlobe, BsTruck } from 'react-icons/bs';
import ColorSize from "./ColorSize";

const ProductInformation = ({singleProducts}) => {

    const { 
        category, 
        name, 
        price, 
        excerpt, 
        reference, 
        sizes, 
        colors
      } = singleProducts;

    const [selectedSize, setSelectedSize] = useState(-1);
    const [selectedColor, setSelectedColor] = useState(-1);

    // function to reset selected features of a product
    const resetSelected = () => {
      setSelectedSize(-1);
      setSelectedColor(-1);
    }

  return (
    <section className="px-5 md:px-16 pt-10 pb-16">
        <div className="text-white col-span-1 bg-gray py-10 flex flex-col gap-y-5 px-5">
          <h2 className="font-bold font-georgia text-2xl md:text-3xl">{name}</h2>

          <div className="flex flex-col gap-y-6">
            {/* Category */}
            <div>
              <h4 className="font-medium text-[18px] md:text-xl">Category</h4>

              <p className="flex items-center gap-x-4">
                {category.map((cat, index) => (
                  <span key={index} className="font-light after:content-['|'] after:last:content-[''] after:px-2">{cat}</span>
                ))}
              </p>
            </div>

            <div className="border-white border-b-2 w-full my-5"></div>

            <p className="text-sm md:text-base">{excerpt}</p>

            {/* Reference */}
            <div className="space-y-2">
                <h4 className="font-medium text-[18px] md:text-xl">Reference</h4>
                <p>{reference}</p>
            </div>

            {/* Size */}
            <ColorSize 
              name={'Size'}
              items={sizes}
              selectedItem={selectedSize}
              setSelectedItem={setSelectedSize}
              extraClass={'rounded px-3 py-2 bg-white'}
            />


            {/* Color */}
            <ColorSize 
              name={'Color'}
              items={colors}
              selectedItem={selectedColor}
              setSelectedItem={setSelectedColor}
              extraClass={`rounded-full p-5`}
            />

             {/* Price */}
            <div className="space-y-2">
              <h4 className="font-medium text-[18px] md:text-xl">Price</h4>
              <p>${price}.00</p>
            </div>

            {/* Add to Cart */}
            <button 
              className="sm:w-[200px] lg:w-full uppercase bg-white text-black py-3 rounded hover:text-white hover:bg-transparent hover:border-2 hover:border-white flex items-center gap-x-3 justify-center text-center">
              <span>Add to Cart</span>
              <FaCartPlus size={20} />
            </button>

            {/* Additional Info */}
            <div className="flex flex-col gap-y-4 py-5">
                <div className="flex items-center gap-x-3">
                    <BsGlobe />
                    <span>Worldwide Shipping Available</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <BsTruck />
                    <span>14 Day Return Policy</span>
                </div>
            </div>

          </div>

            {(selectedSize > -1 || selectedColor > -1) && 
            <button 
                className="uppercase sm:w-[200px] lg:w-full mt-4 p-2 rounded bg-white text-black hover:opacity-90 hover:scale-105"
                onClick={resetSelected}
            >
                Reset
            </button>}
        </div>
    </section>
  )
}

export default ProductInformation