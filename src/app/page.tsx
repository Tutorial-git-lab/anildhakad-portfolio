"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Section Components
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

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

  // Section Titles with animated underline
  const SectionTitle = ({ title }: { title: string }) => (
    <div className="text-center mb-5" data-aos="zoom-in">
      <h2 className="fw-bold text-uppercase">{title}</h2>
      <div className="mx-auto mt-3 mb-2" style={{ width: "60px" }}>
        <div className="border-bottom border-3 border-primary"></div>
      </div>
      <p className="text-muted">Explore my {title.toLowerCase()} below</p>
    </div>
  );

  return (
    <>
      {/* Scroll Progress Bar */}
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
        <section id="skills" className="py-5 bg-light" data-aos="fade-up">
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
          © {new Date().getFullYear()} <strong>Anil Dhakad</strong> |{" "}
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
          className="btn btn-primary position-fixed"
          style={{
            bottom: "25px",
            right: "25px",
            borderRadius: "50%",
            zIndex: 1050,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease",
          }}
          data-aos="fade-left"
        >
          ↑
        </button>
      )}

      {/* ===== Custom Styling ===== */}
      <style jsx global>{`
        body {
          font-family: "Poppins", sans-serif;
          background-color: #f8f9fa;
          color: #212529;
          scroll-behavior: smooth;
        }

        /* Section title animation */
        h2 {
          letter-spacing: 1px;
        }

        /* Section alternate coloring */
        section:nth-of-type(even) {
          background: #f8f9fa;
        }

        /* Scrollbar customization */
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

        /* Smooth fade on body load */
        body {
          animation: fadeIn 1s ease-in-out;
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
