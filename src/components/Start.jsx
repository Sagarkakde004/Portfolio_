import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { motion } from "framer-motion";

const Start = () => {
  const testimonials = [
    {
      quote:
        "A self-taught full-stack developer with proven ability to build scalable applications. My Gig Jobs Application showcases my expertise in React and Spring Boot.",
      name: "Sagar Kakade",
      designation: "Full Stack Developer",
      src: "/sagar-1.png",
    },
    {
      quote:
        "During my internship at Widesoftech, I delivered responsive web pages with clean, efficient code. I'm committed to following best practices and maintaining code quality.",
      name: "Sagar Kakade",
      designation: "Front End Developer",
      src: "/sagar-2.jpeg",
    },
    {
      quote:
        "Completed JP Morgan Chase certification and built innovative projects like an automatic farming system. Always eager to learn new technologies and solve real-world problems.",
      name: "Sagar Kakade",
      designation: "Software Engineer",
      src: "/sagar-3.jpeg",
    },
  ];

  const socialLinks = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/sagar-kakade-712779258/",
      color: "text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6" />,
      href: "https://github.com/Sagarkakde004/",
      color:
        "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full filter blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full filter blur-[150px]"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl z-10"
          >
            <AnimatedTestimonials testimonials={testimonials} />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
                Connect with me
              </h3>
              <FloatingDock items={socialLinks} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Start;
