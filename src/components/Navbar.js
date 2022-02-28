import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let darkMode = "light"
  if (props.mode === "light") {
    darkMode = "dark"
  } else {
    darkMode = "light"
  }
  return (
    <div>
      <nav style={{backgroundColor: props.mode==="light"?"rgb(255, 255, 255)":"rgb(22,25,48)", boxShadow: props.mode==="light"?"0px 1px 10px #999":"0px 0px 0px"}} className={`navbar fixed-top navbar-expand-lg navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            IdealNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <li className={`form-check form-switch my-auto text-${darkMode}`}>
              <label
                className="form-check-label"
                // style={{ color: "rgb(255, 0, 93)" }}
                htmlFor="flexSwitchCheckDefault"
              >
                <strong>Dark Mode</strong>
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
