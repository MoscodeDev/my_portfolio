import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence,motion } from "framer-motion";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef  = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setMenuOpen(false);
  };

  if (menuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
  };
}, [menuOpen]);


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-[9vh] flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          MosCode
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:bg-white rounded-sm px-3 py-2 transition">Home</Link>
          <Link to="/projects" className="hover:bg-white rounded-sm px-3 py-2 transition">Projects</Link>
          <Link to="/blogs" className="hover:bg-white rounded-sm px-3 py-2 transition">Blog</Link>
          <Link to="/about" className="hover:bg-white rounded-sm px-3 py-2 transition">About</Link>
          <Link to="/contact" className="hover:bg-white rounded-sm px-3 py-2 transition">Contact</Link>
          <a
            href="https://github.com/MoscodeDev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white p-2 rounded hover:bg-blue-200 hover:text-black transition"
          >
            <FiGithub />
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
      {menuOpen && (
        
          <motion.div 
          key="mobile-menu"
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-start space-y-3 px-6 py-4">
              <Link to="/"  className="w-full border-b-2 border-gray-50" onClick={toggleMenu}>Home</Link>
              <Link to="/projects" className="w-full border-b-2 border-gray-50" onClick={toggleMenu}>Projects</Link>
              <Link to="/blogs" className="w-full border-b-2 border-gray-50" onClick={toggleMenu}>Blog</Link>
              <Link to="/about" className="w-full border-b-2 border-gray-50" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="w-full border-b-2 border-gray-50" onClick={toggleMenu}>Contact</Link>
              <a
                href="https://github.com/MoscodeDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
                onClick={toggleMenu}
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>
        
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
