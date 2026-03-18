import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 border-t border-[var(--color-border)] text-[var(--color-text)] font-outfit">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[var(--color-muted)]"
        >
          © {new Date().getFullYear()} Gaurav Chaturvedi. Explorer.
        </motion.p>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          
          {/* GitHub */}
          <a
            href="https://github.com/Gaurav2002-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors"
          >
            <FaGithub size={22} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/gaurav_chaturvedi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <SiLeetcode size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gaurav-chaturvedi-377506226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Gmail */}
          <a
            href="mailto:2002gaurav.chaturvedi@gmail.com"
            className="text-black hover:text-red-500 transition-colors"
          >
            <SiGmail size={22} />
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1_MqymGVJGQVjBGtCOk_gMyUx-rOMoOcp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 text-sm font-medium transition-colors"
          >
            View Resume
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;