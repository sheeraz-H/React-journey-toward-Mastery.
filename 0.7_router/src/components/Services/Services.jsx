import React, { useState, useEffect, memo } from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaRocket, FaUsers, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

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

const services = [
  { id: 1, icon: FaCode, title: 'Web Development', desc: 'Custom websites built with modern technologies for optimal performance and user experience.' },
  { id: 2, icon: FaMobileAlt, title: 'Mobile App Development', desc: 'Native and cross-platform apps designed to engage users on any device.' },
  { id: 3, icon: FaCloud, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services to enhance your business operations.' },
  { id: 4, icon: FaShieldAlt, title: 'Cybersecurity', desc: 'Comprehensive security audits and solutions to protect your digital assets.' },
  { id: 5, icon: FaRocket, title: 'SEO Optimization', desc: 'Boost your online visibility with expert search engine optimization strategies.' },
  { id: 6, icon: FaUsers, title: 'Consulting', desc: 'Strategic advice and planning to drive innovation and growth in your projects.' },
];

const processes = [
  { step: 1, title: 'Discovery', desc: 'We analyze your needs and goals to create a tailored plan.' },
  { step: 2, title: 'Design', desc: 'Crafting intuitive designs that align with your brand and vision.' },
  { step: 3, title: 'Development', desc: 'Building robust solutions using cutting-edge technologies.' },
  { step: 4, title: 'Launch', desc: 'Deploying your project with ongoing support for success.' },
];

const Services = memo(() => {
  const [isDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-10">Empowering your business with innovative digital solutions.</p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <service.icon className="text-6xl text-orange-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.desc}</p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center mx-auto">
                  Learn More
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process) => (
              <div
                key={process.step}
                className="text-center"
              >
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">We deliver results with expertise, innovation, and dedication.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-5xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">Rigorous testing ensures flawless performance.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRocket className="text-5xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">Timely project completion without compromising quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Skilled professionals dedicated to your success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10">Let's discuss your project and bring your ideas to life.</p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
});

export default Services;
