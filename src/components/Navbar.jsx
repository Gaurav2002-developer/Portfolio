import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileDrawerOpen]);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-[var(--color-border)] bg-[var(--color-surface)]/90">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        
        {/* Logo / Name */}
        <h1 className="text-lg font-bold text-black">
          🚀✨
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-10 font-medium text-[var(--color-muted)]">
          {navItems.map((item, index) => (
            <li key={index} className="group relative">
              <a
                href={item.href}
                className="transition-all duration-300 hover:text-black"
              >
                {item.label}
              </a>

              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-black">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center space-y-8 text-xl font-semibold text-black">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={toggleNavbar}
              className="hover:text-gray-600 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;