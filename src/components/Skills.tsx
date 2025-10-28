// src/components/Skills.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaCloud,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const { skills } = data;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const icons = [FaCode, FaDatabase, FaLaptopCode, FaCloud, FaTools];

  return (
    <section
      id="skills"
      className="py-5 position-relative overflow-hidden bg-light"
    >
      {/* Background glow effects */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(13,110,253,0.1), transparent 60%), radial-gradient(circle at 80% 70%, rgba(111,66,193,0.15), transparent 60%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 fw-bold text-primary mb-3">My Skills</h2>
          <p className="text-muted fs-5">
            A blend of technologies I use to build powerful and scalable
            applications
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                className="col-md-6 col-lg-4"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <div className="card h-100 skill-card border-0 rounded-4 shadow-lg p-4 position-relative overflow-hidden">
                  {/* Floating Icon */}
                  <div className="icon-circle position-absolute top-0 end-0 translate-middle shadow">
                    <Icon className="text-white" size={26} />
                  </div>

                  <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
                    {skill.category}
                  </h5>

                  <div className="d-flex flex-column gap-3">
                    {skill.items.map((item, i) => (
                      <div
                        key={i}
                        data-aos="fade-right"
                        data-aos-delay={i * 100}
                      >
                        <div className="d-flex justify-content-between mb-1 small">
                          <span className="fw-semibold">{item.name}</span>
                          <span className="text-muted">{item.level}</span>
                        </div>
                        <div
                          className="progress rounded-pill bg-white shadow-sm"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar gradient-bar"
                            role="progressbar"
                            style={{
                              width: `${item.percentage}%`,
                              transition: "width 1s ease",
                            }}
                            aria-valuenow={item.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .skill-card {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.85);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(25%, -25%);
        }

        .gradient-bar {
          background: linear-gradient(90deg, #0d6efd, #6f42c1);
        }

        @media (max-width: 768px) {
          .skill-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
