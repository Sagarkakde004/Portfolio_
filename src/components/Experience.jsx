import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Front End Web Developer Intern",
      company: "Widesoftech Pvt. Ltd",
      location: "Nagpur, India",
      period: "Jun 2025 – Sep 2025",
      type: "Internship",
      icon: <Briefcase className="w-6 h-6" />,
      description: [
        "Developed responsive web pages using HTML, CSS, and JavaScript",
        "Implemented UI components based on project requirements",
        "Collaborated with team members to maintain code quality and consistency",
        "Followed instructions carefully to complete assigned tasks accurately and efficiently",
        "Gained hands-on experience with modern web development workflows",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    },
    {
      title: "Software Engineering Virtual Experience",
      company: "JP Morgan Chase & Co.",
      location: "Remote",
      period: "Sep 2025",
      type: "Certificate Program",
      icon: <Award className="w-6 h-6" />,
      description: [
        "Completed 5 comprehensive technical tasks provided by JP Morgan Chase team",
        "Learned efficient project setup and configuration processes",
        "Gained hands-on experience with Apache Kafka integration",
        "Implemented REST API endpoints with Spring Boot",
        "Worked with H2 database for data persistence",
        "Enhanced technical skills in enterprise-level Java development",
      ],
      technologies: ["Java", "Spring Boot", "Kafka", "H2 Database", "REST API"],
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Nagpur, India",
      period: "2024 – Present",
      type: "Self-Learning",
      icon: <Code className="w-6 h-6" />,
      description: [
        "Built full-stack Gig Jobs Application with React and Spring Boot",
        "Developed Task Management System using core Java concepts",
        "Implemented Spring Security for authentication and authorization",
        "Designed and normalized MySQL database schemas",
        "Created RESTful APIs for seamless frontend-backend communication",
        "Deployed responsive applications with mobile-first approach",
      ],
      technologies: [
        "React.js",
        "Spring Boot",
        "MySQL",
        "Spring Security",
        "REST API",
        "Git",
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effect */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-orange-500 via-yellow-400 to-yellow-200 opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Learning Journey
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          {exp.type}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5">
                            •
                          </span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Education
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-3xl">
                  🎓
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Bachelor of Science in Information Technology
                </h4>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  SKP College, Kamptee, Nagpur
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  March 2022 – March 2025
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-yellow-500">🏆</span>
                    <span>
                      3rd Place in Science Exhibition - Automatic Farming
                      Project
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-yellow-500">🥈</span>
                    <span>2nd Place in SSC Board Examinations</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500">⚡</span>
                    <span>Strong performance in academics and sports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
