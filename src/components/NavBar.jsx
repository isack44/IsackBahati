import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="nav-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "normal-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            isActive ? "active-link" : "normal-link"
          }
        >
          AboutMe
        </NavLink>
        <NavLink
          to="/hobbies"
          className={({ isActive }) =>
            isActive ? "active-link" : "normal-link"
          }
        >
          Myhobby
        </NavLink>
      </nav>
    </>
  );
};
export default NavBar;
