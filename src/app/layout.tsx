"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Load Bootstrap JS dynamically
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Scroll-to-top visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Anil Dhakad | Full Stack Developer Portfolio"
        />
        <title>Anil Dhakad | Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className="bg-light text-dark"
        style={{
          fontFamily: "Poppins, sans-serif",
          scrollBehavior: "smooth",
        }}
      >
        {/* ===== Navbar ===== */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 shadow-sm sticky-top backdrop-blur"
          data-aos="fade-down"
        >
          <div className="container">
            <Link href="/" className="navbar-brand fw-bold fs-4">
              <span className="text-primary">Anil Kumar</span> Dhakad
            </Link>

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
                {[
                  "about",
                  "experience",
                  "education",
                  "projects",
                  "blogs",
                  "skills",
                  "contact",
                ].map((section) => (
                  <li className="nav-item" key={section}>
                    <Link
                      href={`#${section}`}
                      className="nav-link mx-2 position-relative"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <span className="nav-link-underline"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* ===== Main Content ===== */}
        <main className="container py-5" data-aos="fade-up">
          {children}
        </main>

        {/* ===== Footer ===== */}
        <footer
          className="bg-dark text-white text-center py-4 mt-auto shadow-lg"
          data-aos="fade-up"
        >
          <div className="container">
            <p className="mb-1">
              © {new Date().getFullYear()} <strong>Anil Dhakad</strong> — All
              Rights Reserved.
            </p>
            <p className="small text-secondary mb-0">
              Built with ❤️ using <span className="text-primary">Next.js</span>,{" "}
              <span className="text-info">Bootstrap</span> &{" "}
              <span className="text-warning">AOS</span>
            </p>
          </div>
        </footer>

        {/* ===== Scroll to Top Button ===== */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="btn btn-primary position-fixed"
            style={{
              bottom: "25px",
              right: "25px",
              borderRadius: "50%",
              padding: "10px 14px",
              zIndex: 1000,
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease",
            }}
            data-aos="fade-left"
          >
            ↑
          </button>
        )}

        {/* ===== Custom Styles ===== */}
        <style jsx global>{`
          /* Smooth underline animation for nav links */
          .nav-link {
            position: relative;
            color: #ddd !important;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #0d6efd !important;
          }
          .nav-link-underline {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background: #0d6efd;
            transition: width 0.3s ease;
          }
          .nav-link:hover .nav-link-underline {
            width: 100%;
          }

          /* Subtle body fade animation */
          body {
            animation: fadeIn 1s ease-in;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #0d6efd;
            border-radius: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f8f9fa;
          }
        `}</style>
      </body>
    </html>
  );
}
