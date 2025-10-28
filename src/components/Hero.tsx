// src/components/Hero.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="position-relative d-flex flex-column align-items-center justify-content-center text-center text-dark py-5 overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f0f9ff 100%)",
      }}
    >
      {/* Decorative Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.15), transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      {/* Floating Background Shapes */}
      <div
        className="position-absolute bg-primary rounded-circle"
        style={{
          width: "180px",
          height: "180px",
          top: "10%",
          left: "5%",
          opacity: 0.15,
          animation: "float 6s ease-in-out infinite",
        }}
      ></div>
      <div
        className="position-absolute bg-info rounded-circle"
        style={{
          width: "120px",
          height: "120px",
          bottom: "15%",
          right: "8%",
          opacity: 0.15,
          animation: "float 7s ease-in-out infinite reverse",
        }}
      ></div>

      {/* Profile Image */}
      <div data-aos="zoom-in" className="z-1">
        <Image
          src="/images/profile.jpg"
          alt="Anil Dhakad"
          width={220}
          height={220}
          className="rounded-circle mb-3 border border-4 border-primary shadow-lg"
          priority
        />
      </div>

      {/* Name */}
      <h1
        className="fw-bold display-4 mb-2 text-primary z-1"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      >
        Anil Dhakad
      </h1>

      {/* Animated Tagline */}
      <p
        className="lead text-muted mb-4 z-1"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <span className="fw-semibold">Full Stack .NET & React Developer</span>
        <br />
        Crafting Scalable Web Solutions with Modern UI/UX
      </p>

      {/* Buttons */}
      <div data-aos="fade-up" data-aos-delay="600" className="z-1">
        <a
          href="#projects"
          className="btn btn-primary btn-lg me-3 shadow-sm px-4 py-2 hero-btn"
        >
          🚀 View My Work
        </a>
        <a
          href="/Anil_Dhakad_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-lg px-4 py-2 hero-btn"
        >
          📄 Download CV
        </a>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        className="position-absolute bottom-0 pb-4 z-1"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="text-muted small">Scroll Down</div>
        <div className="scroll-indicator mt-1"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .hero-btn {
          transition: all 0.3s ease;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .scroll-indicator {
          width: 6px;
          height: 30px;
          margin: 0 auto;
          border-radius: 3px;
          background-color: #0d6efd;
          animation: scrollBlink 1.2s infinite;
        }

        @keyframes scrollBlink {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
