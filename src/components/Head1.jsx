import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import l from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const Head1 = () => {

  const location = useLocation();

  return (
    <div className="hea" style={{ backgroundColor: "#FFF3E7" }}>
      <Navbar expand="lg" className="bg-blac ">
        <Container fluid className="lg-d-flx jusitfy-around">
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
              navbarScrol
            ></Nav>

            <div className="d-flex jusitify-aroun gap-4 mx-">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScrol
              >
                <Link
                               to="/"
                               className={`nav-lin text-dark text-decoration-none mx-2 pt-lg-3 my-1 my-md-0 py-md-1 ${
                                 location.pathname === "/" ? "text-white fw-bold" : "text-light"
                               }`}
                             >
                               Home
                             </Link>
                <Link
                                  to="/winner"
                                  className={`text-dark text-decoration-none mx-2 pt-lg-3 my-1 my-md-0 py-md-1 ${
                                    location.pathname === "/winner" ? "text-white fw-bold" : "text-light"}`}
                                >
                                  {" "}
                                  Winners
                                </Link>
                <Link
                                  to="/app"
                                  className={`text-dark text-decoration-none mx-2 pt-lg-3 my-1 my-md-0 py-md-1${
                                    location.pathname === "/app" ? "text-white fw-bold" : "text-light"}`}
                                >
                                  How to Apply
                                </Link>

                 <Link
                                  to="/app"
                                  className=" nav-link text-decoration-none text-dark fw-bold tag mx-2 pt-lg-3 Nav"
                                >
                                  <button className="bt btn-warnin  ">Apply Now</button>
                                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Head1;
