import React, { useState } from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  const [Active, setActive] = useState("Home");
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
            <li onClick={() => setActive("Home")} className="nav-item">
              <Link
                className={Active === "Home" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setActive("Dashboard")} className="nav-item">
              <Link
                className={
                  Active === "Dashboard" ? "nav-link active" : "nav-link"
                }
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li onClick={() => setActive("Pricing")} className="nav-item">
              <Link
                className={
                  Active === "Pricing" ? "nav-link active" : "nav-link"
                }
                to="/prices"
              >
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
