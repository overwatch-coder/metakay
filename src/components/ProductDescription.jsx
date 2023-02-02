import { FaBookReader } from 'react-icons/fa';

const ProductDescription = ({title, description}) => {

  return (
    <section className="bg-gray mx-5 lg:mx-16 px-5 md:px-6 mb-10">
        <h3 
            className={`flex justify-between items-center text-white text-xl font-medium py-5 border-b-2`}
        >
          <span> { title } </span>
          <FaBookReader />
        </h3>

        <div 
            className={`text-white leading-9 lg:leading-10 tracking-wider text-sm lg:text-base flex flex-col gap-y-4 pt-4 pb-10`}>
          {description}
        </div>
    </section>
  )
}

export default ProductDescription