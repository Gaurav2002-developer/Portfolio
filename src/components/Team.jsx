import { motion } from "framer-motion";

// Skill categories
const skillsData = [
 {
  category: "Programming Languages",
  skills: ["Python", "R", "JavaScript", "PHP"],
},
{
  category: "Data Engineering & Big Data",
  skills: ["PySpark", "Polars", "ETL Pipelines", "Data Processing"],
},
{
  category: "Cloud & Platforms",
  skills: ["AWS (EC2, S3, SageMaker)", "Palantir Foundry", "Supabase"],
},
{
  category: "Data Science & ML",
  skills: [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "Statistics",
    "OpenCV",
    "Joblib",
    "Pickle"
  ],
},
{
  category: "Frontend Technologies",
  skills: ["HTML", "React", "Tailwind CSS", "Framer Motion", "Bootstrap"],
},
{
  category: "Backend & Frameworks",
  skills: ["Django", "Flask", "Streamlit"],
},
{
  category: "Databases",
  skills: ["SQL", "PostgreSQL", "NoSQL"],
},
{
  category: "Deployment & Version Control",
  skills: ["Git", "GitHub", "Vercel"],
},
{
  category: "Data Visualization & BI",
  skills: ["Power BI", "Tableau" ,"Excel"],
},
{
  category: "Productivity Tools",
  skills: ["MS Word", "PowerPoint", "Canva"],
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
  className="mt-6 py-16 border-t border-[var(--color-border)] text-[var(--color-text)] font-outfit"
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
          whileHover={{
            y: -4,
            scale: 1.02,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
          }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md p-6 flex flex-col text-left transition-all duration-300"
        >
          {/* Category */}
          <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
            {item.category}
          </h3>

          {/* Skills */}
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
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
