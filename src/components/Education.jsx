import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B. Tech (CSE)",
    institution: "Amity University",
    cgpa: "7.2/10",
    activities: ["Core Head – Odyssey", "Decoration Committee", "Football", "Cricket", "Event Participation"],
    duration: "08/2021-06/2025",
    location: "Jaipur, India",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "GIIS",
    percentage: "76.6%",
    duration: "05/2020 – 04/2021",
    location: "Jodhpur, India",
  },
  {
    degree: "Secondary (10th)",
    institution: "GIIS",
    percentage: "76.8%",
    duration: "04/2019 – 03/2020",
    location: "Jodhpur, India",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Education = () => {
  return (
    <section
  id="education"
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
      Education
    </motion.h2>

    {/* Timeline */}
    <div className="flex flex-col space-y-8">
      {educationData.map((edu, i) => (
        <motion.div
          key={edu.degree}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
          }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md p-6 md:flex md:justify-between md:items-center transition-all duration-300"
        >
          
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              {edu.degree}
            </h3>

            <p className="text-[var(--color-muted)] mt-1">
              {edu.institution}
            </p>

            {edu.cgpa && (
              <p className="text-[var(--color-text)] mt-1">
                CGPA: {edu.cgpa}
              </p>
            )}

            {edu.percentage && (
              <p className="text-[var(--color-text)] mt-1">
                Percentage: {edu.percentage}
              </p>
            )}

            {edu.activities && (
              <ul className="list-disc list-inside mt-2 text-[var(--color-muted)] text-sm space-y-1">
                {edu.activities.map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Side */}
          <div className="mt-4 md:mt-0 text-right text-[var(--color-muted)] text-sm">
            <p>{edu.duration}</p>
            <p>{edu.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Education;
