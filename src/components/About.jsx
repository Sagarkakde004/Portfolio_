import React from "react";
import { motion } from "framer-motion";
import AnimatedLaptop from "./ui/animatedLaptop";

const About = ({ projectsRef }) => {
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Blur Effects */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Sagar Kakade
                </span>
                , a detail-oriented{" "}
                <span className="font-semibold">
                  self-taught full-stack developer
                </span>{" "}
                from Nagpur, Maharashtra. I'm passionate about building clean,
                efficient, and scalable applications that solve real-world
                problems.
              </p>

              <p className="text-lg leading-relaxed">
                My journey in tech began with a strong foundation in{" "}
                <span className="font-semibold">Information Technology</span>{" "}
                from SKP College, Kamptee. What sets me apart is my self-driven
                approach to learning—I've independently mastered technologies
                like{" "}
                <span className="font-semibold">
                  React.js, Spring Boot, and MySQL
                </span>
                , building production-ready applications along the way.
              </p>

              <p className="text-lg leading-relaxed">
                During my internship at{" "}
                <span className="font-semibold">Widesoftech Pvt. Ltd</span>, I
                honed my front-end development skills, delivering responsive web
                pages and UI components. I also completed the{" "}
                <span className="font-semibold">
                  JP Morgan Chase & Co. Software Engineering program
                </span>
                , gaining hands-on experience with enterprise-level tools like
                Kafka and Spring Security.
              </p>

              <p className="text-lg leading-relaxed">
                I'm particularly proud of my{" "}
                <span className="font-semibold">Gig Jobs Application</span>—a
                full-stack marketplace I built from scratch with React and
                Spring Boot, featuring authentication, role-based access
                control, and a complete job management system.
              </p>

              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  🏆 Academic Excellence
                </p>
                <p className="text-sm">
                  Won{" "}
                  <span className="font-semibold">
                    3rd place in Science Exhibition
                  </span>{" "}
                  for an innovative automatic farming system and achieved{" "}
                  <span className="font-semibold">
                    2nd place in SSC board examinations
                  </span>
                  .
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                I'm a strong team player who values clean code, best practices,
                and continuous learning. My goal is to create meaningful impact
                in the tech world through innovative solutions and dedication to
                excellence.
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
          </motion.div>

          {/* Right Column - Animated Laptop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <AnimatedLaptop />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              2
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Internships
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              10+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Self-Taught
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
