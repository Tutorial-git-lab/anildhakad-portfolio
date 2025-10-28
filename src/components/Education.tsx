// src/components/Education.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import { FaGraduationCap, FaUniversity, FaStar } from "react-icons/fa";

export default function Education() {
  const { education } = data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="education"
      className="py-5 position-relative bg-light overflow-hidden"
    >
      {/* Gradient background decorations */}
      <div
        className="position-absolute top-0 start-0 translate-middle opacity-25"
        style={{
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle at center, rgba(13,110,253,0.25), transparent 70%)",
          borderRadius: "50%",
        }}
      ></div>
      <div
        className="position-absolute bottom-0 end-0 translate-middle opacity-25"
        style={{
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle at center, rgba(111,66,193,0.25), transparent 70%)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 fw-bold text-primary">Education</h2>
          <p className="text-muted fs-5">
            My academic background and learning milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline position-relative">
          <div className="row g-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="col-md-6"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="card border-0 shadow-lg rounded-4 p-3 hover-card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-circle bg-primary text-white me-3">
                        <FaGraduationCap size={22} />
                      </div>
                      <h5 className="card-title fw-bold mb-0">{edu.degree}</h5>
                    </div>

                    <h6 className="card-subtitle text-muted mb-2">
                      <FaUniversity className="me-2 text-secondary" />
                      {edu.college}, {edu.location}
                    </h6>

                    <p className="text-secondary small mb-3">
                      <strong>Period:</strong> {edu.period} |{" "}
                      <strong>Grade:</strong> {edu.grade}
                    </p>

                    <ul className="list-unstyled">
                      {edu.details.map((detail, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-2"
                          data-aos="fade-right"
                          data-aos-delay={100 + i * 100}
                        >
                          <FaStar className="text-warning me-2 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative vertical timeline line */}
          <div className="timeline-line d-none d-md-block"></div>
        </div>
      </div>

      {/* Local Styles */}
      <style jsx>{`
        section#education {
          scroll-margin-top: 80px;
        }

        .icon-circle {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(13, 110, 253, 0.9),
            rgba(111, 66, 193, 0.9)
          );
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
        }

        .hover-card {
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
        }

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(
            to bottom,
            rgba(13, 110, 253, 0.3),
            rgba(111, 66, 193, 0.3)
          );
          transform: translateX(-50%);
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}
