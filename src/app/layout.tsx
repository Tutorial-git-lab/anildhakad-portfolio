"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    // Load Bootstrap JS dynamically (needed for navbar toggles, modals, etc.)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO & responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Sunil Dhakad | Full Stack Developer Portfolio"
        />
        <title>Sunil Dhakad | Full Stack Developer</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="bg-light text-dark">
        {/* Navbar Section */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top"
          data-aos="fade-down"
        >
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">
              <span className="text-primary">Sunil</span> Dhakad
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Page Content */}
        <main className="container py-5" data-aos="fade-up">
          {children}
        </main>

        {/* Footer Section */}
        <footer
          className="bg-dark text-white text-center py-3 mt-auto"
          data-aos="fade-up"
        >
          <p className="mb-0">
            © {new Date().getFullYear()} <strong>Sunil Dhakad</strong> — All
            Rights Reserved.
          </p>
          <p className="small text-secondary">
            Built with ❤️ using Next.js, Bootstrap, and AOS
          </p>
        </footer>
      </body>
    </html>
  );
}
