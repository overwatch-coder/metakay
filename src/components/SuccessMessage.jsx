import { useEffect, useState } from "react";

const SuccessMessage = ({message, urlPath}) => {
    const [displaySuccess, setDisplaySuccess] = useState(false);
    const location = window.location;

    // get success message from url search params
    let success = location.search?.split('=')[1] ? true : false;

    // display or hide success message based url search params
    useEffect(() => {
      if(success){
        setDisplaySuccess(true);
        setTimeout(() => {
          setDisplaySuccess(false);
          window.history.pushState('', '', `${urlPath}`);
        }, 3000)
      }
    }, [])

  return (
    <div 
        className={`${displaySuccess ? 'block' : 'hidden'} mx-7 md:w-[500px] bg-[#023020] rounded p-5 text-center text-white text-base md:text-xl shadow-md space-y-4 animate-slideY md:mx-auto z-50`}
    >
        <h3>{message}</h3>
        <p>We will get back to you shortly</p>
    </div>
  )
}

export default SuccessMessage