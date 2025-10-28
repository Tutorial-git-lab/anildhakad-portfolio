// src/components/Education.tsx
"use client";

import { Suspense } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaRegLightbulb } from "react-icons/fa";
import data from "../data/portfolioData.json";

export default function Education() {
  const { education } = data;
  const shouldReduceMotion = useReducedMotion();

  // ✅ Corrected type-safe animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.15,
        ease: [0.25, 0.1, 0.25, 1], // ✅ correct cubic-bezier easing
      },
    }),
  };

  return (
    <Suspense fallback={<div>Loading education...</div>}>
      <section
        id="education"
        aria-labelledby="education-title"
        className="py-5 position-relative bg-light overflow-hidden"
      >
        {/* Decorative background glows */}
        <div
          aria-hidden="true"
          className="position-absolute top-0 start-0 translate-middle opacity-25"
          style={{
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle at center, rgba(13,110,253,0.25), transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          aria-hidden="true"
          className="position-absolute bottom-0 end-0 translate-middle opacity-25"
          style={{
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle at center, rgba(111,66,193,0.25), transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Section Header */}
          <motion.header
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2
              id="education-title"
              className="display-5 fw-bold text-gradient mb-3"
            >
              Education
            </h2>
            <p className="text-muted fs-5 mb-0">
              My academic background and learning milestones
            </p>
          </motion.header>

          {/* Timeline */}
          <div className="timeline position-relative">
            <div className="row g-4">
              {education.map((edu, idx) => (
                <motion.article
                  key={idx}
                  className="col-md-6"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={idx}
                  role="group"
                  aria-label={`${edu.degree} at ${edu.college}`}
                >
                  <motion.div
                    whileHover={{
                      scale: shouldReduceMotion ? 1 : 1.03,
                      boxShadow: "0 12px 30px rgba(13,110,253,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 160 }}
                    className="card border-0 shadow-lg rounded-4 p-4 gradient-hover h-100"
                  >
                    <div className="card-body">
                      {/* Degree + Icon */}
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className="icon-circle text-white me-3"
                          aria-hidden="true"
                        >
                          <FaGraduationCap size={22} />
                        </div>
                        <h3 className="card-title fw-bold mb-0 text-dark fs-5">
                          {edu.degree}
                        </h3>
                      </div>

                      {/* College Info */}
                      <h4 className="card-subtitle text-muted mb-2 fs-6">
                        <FaUniversity
                          className="me-2 text-secondary"
                          aria-hidden="true"
                        />
                        <span>
                          {edu.college}, {edu.location}
                        </span>
                      </h4>

                      {/* Period & Grade */}
                      <p className="text-secondary small mb-3">
                        <strong>Period:</strong> {edu.period} |{" "}
                        <strong>Grade:</strong> {edu.grade}
                      </p>

                      {/* Key Points */}
                      <ul className="list-unstyled mb-0">
                        {edu.details.map((detail: string, i: number) => (
                          <motion.li
                            key={i}
                            className="d-flex align-items-start mb-2"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: shouldReduceMotion ? 0 : i * 0.1,
                              duration: 0.4,
                            }}
                            viewport={{ once: true }}
                          >
                            <FaRegLightbulb
                              className="text-warning me-2 mt-1"
                              aria-hidden="true"
                            />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>

            {/* Timeline divider */}
            <div
              className="timeline-line d-none d-md-block"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Local Styles */}
        <style jsx>{`
          section#education {
            scroll-margin-top: 80px;
          }

          .text-gradient {
            background: linear-gradient(90deg, #0d6efd, #6f42c1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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

          .gradient-hover {
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(6px);
            transition: all 0.4s ease;
          }

          .gradient-hover:hover,
          .gradient-hover:focus-within {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.95),
              rgba(13, 110, 253, 0.05)
            );
            outline: none;
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

          @media (max-width: 767px) {
            .timeline-line {
              display: none;
            }
          }
        `}</style>
      </section>
    </Suspense>
  );
}
