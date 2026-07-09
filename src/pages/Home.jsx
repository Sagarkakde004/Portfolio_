// Home.jsx
import React, { useRef, lazy, Suspense } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
const Start = lazy(() => import("../components/Start"));
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Testimonial = lazy(() => import("../components/Testimonial"));
import { Helmet } from "react-helmet-async";

const Home = () => {
  const projectsRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Sagar Kakade | Self-Taught Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Sagar Kakade, a self-taught Full Stack Developer from Nagpur specializing in React, Spring Boot, and building scalable web applications."
        />
        <meta
          name="keywords"
          content="Sagar Kakade, Self-Taught Developer, Full Stack Developer, React Developer, Spring Boot Developer, Java Developer, Web Developer, Nagpur Developer, Frontend Developer, Backend Developer, Software Engineer, Gig Jobs Application"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sagar-kakade.vercel.app/" />
        <meta
          property="og:title"
          content="Sagar Kakade's Portfolio - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Self-taught Full Stack Developer from Nagpur, Maharashtra. Specializing in React, Spring Boot, and building scalable web applications. Check out my projects including Gig Jobs Application."
        />
        <meta
          property="og:image"
          content="https://sagar-kakade.vercel.app/android-chrome-512x512.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Sagar Kakade's Portfolio - Full Stack Developer"
        />
        <meta
          property="twitter:description"
          content="Self-taught Full Stack Developer specializing in React, Spring Boot, and scalable web applications. Building innovative solutions."
        />
        <meta
          property="twitter:image"
          content="https://sagar-kakade.vercel.app/android-chrome-512x512.png"
        />
        <meta
          property="twitter:url"
          content="https://sagar-kakade.vercel.app/"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            headline:
              "Sagar Kakade - Self-Taught Full Stack Developer Portfolio",
            description:
              "Portfolio of Sagar Kakade, a self-taught Full Stack Developer from Nagpur specializing in React, Spring Boot, and building scalable web applications.",
            url: "https://sagar-kakade.vercel.app/",
            author: {
              "@type": "Person",
              name: "Sagar Kakade",
              email: "sagarkakade033@gmail.com",
              jobTitle: "Full Stack Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.linkedin.com/in/sagar-kakade-712779258/",
                "https://github.com/Sagarkakde004/",
              ],
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://sagar-kakade.vercel.app/",
            },
            keywords:
              "Full Stack Developer, React, Spring Boot, Java, Self-Taught Developer, Web Development, Nagpur",
          })}
        </script>
      </Helmet>
      <Suspense fallback={<LoadingAnimation />}>
        <Start />
        <About projectsRef={projectsRef} />
        <Skills />
        <Experience />
        <Projects ref={projectsRef} />
        <Testimonial />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
