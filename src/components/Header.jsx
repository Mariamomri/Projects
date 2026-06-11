import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div>Header</div>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/languages">Languages</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
}

export default Header;
