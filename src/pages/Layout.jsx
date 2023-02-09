import { useEffect } from "react";
import { Outlet, useLoaderData, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { createClient } from "contentful";
import Loader from '../components/Loader';

const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

const client = createClient({
  space: VITE_SPACE_ID,
  accessToken: VITE_ACCESS_TOKEN
})

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [pathname])

  // get products data from loader function
  const { products, collections} = useLoaderData();

  // displaying loading screen while data is being fetched
  const navigation = useNavigation();

  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }


  return (
    <section className="flex flex-col min-h-screen scroll-smooth">
        <Header />
        
        <main className="mb-auto mt-16 md:mt-24">
            <Outlet context={{ allProducts: products, collections: collections }} />
        </main>

        <Footer />
    </section>
  )
}

export default Layout

export const productsLoader = async () => {
  const productEntries = await client.getEntries({
    content_type: 'product'
  });

  const collectionEntries = await client.getEntries({
    content_type: 'collection'
  });

  const products = productEntries.items;
  const collections = collectionEntries.items;

  if(!products || !collections){
    throw Error('Page not found!');
  }

  return {products, collections};
}