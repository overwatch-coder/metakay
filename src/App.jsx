import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
  } from "react-router-dom";

  // Import pages
import RootLayout, { productsLoader } from "./pages/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact, { contactAction } from "./pages/Contact";
import Cart from "./pages/Cart";
import Collection, { singleCollectionLoader } from "./pages/Collection";
import ShopDetails, { shopProductsDetails } from "./pages/ShopDetails";
import ShopLayout, { shopProductsLoader } from "./pages/ShopLayout";
import NotFound from "./pages/NotFound";
import ErrorElement from "./pages/ErrorElement";
import { HelmetProvider } from "react-helmet-async";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<RootLayout />}
        loader={productsLoader}
        errorElement={<ErrorElement />}
      >
        <Route 
          index 
          element={<Home />} 
        />

        <Route 
          path="collection/:colname" 
          element={<Collection />} 
          loader={singleCollectionLoader}
        />

        <Route 
          path="shop" 
          element={<ShopLayout />}
          loader={shopProductsLoader}
        >
          <Route 
            index 
            element={<Shop />} 
          />
        </Route>

        <Route 
          path="shop/:slug" 
          element={<ShopDetails />}
          loader={shopProductsDetails} 
        />

        <Route 
          path="contact" 
          element={<Contact />} 
          action={contactAction}
        />

        <Route 
          path="cart" 
          element={<Cart />} 
        />

        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Route>
    )
  )


  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App