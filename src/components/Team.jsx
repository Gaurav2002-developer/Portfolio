import { motion } from "framer-motion";

// Skill categories
const skillsData = [
  {
  category: "Programming Languages",
  skills: ["Python", "R" , "JavaScript", "PHP"],
},
{
  category: "Data Science & ML",
  skills: [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "Statistics",
    "Joblib",
    "Pickle",
    "OpenCV"
  ],
},
{
  category: "Frontend Technologies",
  skills: ["HTML", "React", "Tailwind CSS", "Framer Motion","Bootstrap"],
},
{
  category: "Backend & Frameworks",
  skills: ["Django", "Flask", "Streamlit", "Supabase"],
},
{
  category: "Databases",
  skills: ["SQL", "PostgreSQL", "NoSQL"],
},
{
  category: "Deployment & Version Control",
  skills: ["Vercel", "Git", "GitHub"],
},
{
  category: "Productivity Tools",
  skills: ["MS Word", "PowerPoint", "Excel", "Canva", "PowerBI"],
},
{
  category: "Soft Skills",
  skills: ["Communication", "Leadership", "Teamwork", "Problem Solving"],
},

];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
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
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((item, i) => (
            <motion.div
              key={item.category}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col text-left transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.category}</h3>
              <p className="text-neutral-300 text-sm">
                {item.skills.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
