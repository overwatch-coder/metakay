import { useParams, useNavigation, useLoaderData } from 'react-router-dom';
import SingleCollection from '../components/SingleCollection';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import { contentfulClient } from '../lib/contentful';


const Collection = () => {
  // getting collection name from url
    const { colname } = useParams();

    // getting the loaded data
    const collection = useLoaderData();

    // destructuring the data gotten
    const { heroImage: {fields : { file }}, collections } = collection[0]?.fields;

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
  ]

  // set loading screen
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }

  return (
    <div className='pb-2'>
      <Helmet>
        <title>{`${colname.toUpperCase()} - Collections | Metakay Official`}</title>
      </Helmet>

      {/* Hero Section */}
      <section className='relative bg-gray'>
        <img src={'https:' + file.url} alt="collection hero image" className='w-full object-cover mix-blend-multiply md:h-[85vh]' />

        <div className='absolute uppercase font-bold text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-white flex flex-col space-y-4 sm:space-y-6'>
            <span className='text-xl sm:text-2xl md:text-3xl'>Metakay's</span>
            <span className='text-5xl sm:text-7xl md:text-8xl font-georgia'>
              {colname}
            </span>
          </h2>
        </div>
      </section>

      {/* Each Category */}
      <section 
        className='py-16 flex flex-col space-y-10'
      >
        {collections.length > 1 ? 
          collections.map(({fields: {name, excerpt, photo, images}}, index) => (
            <SingleCollection
              photo={photo.fields.file.url}
              description={excerpt}
              name={name}
              images={images}
              breakPoints={breakPoints}
              key={index}
            />
          )) :
            <SingleCollection
              photo={collections[0].fields.photo.fields.file.url}
              description={collections[0].fields.excerpt}
              name={collections[0].fields.name}
              images={collections[0].fields.images}
              breakPoints={breakPoints}
            />
        }
      </section>
    </div>
  )
}

export default Collection

export const singleCollectionLoader = async ({params}) => {
  const {colname} = params;
  const collectionEntry = await contentfulClient.getEntries({
    content_type: 'collection',
    'fields.name': colname
  })

  if(collectionEntry.items.length === 0){
    throw Error('Page not found!');
  }

  const collection = collectionEntry.items;

  return collection;
}
