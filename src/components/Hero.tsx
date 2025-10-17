"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column align-items-center justify-content-center text-center py-5 bg-gradient"
      style={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
        minHeight: "80vh",
      }}
    >
      {/* Profile Image */}
      <Image
        src="/images/profile.jpg"
        alt="Sunil Dhakad"
        width={200}
        height={200}
        className="rounded-circle mb-3 border border-3 border-primary shadow-lg"
        data-aos="zoom-in"
        priority
      />

      {/* Name */}
      <h1
        className="fw-bold display-4 mb-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Sunil Dhakad
      </h1>

      {/* Tagline */}
      <p
        className="lead text-muted mb-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Full Stack Developer & Software Engineer
      </p>

      {/* Call-to-Action Buttons */}
      <div data-aos="fade-up" data-aos-delay="600">
        <a href="#projects" className="btn btn-primary btn-lg me-2 shadow-sm">
          View My Work
        </a>
        <a
          href="/Sunil_Dhakad_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-lg shadow-sm"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
