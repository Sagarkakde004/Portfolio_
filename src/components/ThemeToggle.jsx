import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, selectTheme } from "../store/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  // Function to get the system's preferred theme
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Function to toggle the theme
  const toggleTheme = () => {
    let newTheme;
    if (currentTheme === "system") {
      newTheme = getSystemTheme() === "light" ? "dark" : "light";
    } else {
      newTheme = currentTheme === "light" ? "dark" : "light";
    }
    dispatch(setTheme(newTheme));
  };

  // Effect to handle system theme changes
  useEffect(() => {
    const systemThemeHandler = (e) => {
      if (currentTheme === "system") {
        dispatch(setTheme(e.matches ? "dark" : "light"));
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", systemThemeHandler);

    return () => {
      mediaQuery.removeEventListener("change", systemThemeHandler);
    };
  }, [currentTheme, dispatch]);

  // Determine the effective theme (system, light, or dark)
  const effectiveTheme =
    currentTheme === "system" ? getSystemTheme() : currentTheme;

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${
        effectiveTheme === "light"
          ? "bg-gray-200 text-black hover:bg-gray-300"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
      aria-label="Toggle Theme"
    >
      {effectiveTheme === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;