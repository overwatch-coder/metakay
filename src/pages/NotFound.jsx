import { Link } from "react-router-dom"
import notFoundImage from '../assets/404.png';

const NotFound = () => {
  return (
    <div className="px-7 py-10 flex flex-col items-center gap-y-5">
        <img 
            src={notFoundImage} 
            alt="Not found image"  
            className="w-full object-cover md:h-[500px]" 
        />

        <Link to='/' className="bg-gray py-3 px-5 uppercase text-white hover:bg-transparent hover:text-gray hover:border-2 hover:border-gray rounded">go back</Link>
    </div>
  )
}

export default NotFound