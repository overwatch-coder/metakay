import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [pathname])

  return (
    <section className="flex flex-col min-h-screen scroll-smooth">
        <Header />
        
        <main className="mb-auto mt-16 md:mt-24">
            <Outlet />
        </main>

        <Footer />
    </section>
  )
}

export default Layout