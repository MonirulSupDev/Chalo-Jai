import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "mylight",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="gap-2 px-3 cursor-pointer"
      onClick={() => setTheme(theme === "mylight" ? "mydark" : "mylight")}
    >
      {theme === "mylight" ? (
        <>
          <MdDarkMode className="text-2xl" />
        </>
      ) : (
        <>
          <MdLightMode className="text-2xl" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
