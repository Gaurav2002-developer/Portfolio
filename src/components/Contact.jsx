import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="mt-6 py-16 border-t border-white/10 text-white font-[Outfit]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Get in Touch With Me
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-neutral-400 mb-10 max-w-2xl mx-auto"
        >
          We design interactive experiences for brands and startups. Tell us a
          bit about your project and we’ll reach out soon.
        </motion.p> */}

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-[#0a0a0a]/80 backdrop-blur p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
            >
              {/* Name + Email row on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="name"
                    className="block text-neutral-300 mb-2"
                  >
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #fff3" }}
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label
                    htmlFor="email"
                    className="block text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #fff3" }}
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label
                  htmlFor="phone"
                  className="block text-neutral-300 mb-2"
                >
                  Phone Number
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #fff3" }}
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="message"
                  className="block text-neutral-300 mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 10px #fff3" }}
                  id="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.08, rotate: -1 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
                className="w-full bg-gradient-to-r from-white to-neutral-300 text-black py-3 rounded-lg font-semibold transition shadow-md hover:shadow-xl"
              >
                 Send Message
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 120 },
              }}
              exit={{ opacity: 0 }}
              className="bg-white-600/90 p-10 rounded-2xl shadow-lg text-center relative overflow-hidden"
            >
              {/* Floating animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* <div className="absolute inset-x-0 top-0 flex justify-center text-5xl">
                  
                </div> */}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-2"
              >
                 Thank You for Contacting Us!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/90"
              >
                We will reach you soon 
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;


// 🚀  🎉  for the later use , if you want to add these imojis