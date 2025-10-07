import { NavLink } from "react-router-dom";

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="nav-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/aboutme"
        className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
      >
        AboutMe
      </NavLink>
      <NavLink
        to="/hobbies"
        className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
      >
        Myhobby
      </NavLink>
      <button
        className="toggle-btn"
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
    </nav>
  );
};

export default NavBar;
