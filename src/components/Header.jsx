import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import l from "../assets/logo.png";
import { Link } from "react-router";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="head">
      <Navbar expand="lg" className="bg-blac ">
        <Container fluid className="lg-d-flx jusitfy-around">
          <Navbar.Brand href="#">
            <img src={l} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-whit bg-white md-bg-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <div className="d-flex jusitify-aroun gap-4 mx-">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link href="#action1" className="text-white underline-1">Home</Link>
                <Link className="text-white"> About</Link>
                <Link className="text-white"> Judges</Link>
                <Link className="text-white"> Winners</Link>
                <Link className="text-white">How to apply</Link>

                <Link
                  to="/register"
                  className="text-decoration-none text-dark fw-bold tag me-2"
                >
                  <button className="btn btn-primary">Apply Now</button>
                </Link>

              </Nav>
            
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Hero/>
    </div>
  );
};

export default Header;
