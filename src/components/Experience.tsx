"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const { experience } = data;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="experience" className="py-5 bg-light position-relative">
      <div className="container">
        <h2
          className="fw-bold text-center mb-5 text-primary"
          data-aos="zoom-in"
        >
          Professional Experience
        </h2>

        <div className="timeline position-relative">
          {experience.map((exp, idx) => (
            <div
              className={`timeline-item mb-5 ${
                idx % 2 === 0 ? "left" : "right"
              }`}
              key={idx}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={idx * 200}
            >
              <div className="card shadow-lg border-0 rounded-4 p-4 experience-card h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle bg-gradient text-white me-3">
                    <FaBriefcase size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0">{exp.title}</h5>
                    <small className="text-muted">{exp.company}</small>
                  </div>
                </div>

                <p className="text-secondary mb-2">
                  <strong>Duration:</strong> {exp.duration} |{" "}
                  <span className="badge bg-primary bg-opacity-75 ms-1">
                    {exp.type}
                  </span>
                </p>

                <p className="text-muted mb-3">
                  <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                  {exp.location}
                </p>

                <ul className="list-unstyled mb-0">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="mb-2 d-flex align-items-start"
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #007bff, #00c6ff);
          opacity: 0.4;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 1rem;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
        }

        .timeline-item .experience-card {
          transition: all 0.4s ease;
          border-left: 5px solid transparent;
        }

        .timeline-item .experience-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-left: 5px solid #007bff;
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.2);
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #007bff, #00c6ff);
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
          }
        }

        @media (max-width: 767px) {
          .timeline::before {
            left: 8px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 2rem;
            text-align: left !important;
          }
          .timeline-item.right {
            left: 0;
          }
        }
      `}</style>
    </section>
  );
}
