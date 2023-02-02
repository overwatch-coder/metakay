import { Outlet } from "react-router-dom";
import ShopFilter from "../components/ShopFilter";

const ShopLayout = () => {

  return (
    <section>
        {/* Header Section */}
        <div 
            className='bg-gray w-screen py-3 mb-10 text-center font-georgia font-medium uppercase text-white text-xl tracking-wider md:text-3xl'>
            Shop - Metakay
        </div>

        <div className="flex flex-col gap-y-5 md:flex-row md:gap-y-0 mb-10">
            {/* Category Section */}
            <ShopFilter />

            {/* Outlet for dynamic shopping products */}
            <div className="px-5">
                <Outlet />
            </div>
        </div>
    </section>
  )
}

export default ShopLayout