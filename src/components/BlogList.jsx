import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../data/blogs/BlogPosts";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const BlogList = () => {
  const sortedBlogPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Helmet>
        <title>Blog - Hardik Daim's Portfolio</title>
        <link rel="canonical" href="https://hardik-daim.vercel.app/blog" />
        <meta
          name="description"
          content="Read the latest blogs by Hardik Daim on web development, software engineering, and more."
        />
        <meta
          name="keywords"
          content="Hardik Daim, blogs, web development, Software Engineer, technology, Full Stack Developer, Web Developer, React, Node.js, Portfolio, Hardik Portfolio, Hardik Daim Portfolio, Hardik"
        />
        <meta property="og:title" content="Blog - Hardik Daim's Portfolio" />
        <meta
          property="og:description"
          content="Read the latest blogs by Hardik Daim on web development, software engineering, and more."
        />
        <meta
          property="og:image"
          content="https://hardik-daim.vercel.app/android-chrome-512x512.png"
        />
        <meta property="og:url" content="https://hardik-daim.vercel.app/blog" />
        <meta
          property="twitter:title"
          content="Blog - Hardik Daim's Portfolio"
        />
        <meta
          property="twitter:description"
          content="Read the latest blogs by Hardik Daim on web development, software engineering, and more."
        />
        <meta
          property="twitter:image"
          content="https://hardik-daim.vercel.app/android-chrome-512x512.png"
        />
        <meta
          property="twitter:url"
          content="https://hardik-daim.vercel.app/blog"
        />
           <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "Blog - Hardik Daim's Portfolio",
            "description": "Read the latest blogs by Hardik Daim on web development, software engineering, and more.",
            "url": "https://hardik-daim.vercel.app/blog",
            "author": {
              "@type": "Person",
              "name": "Hardik Daim"
            },
            "datePublished": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://hardik-daim.vercel.app/blog"
            }
          })}
        </script>
      </Helmet>

      <div className="p-4 min-h-screen max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl flex justify-center font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blogs
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sortedBlogPosts.map((post, index) => (
            <motion.li
              key={index}
              className="border-b py-4 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/blog/${post.id}`}>
                {index === 0 && (
                  <motion.span
                    className="absolute font-semibold top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg"
                    initial={{ backgroundColor: "#f87171" }}
                    animate={{
                      backgroundColor: [
                        "#dc2626", // Red-600
                        "#1d4ed8", // Blue-800
                        "#6d28d9", // Purple-700
                        "#dc2626", // Red-600
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    Latest
                  </motion.span>
                )}
                <div className="text-blue-500">
                  <motion.h3
                    className="text-xl my-1 hover:underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {post.title}
                  </motion.h3>
                  <p className="mb-2 text-gray-800 dark:text-gray-200">
                    {post.excerpt}
                  </p>
                  <small className="text-gray-500">{post.date}</small>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
