"use client";

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm transition ${
        scrolled ? "bg-white navbar-scrolled" : "bg-light"
      }`}
    >
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold text-primary">
          Anil Dhakad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="fw-medium">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="fw-medium">
              Skills
            </Nav.Link>
            <Nav.Link href="#experience" className="fw-medium">
              Experience
            </Nav.Link>
            <Nav.Link href="#education" className="fw-medium">
              Education
            </Nav.Link>
            <Nav.Link href="#projects" className="fw-medium">
              Projects
            </Nav.Link>
            <Nav.Link href="#blogs" className="fw-medium">
              Blogs
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-medium">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Optional styling */}
      <style jsx>{`
        .navbar-scrolled {
          transition: background-color 0.3s ease;
          background-color: #ffffff !important;
        }
        .nav-link {
          margin-right: 1rem;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #0d6efd !important;
        }
      `}</style>
    </Navbar>
  );
}
