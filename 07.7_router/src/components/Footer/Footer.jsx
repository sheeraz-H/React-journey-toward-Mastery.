import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform,  AnimatePresence } from 'framer-motion';
import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble, FaArrowUp, FaEnvelope } from 'react-icons/fa';

// Custom hook for dark mode (shared with Header)
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

const Footer = memo(() => {
  const [isDark] = useDarkMode();
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -20]); // Subtle parallax effect

  // Show back-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Newsletter submit handler (mock; integrate with real service)
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`); // Replace with API call
      setEmail('');
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden`}
      style={{ y }} // Parallax effect
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <Link to="/" className="flex items-center group" aria-label="Home">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16 transition-transform duration-200 group-hover:scale-105"
                alt="Logo"
                onError={(e) => (e.target.src = '/fallback-logo.png')} // Fallback image
              />
            </Link>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"
          >
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                  to='/products'
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our GitHub"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <Link
                  to='/services'
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our GitHub"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/github"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                    aria-label="Join our Discord"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                    aria-label="Read our Privacy Policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                    aria-label="Read our Terms & Conditions"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 md:mt-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Stay Updated
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors"
              required
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium rounded-lg focus:ring-4 focus:ring-orange-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              aria-label="Subscribe to newsletter"
            >
              <FaEnvelope className="mr-2" />
              Subscribe
            </button>
          </form>
        </motion.div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
          >
            © {new Date().getFullYear()}{' '}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors hover:underline"
              aria-label="Visit Hitesh Choudhary's website"
            >
              Ract-Router
            </a>
            . All Rights Reserved.
          </motion.span>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"
          >
            {[
              { href: '#', icon: FaFacebook, label: 'Facebook page' },
              { href: '/discord', icon: FaDiscord, label: 'Discord community' },
              { href: '#', icon: FaTwitter, label: 'Twitter page' },
              { href: 'https://github.com/sheeraz-H', icon: FaGithub, label: 'GitHub account' },
              { href: '#', icon: FaDribbble, label: 'Dribbble account' },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                to={href}
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 hover:scale-110"
                aria-label={label}
                title={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-3 rounded-full shadow-lg focus:ring-4 focus:ring-orange-300 transition-all duration-200"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
});

export default Footer;
