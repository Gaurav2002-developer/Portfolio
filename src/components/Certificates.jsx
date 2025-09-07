import { motion } from "framer-motion";

const certificatesData = [
  "Infosys Springboard: Basics of Python",
  "IIT Bombay: Python 3.4.3 Training",
  "Great Learning: Front End Development (HTML/CSS)",
  "Simplilearn: Introduction to NumPy",
  "Skill Course: Power BI Micro Course",
  "Cisco Networking Academy Certificates (Ideathon)",
  "HP Life: Data Science & Analytics",
  "Udemy: Learn PHP and MySQL for Web Application/Development",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="mt-6 py-16 border-t border-white/10 text-white font-outfit"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold tracking-wide mb-12"
        >
          Certificates
        </motion.h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#0a0a0a] border border-white/20 rounded-xl shadow-lg p-4 text-sm text-neutral-300 transition-all duration-300"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
