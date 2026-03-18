import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center mt-10 lg:mt-20 px-4 text-center text-[var(--color-text)]"
    >
      {/* Name Card */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-black mb-3"
      >
        Gaurav Chaturvedi
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg lg:text-xl font-medium text-[var(--color-muted)] mb-3"
      >
        Explorer • Developer • Innovator
      </motion.h2>

      {/* Short Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-xl text-sm sm:text-base text-[var(--color-muted)] leading-relaxed"
      >
        Python & AI developer crafting modern web apps and solving real-world problems.
      </motion.p>

      {/* CTA Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-sm text-[var(--color-muted)] mt-3"
      >
        Let’s build something extraordinary 💡
      </motion.p>
    </div>
  );
};

export default HeroSection;