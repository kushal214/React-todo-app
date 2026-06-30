import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">

        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          My Todos List
        </NavLink>

        <div className="navbar-nav ms-auto d-flex flex-row">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-warning fw-semibold me-3"
                : "nav-link text-white me-3"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-warning fw-semibold"
                : "nav-link text-white"
            }
          >
            About
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Header;