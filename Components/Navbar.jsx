import React from "react";
import logoImage from "../Assets/Hemosis-Nav.jpeg";
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ borderBottom: "2px solid #0056b3", height: "120px" }}
    >
      <a className="navbar-brand" href="#">
        <img src = {logoImage} height="80rem" alt="nav-logo" />
      </a>
      <div
        className="collapse navbar-collapse"
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          background: "linear-gradient(180deg, #3ABEF9, #A7E6FF)",
          color: "white",
          height: "52px",
          borderRadius: "52px",
        }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Our Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Donate Us
            </a>
          </li>
          <li className="nav-item">
            <button
              style={{
                backgroundColor: "#3ABEF9",
                color: "white",
                borderRadius: "25px",
                width: "120px",
                height: "30px",
                borderStyle: "none",
              }}
            >
              Call to action
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
           <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    See Availabililty 
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">A+</a>
                    <a class="dropdown-item" href="#">A-</a>
                    <a class="dropdown-item" href="#">B+</a>
                    <a class="dropdown-item" href="#">B-</a>
                    <a class="dropdown-item" href="#">ab-</a>
                    <a class="dropdown-item" href="#">ab-</a>
                    <a class="dropdown-item" href="#">0-</a>
                    <a class="dropdown-item" href="#">0+</a>
                    <a class="dropdown-item" href="#">All Blood Group</a>
                  </div>
                </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
