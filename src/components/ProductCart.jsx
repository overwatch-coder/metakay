import { FiPlus, FiMinus } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { productContext } from "../context/ProductContext";
import { sendEmail } from "../lib/emailjs";

const ProductCart = ({
  products,
  removeFromCart,
  clearCart,
  addQuantity,
  removeQuantity,
  totalPrice,
  isMiniCart,
}) => {
  const navigate = useNavigate();
  const { setProducts } = useContext(productContext);

  // set default values for the input elements
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // function to handle product checkout
  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError("");

      if (phone === "" || name === "" || email === "") {
        setError("Please fill the fields marked with *");
      } else if (
        !phone.match("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$")
      ) {
        setError("Phone number is not in the right format");
      } else {
        setError("");
        const data = {
          ...products,
          totalPrice,
          phone,
          name,
          email,
          orderNumber: `MTK-${uuid().slice(0, 7)}-${
            new Date().toISOString().split(":")[0]
          }`,
        };

        // send into database or api here
        const templateParams = {
          subject: "MetaKay | Order Details",
          to_name: "MetaKay",
          message: `You have received a new order from ${data.name}`,
          from_name: data.name,
          from_email: data.email,
          from_message: `N/A`,
          from_phone: data.phone,
          order_number: data.orderNumber,
          total_price:
            deliveryFee === "Free"
              ? data.totalPrice
              : data.totalPrice + deliveryFee,
        };

        const message = await sendEmail(templateParams);

        setLoading(false);

        if (message.status !== 200) {
          throw new Error(message.message);
        }

        setProducts(data);
        setName("");
        setEmail("");
        setPhone("");
        clearCart();
        navigate("/success");
      }
    } catch (error) {
      throw new Error("Oops! Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  // reset user data
  const handleReset = () => {
    setError("");
    setName("");
    setEmail("");
    setPhone("");
  };

  // delivery fee is free if the total amount is more than 1000 usd
  let deliveryFee = totalPrice > 2000 ? "Free" : parseFloat(10.0);

  return (
    <section
      className={
        isMiniCart
          ? "grid grid-cols-1 py-5 px-7"
          : "grid grid-cols-1 lg:grid-cols-3 py-10 md:px-5"
      }
    >
      <div
        className={`col-span-1 ${
          isMiniCart ? "" : "lg:col-span-2"
        } md:px-5 pb-5 flex flex-col gap-y-5`}
      >
        {!isMiniCart && (
          <h2 className="flex justify-between items-center">
            <span className="font-bold text-gray md:text-xl uppercase">
              Shopping Cart
            </span>
            <span className="text-base font-medium">
              {products.length} items
            </span>
          </h2>
        )}

        <div className="flex flex-col gap-y-10 pt-5">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${
                isMiniCart ? "md:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-5"
              } 
                            grid grid-cols-2 gap-y-3 gap-x-5 md:place-items-center border-b-2 last:border-b-0 border-gray/25 pb-5`}
            >
              <img
                src={`https:${product.image}`}
                alt={product.name}
                className="w-20 h-24 object-cover"
              />

              <Link
                to={`/shop/${product.slug}`}
                className="flex flex-col gap-y-2"
              >
                <span className="font-bold">{product.name}</span>
                <span className="text-gray text-sm font-medium">
                  Size: {product.size}
                </span>
              </Link>

              <h4 className="flex items-center gap-x-3 pt-4 md:pt-0">
                <button
                  onClick={() =>
                    removeQuantity(product.id, product.quantity - 1)
                  }
                >
                  <FiMinus size={20} />
                </button>
                <span className="font-extrabold text-lg">
                  {product.quantity}
                </span>
                <button
                  onClick={() => addQuantity(product.id, product.quantity + 1)}
                >
                  <FiPlus size={20} />
                </button>
              </h4>

              <h4 className="font-medium pt-4 md:pt-0">
                $ {product.itemTotal}
              </h4>

              <button
                onClick={() => removeFromCart(product.id)}
                className={`${
                  isMiniCart
                    ? "w-full col-span-2 lg:col-span-1"
                    : "col-span-2 md:col-span-1"
                }`}
              >
                <MdDeleteForever
                  size={30}
                  className="text-red-400 hover:text-red-600 md:place-items-center float-right"
                />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-x-5 py-10 flex-row-reverse justify-between">
          <button
            className="uppercase bg-red-500 hover:bg-red-700 px-4 py-3 text-white text-sm font-medium"
            onClick={clearCart}
          >
            Clear Cart
          </button>

          <Link
            to="/shop"
            className="uppercase bg-gray px-4 py-3 text-white text-sm hover:bg-gray/80"
          >
            Back to shop
          </Link>
        </div>
      </div>

      {/* Order Summary and Checkout goes here */}
      <div className="col-span-1 bg-gray text-white px-5 flex flex-col gap-y-5">
        <h2 className="text-lg md:text-xl lg:text-2xl uppercase py-5 border-b-2 border-white/30 pb-5">
          Order Summary
        </h2>

        <div className="flex flex-col gap-y-7 py-5 mb-auto">
          <h3 className="flex justify-between items-center">
            <span className="font-medium">Subtotal</span>
            <span className="text-lg font-semibold">${totalPrice}</span>
          </h3>

          {!isMiniCart && (
            <h3 className="flex justify-between items-center text-lg">
              <span className="font-medium">Delivery</span>
              <span>
                {" "}
                {deliveryFee !== "Free" ? `$ ${deliveryFee}` : "Free"}{" "}
              </span>
            </h3>
          )}

          <h4 className="flex justify-between items-center text-base md:text-lg py-10 border-t-2 border-white/30">
            <span className="font-bold uppercase">Total</span>
            <span className="font-medium text-xl">
              ${" "}
              {!isMiniCart && deliveryFee !== "Free"
                ? `${deliveryFee + totalPrice}`
                : totalPrice}
            </span>
          </h4>

          {/* Form to fill to get client contact details */}
          <form
            onClick={(e) => e.stopPropagation()}
            method="post"
            className={`flex flex-col gap-y-5 ${
              isMiniCart ? "hidden" : "block"
            } `}
          >
            <div className="flex flex-col gap-y-3">
              <label htmlFor="name">Name *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                className="w-full outline-none rounded border-[1px] border-white p-3 focus:border-2 shadow-md bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label htmlFor="email">Email *</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full outline-none rounded border-[1px] border-white p-3 focus:border-2 shadow-md bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label htmlFor="phone">Number (WhatsApp) *</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                placeholder="+233241579315"
                className="w-full outline-none rounded border-[1px] border-white p-3 focus:border-2 shadow-md bg-transparent"
                pattern="[0-9]{4}[0-9]{2}[0-9]{3}[0-9]{4}"
              />
              <small className="text-sm mt-3">
                NB: This is to enable us communicate with you via call or
                whatsapp
              </small>
            </div>

            {(name || email || phone) && (
              <button
                type="reset"
                className="mt-4 uppercase font-medium py-4 px-5 mx-auto text-center w-full bg-red-500 text-white hover:opacity-80 hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-500 rounded transition duration-500"
                onClick={handleReset}
              >
                Reset
              </button>
            )}

            <p className="text-red-500 py-3 text-center text-sm">{error}</p>
          </form>
        </div>

        {!isMiniCart && (
          <button
            className="my-10 p-3 w-full sm:w-[200px] lg:w-full md:p-3 lg:p-4 font-medium bg-white text-black uppercase hover:bg-transparent hover:text-white hover:border-2 hover:border-white"
            onClick={handleCheckout}
          >
            {loading ? "Sending..." : "Checkout"}
          </button>
        )}

        {isMiniCart && (
          <Link
            to="/cart"
            className="my-10 p-3 w-full sm:w-[200px] lg:w-full md:p-3 lg:p-4 font-medium bg-white text-black text-center uppercase hover:bg-transparent hover:text-white hover:border-2 hover:border-white"
          >
            Order Now
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProductCart;
