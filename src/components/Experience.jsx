import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Engineer",
    company: "Tackit Analytics",
    time: "May 2025 – Aug 2025",
    points: [
      "Contributing to the backend pipeline of a Bowlers' Academy project aimed at tracking and analyzing cricket deliveries using sensor and video data.",
      "Gained hands-on experience with AWS services (EC2, S3, SageMaker) for scalable data handling and machine learning integration.",
      "Learned and applied Git & GitHub for version control, improving team workflow efficiency by 30%.",
    ],
  },
  {
    role: "Python Developer",
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
    role: "Web Developer",
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
      className="mt-12 py-16 border-t border-white/10 text-white font-outfit"
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
          Professional Experience
        </motion.h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.4)" }}
              className="bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col text-left transition-all duration-300 relative"
            >
              {/* Role & Company */}
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">
                  {exp.role}{" "}
                  <span className="text-neutral-400">| {exp.company}</span>
                </h3>
              </div>

              {/* Experience Points */}
              <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm leading-relaxed mb-12">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Time at Bottom Center */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full shadow-md"
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
