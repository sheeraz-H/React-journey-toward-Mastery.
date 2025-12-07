import React, { useState, useEffect, memo } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

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

const Contact = memo(() => {
  const [isDark] = useDarkMode();
  const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    setFormData({ name: '', email: '', tel: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-10">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Fill in the form to start a conversation. We're here to help!</p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-orange-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">Acme Inc, Street, State, Postal Code</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-2xl text-orange-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+44 1234567890</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-orange-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@acme.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className="w-full py-3 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full py-3 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium mb-2">Telephone Number</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full py-3 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full py-3 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center font-semibold"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
              {isSubmitted && (
                <div className="flex items-center text-green-600 mt-4">
                  <FaCheckCircle className="mr-2" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How quickly do you respond?</h3>
              <p className="text-gray-600 dark:text-gray-300">We aim to respond within 24 hours.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do you offer custom solutions?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes, we tailor solutions to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10">Let's build something amazing together.</p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
});

export default Contact;
