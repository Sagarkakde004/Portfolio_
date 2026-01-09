// Projects.jsx - Updated for Sagar (No Live Links)
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/ProjectsData";

const Projects = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="container px-2 mx-auto flex flex-col items-center justify-start mb-10 md:mb-20"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-4">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-opacity-50 border rounded-2xl md:rounded-3xl shadow-lg p-6 flex flex-col justify-between items-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <button
              onClick={() => navigate(`/project/details/${project.id}`)}
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:underline cursor-pointer font-medium"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
