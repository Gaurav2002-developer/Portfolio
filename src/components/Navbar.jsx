import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileDrawerOpen]);

  // Nav items
  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/60 bg-black/60">
      <div className="container mx-auto flex justify-center items-center relative px-4">
        
        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-12 font-semibold text-lg">
          {navItems.map((item, index) => (
            <li key={index} className="group relative">
              <a
                href={item.href}
                className="transition-all duration-300 hover:text-white hover:scale-110"
              >
                {item.label}
              </a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden absolute right-4">
          <button
            onClick={toggleNavbar}
            className="transition-transform duration-300 hover:rotate-90"
          >
            {mobileDrawerOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col justify-center items-center space-y-10 text-2xl font-semibold transition-all duration-500">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block transition-all duration-300 hover:text-white hover:scale-110"
              onClick={toggleNavbar}
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
