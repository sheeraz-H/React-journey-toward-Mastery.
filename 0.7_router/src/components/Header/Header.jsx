import React, { useState, useEffect, memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBox, FaServicestack, FaInfo, FaPhone, FaGithub, FaSearch, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

// Custom hook for dark mode (persists in localStorage)
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark];
};

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state; replace with real auth
  const [isDark, setIsDark] = useDarkMode();

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Menu animation variants
  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <header className={`shadow-lg sticky z-50 top-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-all duration-300`}>
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Home">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12 transition-transform duration-200 group-hover:scale-105"
              alt="Logo"
              onError={(e) => (e.target.src = '/fallback-logo.png')} // Fallback image
            />
          </Link>

          {/* Right-side Actions */}
          <div className="flex items-center lg:order-2 space-x-2">
            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm p-2 focus:outline-none transition-colors"
              aria-label="Toggle search"
            >
              <FaSearch />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm p-2 focus:outline-none transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)} // Mock logout
                className="text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get started
                </Link>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:order-1">
            <ul className="flex space-x-8">
              {[
                { to: '/', label: 'Home', icon: FaHome },
                { to: '/products', label: 'Products', icon: FaBox },
                { to: '/services', label: 'Services', icon: FaServicestack },
                { to: '/about', label: 'About', icon: FaInfo },
                { to: '/contact', label: 'Contact Us', icon: FaPhone },
                { to: '/github', label: 'Github', icon: FaGithub },
              ].map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center py-2 pr-4 pl-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 lg:p-0 ${
                        isActive
                          ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                          : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                    aria-label={label}
                  >
                    <Icon className="mr-2" />
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Collapsible Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full lg:w-auto lg:order-3 mt-4 lg:mt-0"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full lg:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors"
                  aria-label="Search input"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
            >
              <ul className="flex flex-col p-4 space-y-4">
                {[
                  { to: '/', label: 'Home', icon: FaHome },
                  { to: '/products', label: 'Products', icon: FaBox },
                  { to: '/services', label: 'Services', icon: FaServicestack },
                  { to: '/about', label: 'About', icon: FaInfo },
                  { to: '/contact', label: 'Contact Us', icon: FaPhone },
                  { to: '/github', label: 'Github', icon: FaGithub },
                ].map(({ to, label, icon: Icon }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center py-2 pr-4 pl-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          isActive
                            ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                            : 'text-gray-700 dark:text-gray-300'
                        }`
                      }
                      aria-label={label}
                    >
                      <Icon className="mr-2" />
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
});

export default Header;