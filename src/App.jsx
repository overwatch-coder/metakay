import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
  } from "react-router-dom";

  // Import pages
import RootLayout from "./pages/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact, { contactAction } from "./pages/Contact";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import ShopDetails from "./pages/ShopDetails";
import ShopLayout from "./pages/ShopLayout";
import NotFound from "./pages/NotFound";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route 
          index 
          element={<Home />} 
        />
        <Route 
          path="collection/:colname" 
          element={<Collection />} 
        />
        <Route path="shop" element={<ShopLayout />}>
          <Route 
            index 
            element={<Shop />} 
          />
        </Route>
        <Route 
          path="shop/:slug" 
          element={<ShopDetails />} 
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
    <RouterProvider router={router} />
  )
}

export default App