import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BlogList from "./components/BlogList.jsx";
import BlogPost from "./components/BlogPost.jsx";
// import FifthSem from "./components/FifthSem.jsx";
import NotExist from "./pages/NotExist.jsx";
import StudyMaterial from "./components/StudyMaterial.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  const theme = useSelector(selectTheme);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <SkeletonTheme
      baseColor={isDarkMode ? "#2c2c2c" : "#e0e0e0"}
      highlightColor={isDarkMode ? "#444" : "#f5f5f5"}
    >
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/project/details/:projectId" element={<ProjectDetails />} />
          <Route path="/btech/cse/study-material" element={<StudyMaterial />} />
          <Route path="*" exact element={<NotExist loader={loader} />} />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: isDarkMode ? "#333" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          }}
        />
      </Router>
    </SkeletonTheme>
  );
};

export default App;
