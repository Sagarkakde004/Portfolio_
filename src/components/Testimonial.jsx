import React from "react";
import { motion } from "framer-motion";
import TestimonialData from "../data/TestimonialData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Testimonial = ({ loader }) => {
  return (
    <section className="mb-10 md:mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          {loader ? <Skeleton width={600} /> : " What People Say?"}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {TestimonialData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md  p-6 rounded-2xl md:rounded-3xl border shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                {item.testimonial}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
