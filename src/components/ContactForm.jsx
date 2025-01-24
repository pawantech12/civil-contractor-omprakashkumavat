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
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            required
          />
          <button type="submit" disabled={loading} className="contact-button">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
