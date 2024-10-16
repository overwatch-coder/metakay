import { useOutletContext } from "react-router-dom";
import HomePageCollectionCategory from "./HomePageCollectionCategory"

const HomePageCollection = () => {

  const { collections } = useOutletContext();
  
  return (
    <section id="collection" className="px-7 mx-auto py-20">
        <h1 className="text-xl md:text-2xl font-medium uppercase">Collection</h1>

        <div 
          className="flex flex-col space-y-16 items-center md:space-y-0 md:space-x-10 md:flex-row md:justify-center py-5">
          {(collections.length > 1) ? 
            collections.map(({ fields }, index) => (
            <HomePageCollectionCategory 
              categoryImage={fields?.image?.fields?.file?.url} 
              categoryName={fields?.name} 
              key={index}
            />
          ))
          :
          <HomePageCollectionCategory 
            categoryImage={collections[0]?.fields?.image?.fields?.file?.url} 
            categoryName={collections[0]?.fields?.name} 
            extraClass={'w-[700px]'}
          />
        }
        </div>
    </section>
  )
}

export default HomePageCollection