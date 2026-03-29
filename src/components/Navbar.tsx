import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms Of Use", href: "/terms" },
    { name: "Download", href: "/#download" },
    { name: "About", href: "/about" },
  ];

  const isHome = location.pathname === "/";

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#") && isHome) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <Link to="/" className="text-xl font-bold text-teal-400 tracking-tight">
        Airtime Scanner
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
        {navLinks.map((link) => (
          link.href.startsWith("/#") && isHome ? (
            <button 
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="px-4 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </button>
          ) : (
            <Link 
              key={link.name}
              to={link.href} 
              className="px-4 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </Link>
          )
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-6 md:hidden flex flex-col space-y-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              link.href.startsWith("/#") && isHome ? (
                <button 
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-lg font-medium text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="btn3d w-full text-center"
            >
              Download APK
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
