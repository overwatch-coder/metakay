import { useState } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import footerLogo from "../assets/footer-logo.png";
import Social from "../components/Social";

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const submitSubscription = (event) => {
    event.preventDefault();
    if (subscriberEmail !== "") {
      console.log(subscriberEmail);
      setSubscriberEmail("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray w-screen pt-10 md:pt-20 pb-5 text-white px-10 md:px-16 flex flex-col gap-y-16">
      <section className="gap-16 sm:gap-y-20 lg:gap-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Footer logo */}
        <Link to="/">
          <img
            src={footerLogo}
            alt="footer logo"
            className="w-32 h-36 md:w-40 md:h-44 block mix-blend-color-dodge aspect-square"
          />
        </Link>

        {/* Go to page info */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="uppercase font-medium mb-2">Information</h3>
          <Link to="/" className="hover:opacity-80 text-sm">
            Home
          </Link>
          <Link to="/shop" className="hover:opacity-80 text-sm">
            Shop
          </Link>
          <Link to="/contact" className="hover:opacity-80 text-sm">
            Contact
          </Link>
          <Link to="/" className="hover:opacity-80 text-sm">
            Privacy Policy
          </Link>
        </div>

        {/* Address Info */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="uppercase font-medium mb-2">Contact</h3>
          <h4 className="flex items-center space-x-4">
            <FaMapMarkerAlt />
            <span>Ablekuma East, Accra</span>
          </h4>

          <h4 className="flex items-center space-x-4">
            <FaPhone />
            <span>(+233) 026-755-6523</span>
          </h4>

          <h4 className="flex items-center space-x-4">
            <FiMail />
            <span>metakay@fashion.com</span>
          </h4>
        </div>

        {/* Social Media Info */}
        <div className="flex flex-col items-start space-y-6">
          <h3 className="uppercase font-medium">Follow Us</h3>
          <Social />
        </div>
      </section>

      {/* Newsletter */}
      <section className="flex flex-col items-center space-y-5 text-center">
        <div>
          <h3 className="font-medium text-lg">Subscribe To Our Newsletter</h3>
          <p className="text-xs">No Spam And Only Useful Information</p>
        </div>

        <form
          onSubmit={submitSubscription}
          className="flex flex-col gap-y-5 w-full max-w-[300px]"
        >
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded px-3 py-2 outline-none bg-transparent border-2 hover:opacity-90"
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="uppercase bg-white hover:bg-transparent hover:border-2 text-black py-2 hover:text-white transition rounded"
          >
            Subscribe
          </button>
        </form>

        {/* Display Success Message */}
        <div
          className={`${
            success ? "block animate-slideY" : "hidden"
          } space-y-3 shadow-md p-5 bg-white text-black text-start rounded-md`}
        >
          <h2 className="font-semibold text-2xl">Thank you!.</h2>
          <p className="">
            Your subscription has been confirmed. You've been added to our list
            and you'll hear from us soon
          </p>
        </div>
      </section>

      {/* Horizontal line */}
      <div className="border-b-[1px] border-b-white opacity-50"></div>

      {/* Copyright info */}
      <p className="text-base text-center">
        Copyright &copy; 2023 - {new Date().getFullYear()} Metakay. All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
