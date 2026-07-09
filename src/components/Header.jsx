// Header.jsx - Updated for Sagar Kakade
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { FaBlog } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiExam } from "react-icons/pi";

const Header = ({ loader }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isStudyMaterialPage = location.pathname === "/btech/cse/study-material";

  // Add scroll event listener to detect if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div
        className={`sticky w-full top-0 z-50 ${
          isScrolled
            ? "bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-3xl border-b border-gray-200 dark:border-gray-700"
            : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Home Link */}
            <div className="flex items-center">
              {loader ? (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="w-24 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <FaHome className="text-2xl text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Sagar
                  </h2>
                </motion.div>
              )}
            </div>

            {/* Navigation Links and Theme Toggle */}
            {loader ? (
              <div className="flex items-center justify-center gap-4 md:gap-8">
                <div className="w-20 h-9 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="w-24 h-9 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <div className="relative bg-gray-200 w-full text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-colors duration-300">
                  {/* Red Dot */}
                  <div className="absolute top-0 right-0 w-2 h-2 animate-pulse bg-red-500 rounded-full" />
                  {/* Button */}
                  <Link to="/btech/cse/study-material" className="">
                    <PiExam size={20} />
                  </Link>
                </div>
                <Link
                  to="/blog"
                  className="bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-colors duration-300"
                >
                  <FaBlog size={20} />
                </Link>
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
