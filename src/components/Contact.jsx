import { useState, useRef } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_twp2vgv", 
        "template_vsphv2l",
        form.current,
        { publicKey: "XWsVf16ClOSpG_Zkm" }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
  id="contact"
  className="mt-6 py-16 border-t border-[var(--color-border)] text-[var(--color-text)] font-[Outfit]"
>
  <div className="max-w-4xl mx-auto px-6">
    
    {/* Heading (match Projects size) */}
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-[var(--color-text)]"
    >
      Get in Touch With Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="text-center text-[var(--color-muted)] mb-10 max-w-2xl mx-auto"
    >
      Or share your brilliant ideas from your extraordinary mind with me.
    </motion.p>

    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form
          key="form"
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-[var(--color-surface)] p-6 sm:p-8 rounded-2xl shadow-md space-y-6 border border-[var(--color-border)]"
        >
          
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-[var(--color-text)] mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-[var(--color-text)] mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="user_email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white text-black border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </motion.div>

          </div>

          {/* Phone */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-[var(--color-text)] mb-2">
              Phone Number
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-lg bg-white text-black border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </motion.div>

          {/* Message */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <label className="block text-[var(--color-text)] mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              rows="4"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-white text-black border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold transition hover:bg-gray-800 shadow-sm"
          >
            Send Message
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          key="thankyou"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[var(--color-surface)] p-10 rounded-2xl shadow-md text-center border border-[var(--color-border)]"
        >
          <h3 className="text-2xl font-bold mb-2 text-[var(--color-text)]">
            I will reach you soon!
          </h3>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</section>
  );
};

export default ContactForm;