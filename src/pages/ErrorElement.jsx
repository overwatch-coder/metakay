import { Link, useRouteError } from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet-async";

const ErrorElement = () => {
    const error = useRouteError();
    const { MODE } = import.meta.env;

  return (
    <div>
        <Helmet>
            <title>Unexpected Error | Metakay Official</title>
        </Helmet>

        <Header />
        <div className="py-60 text-center mx-auto flex flex-col gap-y-4 items-center">
            <h2 className="text-5xl">Oops!</h2>
            <p className="text-xl">Sorry, something went wrong!</p>
            <p className="text-xl">Please try again later</p>
            {MODE === 'development' && <p><i>{error && error.message}</i></p>}
            <Link 
                to="/"
                className="mt-5 px-6 py-3 bg-gray text-white uppercase w-[200px] hover:opacity-80 rounded" 
            >
                Go back
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default ErrorElement