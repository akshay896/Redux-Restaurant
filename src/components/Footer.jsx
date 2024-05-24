import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-100 bg-dark pt-3 pb-4">
      <div style={{ padding: "30px" }} className="container mt-5 w-100 ">
        <div className="d-lg-flex justify-content-between align-items-between">
          <div style={{ width: "400px" }} className="intro">
            <Link
              className="fw-bolder  "
              to={"/"}
              style={{ color: "white", 
              textDecoration:'none', fontFamily:"Dancing Script",fontSize:"30px",marginBottom:"30px" }}
            >
              DineDiscover
            </Link>
            <p className="text-light mt-3">
              Designed to built with all the love in the world by the Media team
              with the help of our contributors
            </p>
            <p className="text-light">
              Code licenced by Media, docs CC By 3.0.
            </p>

            <p className="text-light">Currently v1.0.0</p>
          </div>

          <div className="links d-flex flex-column">
            <h5 className="text-light">Links</h5>

            <Link className="mt-4" to={"/"} style={{ textDecoration: "none", color: "#FFF" }}>
              Home
            </Link>
            <Link
              to={"/details"}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Details
            </Link>
            
          </div>

          <div className="guides">
            <h5 className="text-light">Guides</h5>

            <div className="d-flex flex-column">
              <a
                href="https://react.dev/"
                target="_blank"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                React
              </a>
              <a
                href="https://react-bootstrap.github.io/"
                target="_blank"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                React Bootstrap
              </a>
              <a
                href="https://reactrouter.com/en/main"
                target="_blank"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                React Router Dom
              </a>
            </div>
          </div>

          <div className="contact">
            <h5 className="text-light">Contact</h5>

            <div className="d-flex">
              <input
                type="text"
                placeholder="Email id please"
                style={{ borderRadius: "10px", padding: "5px" }}
              />
              <button type="button" className="btn btn-warning ms-2">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="d-flex mt-3 justify-content-between ">
              <a href="">
                <i className="fa-brands fa-x-twitter text-light"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram text-light"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook text-light"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin text-light"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github text-light"></i>
              </a>

              <a href="">
                <i className="fa-solid fa-phone text-light"></i>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-5 text-light">
          Copyright © 2024 Dinediscover. Built with React.
        </p>
      </div>
    </div>
  );
};

export default Footer;
