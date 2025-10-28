// src/app/page.tsx or src/app/home/page.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowUp } from "react-icons/fa";

// ✅ Lazy Load Section Components
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import("../components/About"));
const Skills = dynamic(() => import("../components/Skills"));
const Experience = dynamic(() => import("../components/Experience"));
const Education = dynamic(() => import("../components/Education"));
const Projects = dynamic(() => import("../components/Projects"));
const Blogs = dynamic(() => import("../components/Blogs"));
const Contact = dynamic(() => import("../components/Contact"));

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });

    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Section Title Component
  const SectionTitle = ({ title }: { title: string }) => (
    <div className="text-center mb-5" data-aos="zoom-in">
      <h2 className="fw-bold text-uppercase section-heading">{title}</h2>
      <div className="mx-auto mt-3 mb-2" style={{ width: "60px" }}>
        <div className="border-bottom border-3 border-primary"></div>
      </div>
      <p className="text-muted">Explore my {title.toLowerCase()} below</p>
    </div>
  );

  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <head>
        <title>Anil Kumar Dhakad | Full Stack .NET & React Developer</title>
        <meta
          name="description"
          content="Portfolio of Anil Dhakad — a Full Stack Developer specializing in .NET Core, Next.js, and modern web development."
        />
        <meta name="author" content="Anil Dhakad" />
        <meta
          name="keywords"
          content=".NET, React, Next.js, ASP.NET Core, Web API, Full Stack Developer, Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* ===== Scroll Progress Bar ===== */}
      <div
        className="position-fixed top-0 start-0 bg-primary"
        style={{
          height: "4px",
          width: `${scrollProgress}%`,
          zIndex: 1050,
          transition: "width 0.2s ease-out",
        }}
      ></div>

      <main className="mt-5 pt-5" style={{ overflowX: "hidden" }}>
        {/* ===== Hero Section ===== */}
        <section
          id="hero"
          className="py-5 bg-light"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="container">
            <Hero />
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section id="about" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <SectionTitle title="About Me" />
            <About />
          </div>
        </section>

        {/* ===== Skills Section ===== */}
        <section
          id="skills"
          className="py-5 py-md-6 bg-light"
          data-aos="fade-up"
        >
          <div className="container">
            <SectionTitle title="Skills" />
            <Skills />
          </div>
        </section>

        {/* ===== Experience Section ===== */}
        <section id="experience" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <SectionTitle title="Experience" />
            <Experience />
          </div>
        </section>

        {/* ===== Education Section ===== */}
        <section id="education" className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <SectionTitle title="Education" />
            <Education />
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section id="projects" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <SectionTitle title="Projects" />
            <Projects />
          </div>
        </section>

        {/* ===== Blogs Section ===== */}
        <section id="blogs" className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <SectionTitle title="Blogs" />
            <Blogs />
          </div>
        </section>

        {/* ===== Contact Section ===== */}
        <section id="contact" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <SectionTitle title="Contact" />
            <Contact />
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer
        className="text-center py-4 bg-dark text-white position-relative"
        data-aos="fade-up"
      >
        <p className="mb-1">
          © {new Date().getFullYear()} <strong>Anil Kumar Dhakad</strong> |{" "}
          <a
            href="https://Anildhakad.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-primary"
          >
            Anildhakad.dev
          </a>
        </p>
        <p className="small text-secondary mb-0">
          Built with ❤️ using Next.js, Bootstrap & AOS
        </p>
      </footer>

      {/* ===== Scroll to Top Button ===== */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Go to top"
          className="btn btn-primary position-fixed scroll-top-btn"
          style={{
            bottom: "25px",
            right: "25px",
            borderRadius: "50%",
            zIndex: 1050,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
          data-aos="fade-left"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* ===== Custom Styling ===== */}
      <style jsx global>{`
        body {
          font-family: "Poppins", sans-serif;
          background-color: #f8f9fa;
          color: #212529;
          scroll-behavior: smooth;
          animation: fadeIn 1s ease-in-out;
        }

        /* Section Title Hover Animation */
        .section-heading {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .section-heading:hover {
          color: #0d6efd;
        }

        .section-heading::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 3px;
          bottom: -6px;
          left: 0;
          background-color: #0d6efd;
          transition: width 0.4s ease;
        }

        .section-heading:hover::after {
          width: 100%;
        }

        /* Scrollbar Customization */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #0d6efd;
          border-radius: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #e9ecef;
        }

        /* Scroll Button Hover */
        .scroll-top-btn {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .scroll-top-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
