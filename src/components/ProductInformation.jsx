import { useContext, useState } from "react";
import { FaCartPlus } from 'react-icons/fa';
import { BsGlobe, BsTruck } from 'react-icons/bs';
import ColorSize from "./ColorSize";
import { productContext } from '../context/ProductContext';

const ProductInformation = ({singleProducts, image}) => {
  const { addToCart, cartProducts } = useContext(productContext);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [productQuantity, setProductQuantity] = useState({
    quantity: 0,
    size: ''
  });

    const { 
        category, 
        name, 
        price, 
        excerpt, 
        reference, 
        size, 
        color,
        slug
      } = singleProducts.fields;

    const [selectedSize, setSelectedSize] = useState(-1);

    const product = {
      reference: reference,
      name: name,
      price: price,
      size: size[selectedSize],
      image: image,
      slug: slug
    }

    // get original product quantity from cart
    const selectedProductCart = cartProducts.filter(prod => prod.reference === reference);

    // function to reset selected features of a product
    const resetSelected = () => {
      setSelectedSize(-1);
    }

    // function to add item to cart when button is clicked
    const handleAddToCart = () => {
      addToCart(product);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      // getting current added product's quantity
      const currentProduct = selectedProductCart?.filter(prod => prod.size === size[selectedSize]);
      if(currentProduct.length === 0){
        setProductQuantity({
          quantity: 1,
          size: size[selectedSize]
        })
      }else{
        setProductQuantity({
          quantity: currentProduct[0].quantity,
          size: size[selectedSize]
        })
      }
    }

  return (
    <section className="px-10 lg:px-5 pt-10 pb-16">
        <div className="text-white col-span-1 bg-gray py-10 flex flex-col gap-y-5 px-5">
          <h2 className="font-bold font-georgia text-2xl md:text-3xl">{ name }</h2>

          <div className="flex flex-col gap-y-6">
            {/* Category */}
            <div className="flex flex-col gap-y-2">
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
              items={size}
              selectedItem={selectedSize}
              setSelectedItem={setSelectedSize}
              extraClass={'rounded px-3 py-2'}
              quantity={productQuantity.quantity}
              currentSize={productQuantity.size}
            />

            {/*Added to cart success message*/}
            <div className={`${showSuccessMessage ? 'block animate-slideY' : 'hidden'} bg-green/40 p-3 text-sm text-center`}>
                <p>
                  Item with size: {productQuantity.size} successfully added {productQuantity.quantity} time(s)
                </p>
            </div>

            {/* Color */}
            <ColorSize 
              name={'Color'}
              items={color}
            />

            {/* Price */}
            <div className="space-y-2">
              <h4 className="font-medium text-[18px] md:text-xl">Price</h4>
              <p>${price}</p>
            </div>

            {/* Add to Cart */}
            <button 
              className={`sm:w-[200px] lg:w-full uppercase text-black py-3 rounded  flex items-center gap-x-3 justify-center text-center ${!product.size ? 'bg-white/90 cursor-not-allowed' : 'hover:text-white hover:bg-transparent hover:border-2 hover:border-white bg-white'}`}
              onClick={handleAddToCart}
              disabled={!product.size}
            >
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
                <div className="flex items-center gap-x-3">
                    <span>NB: Preferred color will be asked later</span>
                </div>
            </div>

          </div>

            { selectedSize > -1 && 
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