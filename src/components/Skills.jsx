import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Lock,
  Search,
  Settings,
  Sparkles,
  Database,
  Code,
  Server,
} from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const Skills = () => {
  const skillsData = [
    {
      name: "React.js",
      level: "Advanced",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "JavaScript",
      level: "Advanced",
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Java",
      level: "Advanced",
      icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Spring Boot",
      level: "Advanced",
      icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Spring Security",
      level: "Intermediate",
      icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "MySQL",
      level: "Intermediate",
      icon: <Database className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "REST API",
      level: "Advanced",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "HTML & CSS",
      level: "Advanced",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
      icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Apache Kafka",
      level: "Beginner",
      icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Responsive Design",
      level: "Advanced",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "OOP Concepts",
      level: "Advanced",
      icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
  ];

  const categories = [
    {
      title: "Frontend Development",
      skills: ["HTML & CSS", "JavaScript", "React.js", "Responsive Design"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "REST API", "Spring Security"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "Git & GitHub", "Apache Kafka", "OOP Concepts"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden flex flex-col items-center justify-center">
      <div className="container px-2 mx-auto flex flex-col items-center justify-start mb-20">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Self-taught and continuously learning. Built production-ready
          applications using these technologies.
        </motion.p>

        {/* Skills Grid */}
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-16">
          {skillsData.map((skill, index) => (
            <GridItem
              key={index}
              area=""
              icon={skill.icon}
              title={skill.name}
              description={skill.level}
            />
          ))}
        </ul>

        {/* Skill Categories */}
        <div className="w-full max-w-6xl grid md:grid-cols-3 gap-6 mt-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div
                className={`bg-gradient-to-r ${category.color} h-2 rounded-full mb-4`}
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Self-Taught Journey
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            Continuously learning and expanding my skillset through hands-on
            projects, online courses, and real-world experience.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Self-Taught
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technologies Mastered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Continuous
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Learning
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute -left-40 md:left-0 bottom-80 md:bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 shadow-lg">
        <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Skills;
