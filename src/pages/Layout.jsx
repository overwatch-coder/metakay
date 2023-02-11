import { useEffect } from "react";
import { Outlet, useLoaderData, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { createClient } from "contentful";
import Loader from '../components/Loader';
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta name="title" content={'Metakay | Official Website | Designs  | Collections - E-Shop'} />
        <meta name="description" content="Metakay specializes in creating all your custom-made fashion designs that are tailored to your personal needs." />
        <meta name="keywords" content="metakay, fashion, designs, eunoia, e-commerce, shop, custom-made, collections, new, modern, customize" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="Metakay" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Helmet>
    
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