import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
  role: "Junior Data Engineer",
  company: "Merck",
  time: "Jan 2026 – Present",
  points: [
    "Building and maintaining scalable data pipelines using Python and SQL for efficient data processing and transformation.",
    "Utilizing Palantir Foundry to design and manage ETL workflows for structured and unstructured data.",
    "Collaborating with cross-functional teams to ensure data reliability, consistency, and availability across systems.",
  ],
},
  {
  role: "Data Scientist Intern",
  company: "Ai Variant",
  time: "Sept 2025 – Dec 2025",
  points: [
    "Developed a machine learning model to analyze historical stock market data and predict price trends using Python.",
    "Performed data preprocessing, feature engineering, and exploratory data analysis (EDA) to improve model accuracy.",
    "Evaluated model performance using various metrics and optimized results through iterative experimentation.",
  ],
},
  {
    role: "Data Engineer Intern",
    company: "Tackit Analytics",
    time: "May 2025 – Aug 2025",
    points: [
      "Contributing to the backend pipeline of a Bowlers' Academy project aimed at tracking and analyzing cricket deliveries using sensor and video data.",
      "Gained hands-on experience with AWS services (EC2, S3, SageMaker) for scalable data handling and machine learning integration.",
      "Learned and applied Git & GitHub for version control, improving team workflow efficiency by 30%.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Octanet Services",
    time: "Sep 2024 – Oct 2024",
    points: [
      "Developed 5+ projects using NumPy and Pandas, improving data processing by 20%.",
      "Applied Python for automating tasks, enhancing workflow efficiency.",
      "Developed 7+ mini-projects, including games and an ATM simulator, focusing on logic and structure.",
      "Built interactive web apps using Flask, gaining hands-on backend development experience.",
      "Utilized Pandas for data extraction and analysis, delivering actionable insights.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "CodSoft",
    time: "Mar 2024 – May 2024",
    points: [
      "Deployed 5+ websites using HTML, CSS, and JavaScript, ensuring responsive, user-centric designs.",
      "Boosted user engagement by 25% through intuitive layouts.",
      "Implemented basic login/logout functionality and real-time features for web apps.",
      "Integrated external APIs to expand functionality across platforms.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Experience = () => {
  return (
    <section
  id="experience"
  className="mt-12 py-16 border-t border-[var(--color-border)] text-[var(--color-text)] font-outfit"
>
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Section Title */}
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-12 text-[var(--color-text)]"
    >
      Professional Experience
    </motion.h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
          }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md p-8 flex flex-col text-left transition-all duration-300 relative"
        >
          
          {/* Role */}
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-black" />
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              {exp.role}{" "}
              <span className="text-[var(--color-muted)]">
                | {exp.company}
              </span>
            </h3>
          </div>

          {/* Points */}
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] text-sm leading-relaxed mb-12">
            {exp.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          {/* Time */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-medium text-black bg-gray-200 px-3 py-1 rounded-full shadow-sm"
          >
            {exp.time}
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Experience;
