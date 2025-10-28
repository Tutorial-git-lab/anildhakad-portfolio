// src/components/About.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import data from "../data/portfolioData.json";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function About() {
  const { personal, highlights } = data;
  const { profileImage, location, email, phone, resumeUrl, hireMe } = personal;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 120,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-5 position-relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* ===== Background Gradient Overlay ===== */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,110,253,0.05), rgba(255,255,255,0.9))",
          zIndex: -1,
        }}
      ></div>

      <div className="container">
        {/* ===== Section Header ===== */}
        <header className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold display-5 text-uppercase mb-2 section-heading">
            About Me
          </h2>
          <div className="mx-auto mb-3" style={{ width: "70px" }}>
            <div className="border-bottom border-3 border-primary"></div>
          </div>
          <p className="text-muted fs-5">
            Discover who I am, my professional background, and what I love to
            build.
          </p>
        </header>

        {/* ===== Profile & Bio Section ===== */}
        <div className="row align-items-center mb-5 gy-4">
          {/* Profile Picture */}
          <div
            className="col-md-4 text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="position-relative d-inline-block p-2 rounded-circle bg-white shadow-lg profile-frame">
              <Image
                src={profileImage}
                alt="Anil Dhakad Profile Photo"
                width={220}
                height={220}
                placeholder="blur"
                blurDataURL="/placeholder.png"
                className="rounded-circle img-fluid shadow-lg profile-image"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                style={{
                  border: "3px solid rgba(13,110,253,0.4)",
                  animation: "pulseBorder 3s infinite",
                }}
              ></div>
            </div>
          </div>

          {/* Bio Information */}
          <div className="col-md-8" data-aos="fade-left" data-aos-delay="200">
            <article className="card border-0 shadow-lg bg-white bg-opacity-75 backdrop-blur">
              <div className="card-body p-4">
                <p className="fs-6 mb-4">{personal.bio}</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    <strong>Location:</strong> {location}
                  </li>
                  <li className="mb-2">
                    <FaEnvelope className="text-primary me-2" />
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${email}`}
                      className="text-decoration-none text-dark"
                    >
                      {email}
                    </a>
                  </li>
                  <li className="mb-2">
                    <FaPhone className="text-primary me-2" />
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${phone}`}
                      className="text-decoration-none text-dark"
                    >
                      {phone}
                    </a>
                  </li>
                </ul>

                {/* Buttons */}
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 shimmer-button"
                    aria-label="Download Resume"
                  >
                    Download Resume
                  </a>
                  <a
                    href={hireMe}
                    className="btn btn-outline-primary px-4 hire-btn"
                    aria-label="Hire Me"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* ===== Highlights Section ===== */}
        <div className="row g-4 mt-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <div className="card h-100 border-0 shadow-sm highlight-card">
                <div className="card-body d-flex align-items-start">
                  <FaCheckCircle className="text-primary me-3 fs-4 mt-1" />
                  <p className="mb-0 fw-semibold text-dark">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Custom Styles ===== */}
      <style jsx global>{`
        body {
          font-family: "Poppins", sans-serif;
        }

        .profile-frame {
          background: linear-gradient(
            135deg,
            rgba(13, 110, 253, 0.1),
            rgba(255, 255, 255, 0.7)
          );
        }

        .highlight-card {
          transition: all 0.3s ease;
          border-radius: 12px;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.25);
        }

        .shimmer-button {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .shimmer-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(13, 110, 253, 0.3);
        }

        .shimmer-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.2)
          );
          animation: shimmer 2s infinite;
        }

        .hire-btn {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .hire-btn:hover {
          background-color: #0d6efd;
          color: #fff !important;
          transform: translateY(-2px);
        }

        @keyframes shimmer {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }

        @keyframes pulseBorder {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
