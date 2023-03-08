import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import ShopFilter from "../components/ShopFilter";
import { createClient } from "contentful";
import Loader from "../components/Loader";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

const client = createClient({
  space: VITE_SPACE_ID,
  accessToken: VITE_ACCESS_TOKEN
})

const ShopLayout = () => {
  const shopProducts = useLoaderData();
  const [selectedProductsByCategory, setSelectedProductsByCategory] = useState(shopProducts);
  const [selectedCat, setSelectedCat] = useState('');


  // Display loading screen when data is being loaded
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }

  // filtering and displaying products based on what a user clicks
  const categoryClicked = (item) => {
    let selectedCategory = item.toLowerCase();

    if(selectedCategory !== 'all'){
      setSelectedCat(selectedCategory);
      setSelectedProductsByCategory(shopProducts.filter(prod => prod.fields.category.includes(selectedCategory)));
    }else{
      setSelectedProductsByCategory(shopProducts);
      setSelectedCat('');
    }
  }

  return (
    <section>
        {/* Header Section */}
        <Helmet>
          <title>Shop | Metakay Official</title>
        </Helmet>

        {/* Header Hero Section */}
        <div 
            className='bg-gray w-screen py-3 mb-10 text-center font-georgia font-medium uppercase text-white text-xl tracking-wider md:text-3xl'>
            <h2>Shop - Metakay {selectedCat && `- (${selectedCat})`}</h2>
        </div>

        <div className="grid grid-cols-1 gap-y-5 md:gap-y-0 mb-10 md:grid-cols-4">
            {/* Category Section */}
            <ShopFilter categoryClicked={categoryClicked} />

            {/* Outlet for dynamic shopping products */}
            <div className="px-5 md:col-span-3">
                <Outlet context={{ shopProducts: selectedProductsByCategory }} />
            </div>
        </div>
    </section>
  )
}

export default ShopLayout

// getting products from contenful
export const shopProductsLoader = async () => {
  const shopProductsEntries = await client.getEntries({
    content_type: 'product'
  })

  if(!shopProductsEntries){
    throw Error('No products found!. Please try again letter');
  }

  const shopProducts = shopProductsEntries.items;

  if(shopProducts.length === 0){
    throw Error('No products found!. Please try again letter');
  }

  return shopProducts;
}
