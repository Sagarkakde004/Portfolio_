// LoadingAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const circleVariants = {
  bounce: {
    y: [0, -30, 0],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
};

const LoadingAnimation = () => (
  <motion.div
    className="flex justify-center items-center h-screen"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex space-x-2">
      <motion.div
        className="w-6 h-6 bg-blue-500 rounded-full"
        variants={circleVariants}
      />
      <motion.div
        className="w-6 h-6 bg-blue-500 rounded-full"
        variants={circleVariants}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="w-6 h-6 bg-blue-500 rounded-full"
        variants={circleVariants}
        transition={{ delay: 0.4 }}
      />
    </div>
  </motion.div>
);

export default LoadingAnimation;
