"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { FaBriefcase } from "react-icons/fa";
import data from "../data/portfolioData.json";

export default function Experience() {
  const { experience } = data;

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Experience | Anil Dhakad Portfolio</title>
        <meta
          name="description"
          content="Discover Anil Dhakad's professional experience, internships, and roles across software development and full-stack engineering."
        />
      </Head>

      <section
        id="experience"
        className="py-5 bg-light position-relative overflow-hidden"
        aria-labelledby="experience-heading"
      >
        <div className="container">
          {/* Section Title */}
          <motion.h2
            id="experience-heading"
            className="fw-bold text-center mb-5 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional Experience
          </motion.h2>

          {/* Timeline */}
          <div className="timeline position-relative">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className={`timeline-item mb-5 ${
                  idx % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="card shadow-lg border-0 rounded-4 p-4 experience-card h-100 hover-card"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={`${exp.title} at ${exp.company}`}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-circle text-white me-3">
                      <FaBriefcase size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="fw-bold mb-0 text-dark fs-5">
                        {exp.title}
                      </h3>
                      <small className="text-muted">{exp.company}</small>
                    </div>
                  </div>

                  <p className="text-secondary mb-2">
                    <strong>Duration:</strong> {exp.duration} |{" "}
                    <span className="badge bg-primary bg-opacity-75 ms-1">
                      {exp.type}
                    </span>
                  </p>

                  <p
                    className="text-muted mb-3"
                    aria-label={`Location: ${exp.location}`}
                  >
                    <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                    {exp.location}
                  </p>

                  <ul className="list-unstyled mb-0">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="mb-2 d-flex align-items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <i
                          className="bi bi-check-circle-fill text-success me-2 mt-1"
                          aria-hidden="true"
                        ></i>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔹 Styles */}
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
            border-radius: 8px;
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

          .experience-card {
            transition: all 0.4s ease;
            background: rgba(255, 255, 255, 0.9);
            border-left: 5px solid transparent;
            backdrop-filter: blur(10px);
          }

          .hover-card:hover {
            border-left: 5px solid #007bff;
            box-shadow: 0 0 25px rgba(0, 123, 255, 0.25);
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.95),
              rgba(245, 250, 255, 0.9)
            );
          }

          .icon-circle {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: linear-gradient(135deg, #007bff, #00c6ff);
            box-shadow: 0 0 15px rgba(0, 123, 255, 0.4);
            flex-shrink: 0;
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
    </>
  );
}
