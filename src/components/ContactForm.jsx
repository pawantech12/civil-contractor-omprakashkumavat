import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const [loading, isLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    isLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          // Optionally, reset the form or show a success message
          form.current.reset();
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          // Optionally, show an error message
          toast.error("Failed to send email. Please try again.");
        }
      )
      .finally(() => {
        isLoading(false); // Reset loading state after email is sent or error occurs
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center px-5">
        <h2 className="text-3xl font-semibold text-neutral-800 mb-8">
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 border rounded-lg h-32"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition duration-300 cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
