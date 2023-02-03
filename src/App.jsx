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
import Contact, { action as formAction } from "./pages/Contact";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import ShopDetails from "./pages/ShopDetails";
import ShopLayout from "./pages/ShopLayout";

// Import components

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="collection/:colname" element={<Collection />} />
        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
        </Route>
        <Route path="shop/:slug" element={<ShopDetails />} />
        <Route 
          path="contact" 
          element={<Contact />} 
          action={formAction}
        />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App