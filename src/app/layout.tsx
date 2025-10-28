"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
        style={{ fontFamily: "Poppins, sans-serif", scrollBehavior: "smooth" }}
      >
        {/* ===== Scroll Progress Bar ===== */}
        <div
          className="position-fixed top-0 start-0 bg-primary"
          style={{
            height: "4px",
            width: `${scrollProgress}%`,
            zIndex: 1050,
            transition: "width 0.25s ease",
          }}
        ></div>

        {/* ===== Navbar ===== */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 shadow-sm sticky-top"
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

        {/* ===== Floating Social Icons ===== */}
        <div
          className="position-fixed top-50 translate-middle-y start-0 d-flex flex-column align-items-center gap-3 ms-3"
          style={{ zIndex: 1000 }}
          data-aos="fade-right"
        >
          <a
            href="https://github.com/AnilDhakad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark bg-white rounded-circle p-2 shadow-sm hover-glow"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/anil-dhakad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark bg-white rounded-circle p-2 shadow-sm hover-glow"
          >
            <FaLinkedin size={20} color="#0A66C2" />
          </a>
        </div>

        {/* ===== Main Content ===== */}
        <main className="container py-5">{children}</main>

        {/* ===== Footer ===== */}
        <footer
          className="text-white text-center py-4 mt-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,110,253,1) 0%, rgba(111,66,193,1) 100%)",
            boxShadow: "0 -5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <div className="container">
            <p className="mb-1 fw-semibold">
              © {new Date().getFullYear()} Anil Dhakad — All Rights Reserved.
            </p>
            <p className="small text-light mb-0">
              Built with ❤️ using <strong>Next.js</strong>,{" "}
              <strong>Bootstrap</strong>, and <strong>AOS</strong>.
            </p>
          </div>
        </footer>

        {/* ===== Scroll to Top Button ===== */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="btn btn-primary position-fixed scroll-top-btn"
            data-aos="fade-left"
          >
            <FaArrowUp size={18} />
          </button>
        )}

        {/* ===== Custom Styles ===== */}
        <style jsx global>{`
          .nav-link {
            color: #ddd !important;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #0d6efd !important;
          }
          .nav-link-underline {
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

          .scroll-top-btn {
            bottom: 25px;
            right: 25px;
            border-radius: 50%;
            padding: 12px 14px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            animation: pulse 1.5s infinite;
          }
          .scroll-top-btn:hover {
            transform: rotate(360deg);
            transition: transform 0.4s ease;
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.6);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
            }
          }

          .hover-glow:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(13, 110, 253, 0.4);
            transition: all 0.3s ease;
          }

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
