import { Link, useParams, useNavigation, useLoaderData } from "react-router-dom";
import ProductCarousel from '../components/ProductCarousel';
import ProductInformation from "../components/ProductInformation";
import ProductDescription from "../components/ProductDescription";
import Product from "../components/Product";
import Carousel from "react-elastic-carousel"
import Loader from "../components/Loader";
import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from "react-helmet-async";

const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

const client = createClient({
  space: VITE_SPACE_ID,
  accessToken: VITE_ACCESS_TOKEN
})

const ShopDetails = () => {

  const products = useLoaderData();

  // displaying loading screen while data is being fetched
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }

    const { slug } = useParams();
    const singleProducts = products.filter(product => product.fields.slug === slug)[0];
    const { 
      fields: 
        {
          photo: 
            {fields: 
              {file: { url }}
            }, 
          name, 
          images, 
          description, 
        } 
      } = singleProducts;

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 800, itemsToShow: 2 },
    ]

    const similarProductsBreakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 700, itemsToShow: 4 }
    ];

    // get similarProducts by category
    const similarProducts = products.filter(product => (product.fields.category.includes(singleProducts.fields.category[0]) && product.fields.slug !== slug));

  return (
    <section>
      <Helmet>
        <title>{slug.charAt(0).toUpperCase().concat(slug.slice(1))} | Shop | Metakay Official</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-3 pt-5 gap-y-10 lg:gap-x-20">
        {/* Product Images */}
        <section className="relative w-screen lg:w-[750px] xl:w-[950px] px-5 lg:px-16 flex flex-col gap-y-3 col-span-1 lg:col-span-2">

          <div className="px-5">
            <Link 
              to='/shop' 
              className="border-b-[1px] hover:border-b-2 hover:border-gray font-medium hover:text-gray"
            >
              Back to shop
            </Link>
          </div>

          <img src={`https:${url}`} alt={name} className='w-full object-cover px-5' />

          <ProductCarousel 
            breakPoints={breakPoints} 
            name={name} 
            images={images}
            extraClass={'h-[60vh] md:h-[80vh]'} 
          />
        </section>

        {/* Product Information */}
        <ProductInformation 
          singleProducts={singleProducts}
          image={url}
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-center items-center lg:items-start py-10 px-5">
        <ProductDescription 
          title={'Description'}
          description={documentToReactComponents(description)}
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
              {similarProducts.slice(0,10).map((product, index) => (
                <Product 
                  productImage = {product.fields.photo.fields.file.url}
                  slug={product.fields.slug} 
                  productName={product.fields.name}
                  price={product.fields.price}
                  key={index}
                />
              )) }
          </Carousel>
      </section>

    </section>
  )
}

export default ShopDetails

export const shopProductsDetails = async () => {
  const shopProductsDetailsEntry = await client.getEntries({
    content_type: 'product'
  })

  if(!shopProductsDetailsEntry){
    throw Error('No products found!. Please try again letter');
  }

  const products = shopProductsDetailsEntry.items;

  if(products.length === 0){
    throw Error('No products found!. Please try again letter');
  }

  return products;
}