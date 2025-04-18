import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import l from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="head">
      <Navbar expand="lg" className=" ">
        <Container fluid className="d-lg-flx justify-around">
          <Navbar.Brand href="#">
            <Link to="/" className="pt-lg-3 mx-lg-4">
              {" "}
              <img src={l} alt="" />{" "}
            </Link>
          </Navbar.Brand>
          <div className="Navbar.Toggle">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="text-whit bg-white  md-bg-white"
            />
          </div>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100p" }}
              navbarScroll
            ></Nav>

            <div className="d-flex jusitify-aroun gap-4 mx-">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                 <Link
                to="/"
                className={`nav-lin text-white text-decoration-none mx-2 pt-lg-3 my-1 my-md-0 py-md-1 ${
                  location.pathname === "/" ? "text-white fw-bold" : "text-light"
                }`}
              >
                Home
              </Link>

                <Link
                  to="/winner"
                  className={`text-white text-decoration-none mx-2 pt-lg-3 my-1 my-md-0 py-md-1 ${
                    location.pathname === "/winner" ? "text-white fw-bold" : "text-light"}`}
                >
                  {" "}
                  Winners
                </Link>
                
                <Link
                  to="/app"
                  className={`text-white text-decoration-none mx-2 pt-lg-3 my-1 my-md-0 py-md-1${
                    location.pathname === "/app" ? "text-white fw-bold" : "text-light"}`}
                >
                  How to Apply
                </Link>

                <Link
                  to="/app"
                  className="  text-decoration-none text-dark fw-bold tag mx-2 pt-lg-3 Nav"
                >
                  <button className="btn btn-warning  ">Apply Now</button>
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
