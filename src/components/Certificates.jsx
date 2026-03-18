import { motion } from "framer-motion";

const certificatesData = [
  
  "ExcelR Institute: Data Science Program",
  "Infosys Springboard: Basics of Python",
  "IIT Bombay: Python 3.4.3 Training",
  "Turbotic Online Hackathon: Certificate of Participation",
  "Great Learning: Front-End Development (HTML/CSS)",
  "Simplilearn: Introduction to NumPy",
  "Skill Course: Power BI Micro Course",
  "Cisco Networking Academy: Ideathon Certificate",
  "HP Life: Data Science and Analytics",
  "Udemy: Learn PHP and MySQL for Web Application Development",
  "Microsoft Sprint to Imagine Cup: AI Innovation Day"

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
  className="mt-6 py-16 border-t border-[var(--color-border)] text-[var(--color-text)] font-outfit"
>
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Section Title (matched with Projects) */}
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-12 text-[var(--color-text)]"
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
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
          }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-md p-4 text-sm text-[var(--color-text)] transition-all duration-300"
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
