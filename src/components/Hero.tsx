// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Home | Anil Kumar Dhakad Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Anil Dhakad — a Full Stack .NET & React Developer crafting scalable web applications with modern UI/UX design."
        />
      </Head>

      <section
        id="hero"
        className="position-relative d-flex flex-column align-items-center justify-content-center text-center text-dark py-5 overflow-hidden"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f0f9ff 100%)",
        }}
        role="banner"
        aria-label="Hero section introducing Anil Dhakad"
      >
        {/* Decorative Gradient Overlay */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.15), transparent 70%)",
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Floating Background Shapes */}
        <motion.div
          className="position-absolute bg-primary rounded-circle"
          style={{
            width: "180px",
            height: "180px",
            top: "10%",
            left: "5%",
            opacity: 0.15,
            zIndex: 0,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="position-absolute bg-info rounded-circle"
          style={{
            width: "120px",
            height: "120px",
            bottom: "15%",
            right: "8%",
            opacity: 0.15,
            zIndex: 0,
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        ></motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-1"
        >
          <Image
            src="/images/profile.jpg"
            alt="Anil Dhakad profile picture"
            width={220}
            height={220}
            className="rounded-circle mb-3 border border-4 border-primary shadow-lg"
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="fw-bold display-4 mb-2 text-primary z-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          Anil Kumar Dhakad
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p
          className="lead text-muted mb-4 z-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="fw-semibold">Full Stack .NET & React Developer</span>
          <br />
          Crafting Scalable Web Solutions with Modern UI/UX
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="z-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="btn btn-primary btn-lg me-3 shadow-sm px-4 py-2 hero-btn"
            aria-label="View my projects"
          >
            🚀 View My Work
          </a>
          <a
            href="/Anil_Dhakad_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-lg px-4 py-2 hero-btn"
            aria-label="Download Anil Dhakad CV"
          >
            📄 Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="position-absolute bottom-0 pb-4 z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="text-muted small">Scroll Down</div>
          <div className="scroll-indicator mt-1"></div>
        </motion.div>

        {/* Styles */}
        <style jsx>{`
          .hero-btn {
            transition: all 0.3s ease;
          }

          .hero-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
            background: linear-gradient(135deg, #007bff, #00c6ff);
            color: #fff !important;
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
    </>
  );
}
