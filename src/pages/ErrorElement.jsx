import { Link, useRouteError } from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";

const ErrorElement = () => {
    const error = useRouteError();

  return (
    <div>
        <Header />
        <div className="py-60 text-center mx-auto flex flex-col gap-y-10 items-center">
            <h2 className="text-2xl">{error && `An error has occured! Please try again later or check your network configuration`}</h2>
            <Link 
                to="/"
                className="px-4 py-2 bg-gray text-white uppercase w-[100px] hover:opacity-80" 
            >
                Go back
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default ErrorElement