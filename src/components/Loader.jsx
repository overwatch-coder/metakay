import { useLocation, useNavigation } from 'react-router-dom';
import logo from '../assets/logo-white.jpg';

const Loader = () => {
const location = useLocation();
const navigation = useNavigation();

  return (
    <div className='mx-auto flex flex-col items-center justify-center'>
      {location.pathname === '/contact' && navigation.location?.state?._isRedirect === true &&
          <div className='text-2xl text-center mx-auto'>
            Your form has been submitted successfully!
          </div>
        }

        <img 
            src={logo} 
            alt="metakay logo"  
            className='w-full md:w-1/2 object-cover animate-slideX' 
        />
    </div>
  )
}

export default Loader