import emailjs from "@emailjs/browser";

const {
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_API_KEY,
} = import.meta.env;

export const sendEmail = async (templateParams) => {
  try {
    const emailResponse = await emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      VITE_EMAILJS_API_KEY
    );

    return emailResponse;
  } catch (error) {
    return new Error(error.message);
  }
};
