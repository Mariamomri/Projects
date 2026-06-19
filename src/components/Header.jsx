import { NavLink } from "react-router-dom";
import "../assets/styles/header.css";

function Header() {
  return (
    <>
      <header className="header">
        <button className="logo">Mariam Omri</button>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/languages"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Languages
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
