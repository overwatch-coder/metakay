import Social from "../components/Social";
import contactUsImage from "../assets/contact-us.jpg";
import { useActionData, Form, redirect } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SuccessMessage from "../components/SuccessMessage";
import { sendEmail } from "../lib/emailjs";

const location = window.location;

const Contact = () => {
  let data = useActionData();

  // assign values from the data to input elements
  const [inputs, setInputs] = useState({
    name: data?.name,
    email: data?.email,
    message: data?.message,
    errors: data?.errors,
  });

  // clear input fields as well as error elements
  const handleReset = () => {
    setInputs({
      name: "",
      email: "",
      message: "",
      errors: "",
    });
  };

  return (
    <section>
      <Helmet>
        <title>Contact Us | Metakay Official</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-gray w-screen py-3 mb-10 text-center font-georgia font-medium uppercase text-white text-xl tracking-wider md:text-3xl">
        <h2>Contact - Metakay</h2>
      </div>

      <SuccessMessage
        message={"Thank you for contacting us!"}
        urlPath={"/contact"}
      />

      {/* General Information */}
      <div className="px-7 pt-5 flex flex-col gap-y-7 md:flex-row md:justify-evenly">
        <div className="flex flex-col gap-y-2">
          <h2 className="capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl">
            Come Find Us
          </h2>

          <p className="text-gray hidden md:block">
            If you are living nearby, come visit MetaKay <br /> at our
            comfortable office.
          </p>

          <p className="text-gray md:hidden">
            If you are living nearby, come visit MetaKay at our comfortable
            office.
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-y-2">
          <h2 className="capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl">
            Headquarters
          </h2>
          <p className="text-gray">
            <span className="font-semibold">Location:</span> 123 East Legon,
            Accra Ghana
          </p>
          <p className="text-gray">
            <span className="font-semibold">Telephone:</span> (+233)
            024-156-2037
          </p>
          <p className="text-gray">
            <span className="font-semibold">Email:</span> metakay@fashion.com
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-y-2">
          <h2 className="capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl">
            Our Socials
          </h2>

          <Social />
        </div>
      </div>

      <div className="hidden md:block border-b-2 w-4/5 mx-auto mt-10 mb-16"></div>

      {/* Contact section */}
      <div className="px-7 mb-16 grid grid-cols-1 gap-y-3 md:grid-cols-2 py-5 text-black">
        {/* General Information */}
        <div className="">
          <img
            src={contactUsImage}
            alt="contact us image"
            className="w-full object-cover"
          />
        </div>

        <div className="col-span-1">
          {/* Contact Form */}
          <Form
            className="flex flex-col gap-y-7"
            method="post"
            action="/contact"
          >
            <div className="space-y-2">
              <h2 className="capitalize font-georgia font-bold tracking-wider text-xl md:text-2xl md:text-center">
                Get In Touch
              </h2>
              <p>
                If you have any questions, just fill the contact form and we
                will answer you shortly.
              </p>
            </div>

            <div className="text-gray flex flex-col gap-y-3">
              <label>Name</label>
              <input
                defaultValue={inputs.name || ""}
                type="text"
                name="name"
                className="w-full outline-none rounded border-[1px] border-gray p-3 focus:border-2 shadow-md"
                placeholder="your name"
              />
              {inputs && inputs.errors && (
                <p className="text-red-500">
                  {inputs.errors && inputs.errors.name}
                </p>
              )}
            </div>

            <div className="text-gray flex flex-col gap-y-3">
              <label>Email</label>
              <input
                defaultValue={inputs.email || ""}
                type="email"
                name="email"
                className="w-full outline-none rounded border-[1px] border-gray p-3 focus:border-2 shadow-md"
                placeholder="your email"
              />
              {inputs && inputs.errors && (
                <p className="text-red-500">
                  {inputs.errors && inputs.errors.email}
                </p>
              )}
            </div>

            <div className="text-gray flex flex-col gap-y-3">
              <label>Message</label>
              <textarea
                defaultValue={inputs.message || ""}
                name="message"
                cols="30"
                rows="10"
                placeholder="leave a message"
                className="w-full outline-none rounded border-[1px] border-gray p-3 focus:border-2 shadow-md"
              ></textarea>
              {inputs && inputs.errors && (
                <p className="text-red-500">
                  {inputs.errors && inputs.errors.message}
                </p>
              )}
            </div>

            <button className="uppercase font-medium py-4 px-5 mx-auto text-center w-full bg-gray text-white hover:opacity-80 hover:bg-white hover:text-black hover:border-2 hover:border-gray rounded transition duration-500">
              Submit
            </button>

            {data && Object.keys(inputs).length > 0 && (
              <button
                type="reset"
                className="uppercase font-medium py-4 px-5 mx-auto text-center w-full bg-red-500 text-white hover:opacity-80 hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-500 rounded transition duration-500"
                onClick={handleReset}
              >
                Reset
              </button>
            )}
          </Form>
        </div>
      </div>

      {/* Map */}
      <div className="py-20 px-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127056.45417833977!2d-0.37297725677492505!3d5.638471860822191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9948fac30719%3A0x28150c4463c0d554!2sAchimota%20Mall!5e0!3m2!1sen!2sma!4v1676766681073!5m2!1sen!2sma"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  try {
    // regex pattern to validate email field
    const regexValue =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // getting data using the formdata
    const formData = await request.formData();
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      errors: {},
    };

    // validate user form data
    if (data.name.trim() == "") {
      data.errors.name = "Please provide your full name!";
    }

    if (data.email.trim() == "" || !data.email.match(regexValue)) {
      data.errors.email = "Please provide a valid email address!";
    }

    if (data.message.trim() == "" || data.message.trim().length < 20) {
      data.errors.message = "Message cannot be less than 20 characters!";
    }

    if (Object.keys(data.errors).length) {
      return data;
    }

    // send into database or api here
    const templateParams = {
      subject: "MetaKay | Contact Us",
      to_name: "MetaKay",
      message: `You got a new message from ${data.name}`,
      from_name: data.name,
      from_email: data.email,
      from_message: data.message,
      from_phone: "N/A",
      order_number: "N/A",
      total_price: "N/A",
    };

    const message = await sendEmail(templateParams);
    if (message.status !== 200) {
      throw new Error(message.message);
    }

    location.search = "success=true";
    return redirect("/contact", 200);
  } catch (err) {
    throw new Error("Oops! Something went wrong. Please try again");
  }
};
