import { Link } from "react-router-dom"

const HomePageCollectionCategory = ({categoryImage, categoryName}) => {
  return (
    <div className="relative">
        <img 
            src={'https:' + categoryImage} 
            alt={'Metakay Category - ' + categoryName } 
            className='w-full object-contain' 
        />

        <h3 className="bg-white opacity-70 hover:opacity-95 mix-blend-luminosity rounded-full p-5 md:p-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link 
                to={`collection/${categoryName}`} 
                className="text-2xl md:text-3xl uppercase font-medium text-gray"
            >
                {categoryName}
            </Link>
        </h3>
    </div>
  )
}

export default HomePageCollectionCategory