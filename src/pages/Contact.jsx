import Social from '../components/Social';
import contactUsImage from '../assets/contact-us.jpg';
import { useActionData, Form, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

const location = window.location;

const Contact = () => {
  let data = useActionData();

  // get success message from url search params
  let success = location.search?.split('=')[1] ? true : false;
  const [displaySuccess, setDisplaySuccess] = useState(false);

  // display or hide success message based url search params
  useEffect(() => {
    if(success){
      setDisplaySuccess(true);
      setTimeout(() => {
        setDisplaySuccess(false);
      }, 4000)
    }
  }, [])

  // assign values from the data to input elements
  const [inputs, setInputs] = useState({
    name: data?.name,
    email: data?.email,
    message: data?.message,
    errors: data?.errors
  })

  // clear input fields as well as error elements
  const handleReset = () => {
    setInputs({})
  }

  return (
    <section>
      {/* Header Section */}
      <div 
        className='bg-gray w-screen py-3 mb-10 text-center font-georgia font-medium uppercase text-white text-xl tracking-wider md:text-3xl'>
        <h2>Contact - Metakay</h2>
      </div>

      
      {displaySuccess && 
        <div className='mx-7 md:w-[500px] bg-green-500 rounded p-5 text-center text-white text-base md:text-xl shadow-md space-y-4 animate-slideY md:mx-auto'>
          <h3>Thank you for contacting us!</h3>
          <p>We will get back to you shortly </p>
        </div>
      }

      {/* General Information */}
      <div className='px-7 pt-5 flex flex-col gap-y-7 md:flex-row md:justify-evenly'>
          <div className='flex flex-col gap-y-2'>
            <h2 className='capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl'>
              Come Find Us
            </h2>

            <p className='text-gray hidden md:block'>
              If you are living nearby, come visit MetaKay <br /> at our comfortable office. 
            </p>

            <p className='text-gray md:hidden'>
              If you are living nearby, come visit MetaKay at our comfortable office. 
            </p>
          </div>

          {/* Address */}
          <div className='flex flex-col gap-y-2'>
            <h2 className='capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl'>Headquarters</h2>
            <p className='text-gray'>
              <span className='font-semibold'>Location:</span> 123 East Legon, Accra Ghana
            </p>
            <p className='text-gray'><span className='font-semibold'>Telephone:</span> (+233) 024-156-2037</p>
            <p className='text-gray'><span className='font-semibold'>Email:</span> metakay@fashion.com</p>
          </div>

          {/* Social Media */}
          <div className='flex flex-col gap-y-2'>
            <h2 className='capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl'>
              Our Socials
            </h2>

            <Social />
          </div>
      </div>

      <div className='hidden md:block border-b-2 w-4/5 mx-auto mt-10 mb-16'></div>

      {/* Contact section */}
      <div className='px-7 mb-16 grid grid-cols-1 gap-y-3 md:grid-cols-2 py-5 text-black'>

        {/* General Information */}
        <div className=''>
          <img 
            src={contactUsImage} 
            alt="contact us image"
            className='w-full object-cover'
          />
        </div>

        <div className="col-span-1">
          {/* Contact Form */}
          <Form className='flex flex-col gap-y-7' method='post' action='/contact'>
            <div className='space-y-2'>
              <h2 className='capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl md:text-center'>
                Get In Touch
              </h2>
              <p>If you have any questions, just fill the contact form and we will answer you shortly.</p>
            </div>

            <div className='text-gray flex flex-col gap-y-3'>
              <label>Name</label>
              <input 
                defaultValue={inputs && inputs.name}
                type="text" 
                name='name' 
                className='w-full outline-none rounded border-[1px] border-gray p-3 focus:border-2 shadow-md' 
                placeholder='your name'
              />
              {inputs && inputs.errors && <p className='text-red-500'>{inputs.errors && inputs.errors.name}</p>}
            </div>

            <div className='text-gray flex flex-col gap-y-3'>
              <label>Email</label>
              <input 
                defaultValue={inputs && inputs.email}
                type="email" 
                name='email' 
                className='w-full outline-none rounded border-[1px] border-gray p-3 focus:border-2 shadow-md' 
                placeholder='your email'
              />
              {inputs && inputs.errors && <p className='text-red-500'>{inputs.errors && inputs.errors.email}</p>}
            </div>

            <div className='text-gray flex flex-col gap-y-3'>
              <label>Message</label>
              <textarea 
                defaultValue={inputs && inputs.message}
                name="message" 
                cols="30" 
                rows="10" 
                placeholder='leave a message'
                className='w-full outline-none rounded border-[1px] border-gray p-3 focus:border-2 shadow-md'
              >
              </textarea>
              {inputs && inputs.errors && 
                <p className='text-red-500'>
                  {inputs.errors && inputs.errors.message}
                </p>
              }
            </div>

            <button className='uppercase font-medium py-4 px-5 mx-auto text-center w-full bg-gray text-white hover:opacity-80 hover:bg-white hover:text-black hover:border-2 hover:border-gray rounded transition duration-500'>
              Submit
            </button>

            {data && Object.keys(inputs).length > 0 && 
              <button
                type='reset' 
                className='uppercase font-medium py-4 px-5 mx-auto text-center w-full bg-red-500 text-white hover:opacity-80 hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-500 rounded transition duration-500'
                onClick={handleReset}
              >
              Reset
              </button>
            }
          </Form>
        </div>
      </div>

      {/* Map */}
      <div className='py-20 px-7'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.113977367731!2d-0.1670703325771899!3d5.63638118462521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b501278f4a5%3A0xca081548a0c20ffd!2sEast%20Legon%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sma!4v1675384620455!5m2!1sen!2sma" 
          width="600" 
          height="450" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className='border-0 w-full'
        >
        </iframe>
      </div>
    </section>
  )
}

export default Contact

export const contactAction = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    errors: {},
  }

  // validate user form data
  if(data.name.trim() == ''){
    data.errors.name = 'Please provide your full name!';
  }

  if(data.email.trim() == '' || !data.email.includes('@')){
    data.errors.email = 'Please provide a valid email address!';
  }

  if(data.message.trim() == '' || data.message.trim().length < 20){
    data.errors.message = 'Message cannot be less than 20 characters!';
  }

  if(Object.keys(data.errors).length){
    return data;
  }

  // send into database or api here
  console.log(data);
  location.search = 'success=true';

  return redirect('/contact', 200);
}

