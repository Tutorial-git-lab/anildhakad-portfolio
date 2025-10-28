// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm py-3 transition-navbar ${
        scrolled ? "navbar-scrolled bg-white" : "bg-transparent"
      }`}
      data-aos="fade-down"
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand
          href="#hero"
          className="fw-bold text-primary fs-4 d-flex align-items-center"
        >
          <span className="me-2">👨‍💻</span> Anil Dhakad
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {[
              "about",
              "skills",
              "experience",
              "education",
              "projects",
              "blogs",
              "contact",
            ].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={`fw-medium nav-link-custom ${
                  activeLink === section ? "active-link" : ""
                }`}
                onClick={() => handleSetActive(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Inline Styles */}
      <style jsx>{`
        .transition-navbar {
          transition: background-color 0.4s ease, box-shadow 0.4s ease,
            padding 0.4s ease;
        }

        .navbar-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
        }

        .nav-link-custom {
          position: relative;
          margin-right: 1.2rem;
          color: #333 !important;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #0d6efd !important;
        }

        /* Animated underline */
        .nav-link-custom::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #0d6efd, #6f42c1);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link-custom:hover::after,
        .active-link::after {
          width: 100%;
        }

        .active-link {
          color: #0d6efd !important;
          font-weight: 600;
        }

        /* Mobile */
        @media (max-width: 991px) {
          .navbar-collapse {
            background: white;
            border-radius: 10px;
            margin-top: 1rem;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .nav-link-custom {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </Navbar>
  );
}
