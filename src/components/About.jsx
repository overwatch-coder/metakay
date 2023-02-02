import metakay from '../assets/metakay.jpg';
const About = () => {
  return (
    
    <section 
        className="bg-gray w-screen text-white py-20 px-7 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10"
        >

        <img 
            src={metakay} 
            alt="metaky" 
            className='object-contain w-full lg:order-2 pr-5 md:pr-5' 
        />

        <div className="flex flex-col gap-y-4">
            <h2 className="uppercase text-xl md:text-2xl font-medium">About MetaKay</h2>

            <p className="text-base md:text-lg leading-[2.8] md:leading-[3.3rem] pr-3 md:pr-5">
                MetaKay is a fashion designer who uses his creative skills to create innovative and unique clothing designs. He has a passion for creating unique pieces that are both stylish and functional. He specializes in creating custom-made pieces that are tailored to the individual’s needs. Metakay is also an expert in understanding the latest trends in fashion and finding the perfect balance between style and comfort. He is constantly looking for new ways to express himself through his designs and loves working with different fabrics and textures. Metakay is always looking for new challenges and opportunities to showcase his designs.
            </p>
        </div>
    </section>
  )
}

export default About