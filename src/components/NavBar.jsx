import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="relative px-4 sm:px-6 md:px-8 py-4 bg-transparent dark:bg-transparent transition-colors duration-300">
      <div className="flex items-center justify-between">
        {/* Logo with Code Icon */}
        <div className="flex items-center gap-2">
          <FaCode size={24} className="text-purple-500" />
        </div>

        {/* Dark Mode Toggle */}
        <button
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            // Sun SVG for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="orange"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <g>
                <line
                  x1="12"
                  y1="1"
                  x2="12"
                  y2="3"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="21"
                  x2="12"
                  y2="23"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="4.22"
                  y1="4.22"
                  x2="5.64"
                  y2="5.64"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="18.36"
                  y1="18.36"
                  x2="19.78"
                  y2="19.78"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="1"
                  y1="12"
                  x2="3"
                  y2="12"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="21"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="4.22"
                  y1="19.78"
                  x2="5.64"
                  y2="18.36"
                  stroke="orange"
                  strokeWidth="2"
                />
                <line
                  x1="18.36"
                  y1="5.64"
                  x2="19.78"
                  y2="4.22"
                  stroke="orange"
                  strokeWidth="2"
                />
              </g>
            </svg>
          ) : (
            // Moon SVG for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="gray"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </button>
      </div>

      {/* Nav Links - centered */}
      <div className="mt-3 flex items-center justify-center flex-wrap gap-x-6 gap-y-2 md:mt-2 border-b border-purple-300/30">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-500 pb-2 -mb-px transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-purple-500 pb-2 transition-colors duration-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-500 pb-2 -mb-px transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-purple-500 pb-2 transition-colors duration-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Project"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-500 pb-2 -mb-px transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-purple-500 pb-2 transition-colors duration-200"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-500 pb-2 -mb-px transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-purple-500 pb-2 transition-colors duration-200"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
