import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div className='flex items-center gap-x-8 text-2xl py-3'>
        <Link to='https://www.facebook.com' target='_blank' className='hover:opacity-80 hover:scale-110'> 
            <FaFacebook />
        </Link>

        <Link to='https://www.twitter.com' target='_blank' className='hover:opacity-80 hover:scale-110'> 
            <FaTwitter />
        </Link>

        <Link to='https://web.whatsapp.com' target='_blank' className='hover:opacity-80 hover:scale-110'> 
            <FaWhatsapp />
        </Link>

        <Link to='https://www.instagram.com' target='_blank' className='hover:opacity-80 hover:scale-110'> 
            <FaInstagram />
        </Link>
        
        
    </div>
  )
}

export default Social