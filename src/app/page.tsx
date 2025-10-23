"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <main className="mt-5 pt-5">
        {/* Hero Section */}
        <section id="hero" data-aos="fade-up" className="py-5 bg-light">
          <div className="container">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <section id="about" data-aos="fade-up" className="py-5">
          <div className="container">
            <About />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-aos="fade-up" className="py-5 bg-light">
          <div className="container">
            <Skills />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-aos="fade-up" className="py-5">
          <div className="container">
            <Experience />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" data-aos="fade-up" className="py-5 bg-light">
          <div className="container">
            <Education />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-aos="fade-up" className="py-5">
          <div className="container">
            <Projects />
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" data-aos="fade-up" className="py-5 bg-light">
          <div className="container">
            <Blogs />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-aos="fade-up" className="py-5">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-4 bg-dark text-white"
        data-aos="fade-up"
      >
        <p className="mb-1">
          © {new Date().getFullYear()} <strong>Anil Dhakad</strong> |{" "}
          <a
            href="https://Anildhakad.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-underline"
          >
            Anildhakad.dev
          </a>
        </p>
        <p className="small text-secondary mb-0">
          Built with ❤️ using Next.js, Bootstrap & AOS
        </p>
      </footer>
    </>
  );
}
