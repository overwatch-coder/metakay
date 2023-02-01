import { Link, useParams } from "react-router-dom";
import { products } from '../utils';
import ProductCarousel from '../components/ProductCarousel';
import ProductInformation from "../components/ProductInformation";
import ProductDescription from "../components/ProductDescription";
import Product from "../components/Product";
import Carousel from "react-elastic-carousel";


const ShopDetails = () => {
    const { slug } = useParams();
    const singleProducts = products.filter(product => product.slug === slug)[0];
    singleProducts.excerpt = "Classic, tailored blazer with a modern twist";
    singleProducts.reference = crypto.randomUUID().slice(0,12);
    singleProducts.sizes = ['S', 'M', 'L', 'XL'];
    singleProducts.colors = [
      {name: 'yellow', color: 'bg-yellow-500'},
      {name: 'amber', color: 'bg-amber-800'},
      {name: 'white', color: 'bg-white'},
      {name: 'emerald', color: 'bg-emerald-800'}
    ];

    const {
        photo, 
        images, 
        name, 
      } = singleProducts;

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 800, itemsToShow: 2 },
    ]

    const similarProductsBreakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 700, itemsToShow: 4 }
    ];

    const similarProducts = products.filter(product => product.slug !== slug);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-5">
        {/* Product Images */}
        <section className="relative w-screen lg:w-[750px] xl:w-[950px] px-5 lg:px-16 flex flex-col gap-y-3 col-span-1 lg:col-span-2">
          <div className="px-5 lg:px-16">
            <Link 
              to='/shop' 
              className="border-b-[1px] hover:border-b-2 hover:border-gray font-medium hover:text-gray"
            >
              Back to shop
            </Link>
          </div>

          <img src={photo} alt={name} className='w-full object-cover px-5 lg:px-16' />
          <ProductCarousel 
            breakPoints={breakPoints} 
            name={name} 
            images={images}
            extraClass={'h-[70vh] md:h-[100vh]'} 
          />
        </section>

        {/* Product Information */}
        <ProductInformation 
          singleProducts={singleProducts}
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col gap-y-3 py-10 md:w-[800px] lg:w-[900px] mx-auto">
        <ProductDescription 
          title={'Description'}
          description={`
            Classic, tailored blazer with a modern twist: The renowned MetaKay brand has brought back a classic style, now enhanced and improved. The Pineapple Top and Skirt features the Eunoia patch, an embroidered felt design that adds a tactile, textured touch. This unique piece is sure to make a statement in any fashion-forward wardrobe.

            PRODUCT FEATURES
            Structured, professional fit
            Unique, oversized lapels
            Made of high-quality wool fabric
            Elevates any work or casual attire`
          }
        />

        <ProductDescription 
          title={'Delivery Info'}
          description={`
            Ordered items will be shipped within 7 business days (Ghana) and 15 business days (International) for any order confirmed before 12:00, Monday to Friday (excluding holidays). Delivery charges are free for orders over $300 in Ghana and 500 € internationally.`
          }
        />
      </div>

      {/* Similar Products */}
      <section className="py-10 px-5 md:px-16">
          <h3 className="uppercase font-georgia font-bold text-center py-5 text-xl md:text-2xl tracking-wider">
            Similar Products
          </h3>
          
          <Carousel 
              breakPoints={similarProductsBreakPoints} 
              pagination={false}
              itemPadding={[10]}
              showEmptySlots={false}
              showArrows={true}
            >

            {/* Mapping through all the available products */}
              {similarProducts.slice(0,8).map((product, index) => (
                  <Product 
                      productImage = {product.photo}
                      slug={product.slug} 
                      productName={product.name}
                      price={product.price}
                      key={index}
                  />
              )) }
          </Carousel>
      </section>

    </section>
  )
}

export default ShopDetails