import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaRocket, FaShieldAlt, FaUsers, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const heroImages = [
  'https://i.ibb.co/5BCcDYB/Remote2.png',
  'https://i.ibb.co/2M7rtLk/Remote1.png',
];
const features = [
  { icon: FaRocket, title: 'Fast & Reliable', desc: 'Lightning-fast performance with zero downtime.' },
  { icon: FaShieldAlt, title: 'Secure', desc: 'Top-notch security to protect your data.' },
  { icon: FaUsers, title: 'Community Driven', desc: 'Built by and for the community.' },
];
const testimonials = [
  { name: 'John Doe', review: 'Amazing tool! Changed my workflow.', rating: 5 },
  { name: 'Jane Smith', review: 'Highly recommend for professionals.', rating: 5 },
];

const Home = memo(() => {
  const [isDark] = useDarkMode();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:mx-16 mx-2 sm:py-16 py-8">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl text-orange-600 dark:text-orange-400">Lorem Ipsum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experience the future of productivity with our cutting-edge app.
            </p>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              to="/download"
              aria-label="Download the app"
            >
              <FaDownload className="mr-2" />
              Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex items-center justify-center">
          <img
            src={heroImages[currentImage]}
            alt={`Hero image ${currentImage + 1}`}
            className="w-96 object-cover rounded-lg shadow-2xl transition-opacity duration-500"
            onError={(e) => (e.target.src = '/images/fallback.jpg')}
          />
          <button
            onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-48 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="Centered image"
          onError={(e) => (e.target.src = '/images/fallback.jpg')}
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>

      <section id="features" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
              >
                <feature.icon className="text-4xl text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.review}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of satisfied users today.</p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 font-medium bg-white text-orange-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Sign up now"
          >
            <FaRocket className="mr-2" />
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
});

export default Home;
