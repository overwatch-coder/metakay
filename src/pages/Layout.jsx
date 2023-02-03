import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {

  return (
    <section className="flex flex-col min-h-screen">
        <Header />
        
        <main className="mb-auto mt-16">
            <Outlet />
        </main>

        <Footer />
    </section>
  )
}

export default Layout