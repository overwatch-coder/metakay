import { Helmet } from "react-helmet-async";
import { useNavigation } from "react-router-dom";
import Hero from "../components/Hero"
import HomePageCollection from "../components/HomePageCollection";
import About from "../components/About";
import HomePageShop from "../components/HomePageShop";
import Loader from "../components/Loader";

const Home = () => {

  // displaying loading screen while data is being fetched
  const navigation = useNavigation();

  if(navigation.state === 'loading'){
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Helmet>
        <title>Metakay | Official Website | Designs  | Collections - E-Shop</title>
      </Helmet>
      
      <Hero />
      <HomePageCollection />
      <About />
      <HomePageShop />
    </div>
  )
}

export default Home
