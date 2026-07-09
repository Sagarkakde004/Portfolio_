// ProjectDetails.jsx - Updated for Sagar (No Live Project Button)
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../components/Footer";
import projectsData from "../data/ProjectsData";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  const jsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": "Project",
        name: project.title,
        description: project.description,
        image: project.image,
        url: `https://sagar-kakade.vercel.app/project/details/${projectId}`,
        additionalType: "https://schema.org/CreativeWork",
        sameAs: [project.gitHubLink],
        creator: {
          "@type": "Person",
          name: "Sagar Kakade",
        },
        datePublished: project.year,
        applicationCategory: "WebApplication",
        softwareVersion: "1.0",
        license: "https://opensource.org/licenses/MIT",
      }
    : {};

  return (
    <>
      <Helmet>
        <title>
          {project ? `${project.title} - Project Details` : "Project Details"}
        </title>
        <link
          rel="canonical"
          href={`https://sagar-kakade.vercel.app/project/details/${projectId}`}
        />
        <meta
          name="description"
          content={
            project ? project.description : "Details of the selected project."
          }
        />
        <meta
          property="og:title"
          content={
            project ? `${project.title} - Project Details` : "Project Details"
          }
        />
        <meta
          property="og:description"
          content={
            project ? project.description : "Details of the selected project."
          }
        />
        <meta
          property="og:image"
          content={
            project
              ? project.image
              : "https://sagar-kakade.vercel.app/android-chrome-512x512.png"
          }
        />
        <meta
          property="og:url"
          content={`https://sagar-kakade.vercel.app/project/details/${projectId}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={
            project ? `${project.title} - Project Details` : "Project Details"
          }
        />
        <meta
          property="twitter:description"
          content={
            project ? project.description : "Details of the selected project."
          }
        />
        <meta
          property="twitter:image"
          content={
            project
              ? project.image
              : "https://sagar-kakade.vercel.app/android-chrome-512x512.png"
          }
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative isolate min-h-screen flex flex-col items-center justify-center">
        {/* Top Blur Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-60  md:-top-80 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="container px-4 mx-auto flex flex-col items-center justify-start my-10">
          {project ? (
            <motion.div
              className="shadow-lg rounded-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-2xl md:text-4xl text-center font-bold mb-4 text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {project.title}
              </motion.h1>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg mb-4 max-w-3xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.description}
              </motion.p>
              <div className="w-full mb-4">
                <motion.h2
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Technologies
                </motion.h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {project.technologies.map((tech, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="w-full mb-4">
                <motion.h2
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Features
                </motion.h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="w-full mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Year:</strong> {project.year}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Role:</strong> {project.role}
                </p>
              </div>
              <div className="w-full mb-4">
                <motion.h2
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Highlights
                </motion.h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {project.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <motion.button
                  className="text-xs md:text-md py-4 my-10 px-6 border-4 border-blue-500 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => window.open(`${project.gitHubLink}`, "_blank")}
                >
                  View Code on GitHub
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-lg text-gray-800 dark:text-gray-200">
              No Project Found
            </div>
          )}
        </div>
        {/* Bottom Blur Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-800 via-yellow-500 to-yellow-300 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
