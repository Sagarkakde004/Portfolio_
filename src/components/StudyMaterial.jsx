import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLock } from "react-icons/fa6";


const StudyMaterial = () => {
  const semesters = [
    {
      name: "1st Semester",
      link: "https://drive.google.com/drive/folders/1lLTbw6lO_JzqYCUGvGjt95ON2teu7Zsd?usp=share_link",
    },
    {
      name: "2nd Semester",
      link: "https://drive.google.com/drive/folders/1NKlfT02MOmTAdbaoIVWcrOYsppg8pzFQ?usp=share_link",
    },
    {
      name: "3rd Semester",
      link: "https://drive.google.com/drive/folders/1vvw9aTvyqHzvNjA2yoaXRdOYXlZLiKrU?usp=share_link",
    },
    {
      name: "4th Semester",
      link: "https://drive.google.com/drive/folders/1vsuaec9ME8DokDiflJAc3M8NItaqWsAU?usp=share_link",
    },
    {
      name: "5th Semester",
      link: "https://drive.google.com/drive/folders/1lkndLFKT4Uz0kksW7XLMnW_D1dmt35Wr?usp=share_link",
    },
    {
      name: "6th Semester",
      link: "https://drive.google.com/drive/folders/1HTZ-XZgxTkpnBR4UMJFSlESNOw5HTF5L?usp=sharing",
    },
    {
      name: "7th Semester",
      link: "https://drive.google.com/drive/folders/1eJpP-uZmlbisvv1jntNgYarR_ydxsvg6?usp=share_link",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Study Material - B.Tech CSE</title>
        <link
          rel="canonical"
          href="https://hardik-daim.vercel.app/btech/cse/study-material"
        />
        <meta
          name="description"
          content="Access study materials for B.Tech CSE, including Computer Networks, DBMS, Software Engineering, and more."
        />
        <meta
          name="keywords"
          content="CGC ASSIGN, CGC Assignments, B.Tech CSE, study materials, Computer Networks, DBMS, Software Engineering, Hardik Daim, Hardik's Portfolio"
        />
        <meta property="og:title" content="Study Material - B.Tech CSE" />
        <meta
          property="og:description"
          content="Access study materials for B.Tech CSE, including Computer Networks, DBMS, Software Engineering, and more."
        />
        <meta
          property="og:url"
          content="https://hardik-daim.vercel.app/btech/cse/study-material"
        />
        <meta
          property="og:image"
          content="https://hardik-daim.vercel.app/study-material.jpg"
        />
        <meta property="og:type" content="webpage" />
      </Helmet>
      <div className="relative isolate min-h-screen flex flex-col items-center justify-center">
        {/* Top Blur Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-60  md:-top-80 -z-10 transform-gpu blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="p-4 min-h-screen container mx-auto">
          <motion.h2
            className="text-3xl md:text-7xl flex justify-center font-bold md:mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Study Material
          </motion.h2>
          <motion.h2
            className="text-sm md:text-3xl flex justify-center font-bold my-4 md:my-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            B.Tech - CSE (PTU)
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {semesters.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 dark:border-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer text-xs md:text-lg uppercase"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <span className="font-semibold text-gray-400 text-xs md:text-lg uppercase">
                        {item.name}
                      </span>
                      <FaLock className="text-gray-500 dark:text-gray-400" />
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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

export default StudyMaterial;
