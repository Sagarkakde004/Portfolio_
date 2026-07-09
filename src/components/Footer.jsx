import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-3xl border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-black dark:text-white">
            Sagar Kakade
          </h2>
          <p className="text-xs text-black dark:text-white">
            © {new Date().getFullYear()} Sagar Kakade. All rights reserved.
          </p>
        </div>

        <div className="text-xs text-center md:text-right">
          <a
            href="mailto:sagarkakade033@gmail.com"
            className="block md:inline-block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-2 md:mb-0 md:mr-4 transition-colors duration-300"
          >
            sagarkakade033@gmail.com
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a
            href="tel:+918767518026"
            className="block md:inline-block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 md:ml-4 transition-colors duration-300"
          >
            +91 8767518026
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-4 px-4">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Self-Taught Full Stack Developer | Nagpur, Maharashtra, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
