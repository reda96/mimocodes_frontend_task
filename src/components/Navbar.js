import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        position: "fixed",
        opacity: 1,
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 99,
        backgroundColor: "#333",
        boxShadow: " 0 2px 4px 0 #333",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          L<span style={{ color: "blue" }}>u</span>nar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prices">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
