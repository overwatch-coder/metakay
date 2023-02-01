import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import { products } from '../utils';
import ProductInformation from "../components/ProductInformation";

const ShopDetails = () => {
    const { slug } = useParams();
    const singleProducts = products.filter(product => product.slug === slug)[0];
    singleProducts.excerpt = "Classic, tailored blazer with a modern twis";
    singleProducts.reference = crypto.randomUUID().slice(0,12);
    singleProducts.sizes = ['S', 'M', 'L', 'XL'];
    singleProducts.colors = ['yellow', 'brown', 'white', 'blue'];

    const {
        photo, 
        images, 
        name, 
      } = singleProducts;

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
    ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 pt-10">
      {/* Product Images */}
      <section className="relative w-screen lg:w-[950px] px-5 lg:px-16 flex flex-col gap-y-3 col-span-1 lg:col-span-2">
        <img src={photo} alt={name} className='w-full object-cover px-5 lg:px-16' />
        <ProductCarousel 
          breakPoints={breakPoints} 
          name={name} 
          images={images}
          extraClass={'h-[100vh]'} 
        />
      </section>

      {/* Product Information */}
      <ProductInformation 
        singleProducts={singleProducts}
      />
    </div>
  )
}

export default ShopDetails