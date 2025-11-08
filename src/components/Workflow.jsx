import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useState } from "react";

const projects = [

  {
  name: "Stock-Price-Prediction",
  link: "https://github.com/Gaurav2002-developer/Apple-Stock-Price-Prediction",
  tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  idea: "The primary objective of this project is to develop a predictive model that forecasts Apple stock prices for the next 30 days using historical stock data from 2012 to 2019. The model assists investors, traders, and analysts in making informed decisions based on market trends.",
},
{
  name: "Amazon-Web-Scraping-Selenium",
  link: "https://github.com/Gaurav2002-developer/Amazon-Web-Scraping-Selenium-",
  tech: ["Python", "BeautifulSoup", "Selenium", "CSV"],
  idea: "A Python-based web scraping project that extracts speaker details such as title, price, and product links from Amazon using BeautifulSoup and Selenium, and stores the data in CSV format for further analysis.",
},
{
  name: "Zomato-Dataset-EDA",
  link: "https://github.com/Gaurav2002-developer/Zomato-Dataset-EDA",
  tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  idea: "Performed Exploratory Data Analysis (EDA) on the Zomato dataset using Python libraries like NumPy, Pandas, Matplotlib, and Seaborn to visualize and understand customer behavior and restaurant trends.",
},
{
  name: "Object-Detection",
  link: "https://github.com/Gaurav2002-developer/Object-Detection",
  tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
  idea: "An object detection project using the YOLOv8 model to identify and locate multiple objects within images and videos with high accuracy and efficiency.",
},
,

  {
  name: "Freelix",
  link: "https://github.com/Gaurav2002-developer/Freelix",
  tech: ["Supabase", "Python", "Django", "SQL", "Postgres", "React", "CSS"],
  idea: "A free movies website built using Supabase, Python, Django, SQL, Postgres, and React with a clean UI and smooth functionality.",
  },
  {
    name: "Search Engine (GetLP)",
    link: "https://github.com/Gaurav2002-developer/GetLP",
    tech: ["Python", "Flask", "RapidFuzz", "LLMs"],
    idea: "A search engine built to assist students in preparing for placements. Uses AI concepts like RapidFuzz and LLMs to provide smarter, context-aware results.",
  },
  {
  name: "Rootline.Visuals",
  link: "https://github.com/Gaurav2002-developer/Rootline.Visuals",
  tech: ["React", "TailwindCSS", "Framer Motion", "Vercel"],
  idea: "A modern and responsive website built for a design company, featuring smooth animations, clean UI, and deployed on Vercel for fast performance.",
},

  {
    name: "Plagiarism Checker (NLP)",
    link: "https://github.com/Gaurav2002-developer/Plagiarism-Checker",
    tech: ["Python", "NLTK", "Scikit-learn", "Pandas"],
    idea: "Detects plagiarism in text documents using NLP techniques and machine learning models. Helps ensure originality in academic and professional writing.",
  },
  {
    name: "Language Detection & Translation Tool",
    link: "https://github.com/Gaurav2002-developer/Language-Detection-and-Translation-Tool",
    tech: ["Python", "Flask", "NLTK", "Google Translator API"],
    idea: "Automatically detects input language and translates it into the desired target language. Useful for multilingual communication and learning.",
  },
  {
    name: "Diabetes Prediction",
    link: "https://github.com/Gaurav2002-developer/Diabetes-Prediction",
    tech: ["Python", "Flask", "Pickle", "Machine Learning"],
    idea: "A prediction system that uses patient health data and ML algorithms to determine the likelihood of diabetes, supporting early healthcare decisions.",
  },
  // {
  //   name: "Connect - Social Media App",
  //   link: "https://github.com/Gaurav2002-developer/Social_handler",
  //   tech: ["React", "JavaScript", "HTML", "CSS"],
  //   idea: "A social media application where users can connect globally, share posts, and interact. Focused on building community engagement.",
  // },
  {
  name: "Python Sorting Visualizer",
  link: "https://github.com/Gaurav2002-developer/Python-Sorting-Visualizer",
  tech: ["Python", "Pygame"],
  idea: "An interactive sorting visualizer built using Python and Pygame, demonstrating algorithms like Insertion Sort and Bubble Sort through engaging visual animations.",
},
 {
    name: "Connect - Social Media App",
    link: "https://github.com/Gaurav2002-developer/Social_handler",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    idea: "A social media application where users can connect globally, share posts, and interact. Focused on building community engagement.",
  },
{
  name: "Shopkart",
  link: "https://github.com/Gaurav2002-developer/Shopkart",
  tech: ["HTML", "CSS", "JavaScript"],
  idea: "A simple e-commerce website built with core web technologies, showcasing product listings, shopping cart functionality, and a clean user interface.",
},


];

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  // Show only 5 projects initially
  const visibleProjects = showMore ? projects : projects.slice(0, 5);

  return (
    <div
      id="projects"
      className="flex flex-col items-center mt-16 lg:mt-24 px-6 text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-2xl p-6 border border-neutral-700 shadow-md shadow-black hover:shadow-lg hover:shadow-white/20 transition flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-400 mb-3">
              <span className="font-semibold text-neutral-300">Tech:</span>{" "}
              {project.tech.join(", ")}
            </p>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              {project.idea}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-medium shadow-md hover:bg-neutral-200 transition self-center mt-auto"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {projects.length > 5 && (
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="mt-8 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-black transition"
          whileHover={{ scale: 1.05 }}
        >
          {showMore ? "Show Less" : "Show More"}
        </motion.button>
      )}
    </div>
  );
};

export default ProjectsSection;
