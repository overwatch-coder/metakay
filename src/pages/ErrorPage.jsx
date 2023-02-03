import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="border-2 border-red-500 bg-red-100 text-black rounded p-5">   
        <h2>{error}</h2>
    </div>
  )
}

export default ErrorPage