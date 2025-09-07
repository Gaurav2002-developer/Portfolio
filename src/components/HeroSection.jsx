import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center mt-10 lg:mt-20 px-4 text-center"
    >
      {/* Name & Tagline */}
      <motion.div
        className="max-w-2xl px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Gaurav Chaturvedi
        </h1>

        <br></br>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-neutral-300 mb-4">
          Explorer • Developer • Innovator
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed">
          Passionate and motivated developer skilled in Python, AI, and modern web technologies. A fast learner with strong problem-solving skills, adapting quickly to new tools and frameworks. Confident, collaborative, and driven to craft impactful digital experiences.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-400 mt-3 leading-relaxed">
          Let’s build something extraordinary together...🚀
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
