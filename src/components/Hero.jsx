import heroVideo from '../assets/hero-2.mp4';

const Hero = () => {
  return (
    <section>
        <video autoPlay muted loop className='w-full object-cover sm:h-[130vh]'>
            <source src={heroVideo} type='video/mp4' />
        </video>
    </section>
  )
}

export default Hero