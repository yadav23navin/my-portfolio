import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [lastSent, setLastSent] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const sendEmail = (e) => {

    e.preventDefault();
    const now = Date.now();

    if (now - lastSent < 10000) {
      alert("Please wait 10 seconds before sending another message.");
      return;
    }

    if (isSending) return;
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message =
      form.current.elements["message"].value.trim();

    const nameRegex =/^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/;
    const emailRegex =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const messageRegex =/^(?=(?:.*\b\w+\b){3,}).{15,}$/;

    if (!nameRegex.test(name)) {
      alert("Enter your full name.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }
    if (!messageRegex.test(message)) {
      alert("Please enter a meaningful message.");
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        "service_go4oyr8",
        "template_o47jzlb",
        form.current,
        "RinaHRSa3LM6z1EsA"
      )

      .then(() => {
        setLastSent(Date.now());
        setShowSuccess(true);
        form.current.reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })

      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      })

      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Open to jobs, collaborations and exciting projects.
        Feel free to reach out! I'd love to connect.
      </p>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="success-message"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: -30,
            }}

            transition={{
              duration: 0.6,
            }}

          >
            <motion.div
              className="success-check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 250,
              }}
            >

            </motion.div>
            <h3>Message Sent Successfully</h3>
            <p>
              Thank you for reaching out.<br />
              I'll get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          pattern="^[A-Za-z ]+$"
          title="Name should contain only letters"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          minLength="15"
          required
        ></textarea>

        <button
          type="submit"
          disabled={isSending}
        >

          {isSending
            ? "Sending..."
            : "Send Message"}
        </button>
      </form>
    </section>
  );
}
export default Contact;