import { useParams } from "react-router-dom"

const ShopDetails = () => {
    const { slug } = useParams();
  return (
    <div>ShopDetails - {slug}</div>
  )
}

export default ShopDetails