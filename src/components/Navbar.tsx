"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "about",
    "skills",
    "experience",
    "education",
    "projects",
    "blogs",
    "contact",
  ];

  const handleSetActive = (link: string) => setActiveLink(link);

  // ✅ Motion variant for navbar animation
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier
    },
  };

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm py-3 transition-navbar ${
        scrolled ? "navbar-scrolled bg-white" : "bg-transparent"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        {/* Brand Logo */}
        <a
          href="#hero"
          className="navbar-brand fw-bold text-primary fs-4 d-flex align-items-center"
          aria-label="Go to homepage"
        >
          <span className="me-2" aria-hidden="true">
            👨‍💻
          </span>
          Anil Dhakad
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((section) => (
              <motion.div
                key={section}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Nav.Link
                  href={`#${section}`}
                  className={`fw-medium nav-link-custom ${
                    activeLink === section ? "active-link" : ""
                  }`}
                  onClick={() => handleSetActive(section)}
                  aria-current={activeLink === section ? "page" : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </div>
      </Container>

      {/* Scoped Styles */}
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
          font-size: 1.05rem;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #0d6efd !important;
        }

        /* Gradient underline */
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

        /* Mobile Responsiveness */
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
    </motion.nav>
  );
}
