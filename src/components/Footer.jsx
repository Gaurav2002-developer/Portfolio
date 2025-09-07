import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";   // ✅ Gmail + LeetCode
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 border-t border-white/10 text-white font-outfit">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side - Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-neutral-400"
        >
          © {new Date().getFullYear()} Gaurav Chaturvedi. Explorer.
        </motion.p>

        {/* Right Side - Links */}
        <div className="flex items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Gaurav2002-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/gaurav_chaturvedi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <SiLeetcode size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gaurav-chaturvedi-377506226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Gmail */}
          <a
            href="mailto:2002gaurav.chaturvedi@gmail.com"
            className="hover:text-red-500 transition-colors"
            aria-label="Gmail"
          >
            <SiGmail size={22} />
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1_MqymGVJGQVjBGtCOk_gMyUx-rOMoOcp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-medium transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
