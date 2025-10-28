"use client";

import { motion, Variants } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import data from "../data/portfolioData.json";

export default function Skills() {
  const { skills } = data;
  const icons = [FaCode, FaDatabase, FaLaptopCode, FaCloud, FaTools];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.17, 0.55, 0.55, 1],
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-5 position-relative overflow-hidden bg-light"
      aria-labelledby="skills-title"
    >
      {/* Background gradient effect */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(13,110,253,0.1), transparent 60%), radial-gradient(circle at 80% 70%, rgba(111,66,193,0.15), transparent 60%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Heading */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 id="skills-title" className="display-5 fw-bold text-primary mb-3">
            My Skills
          </h2>
          <p className="text-muted fs-5">
            A blend of technologies I use to build powerful and scalable
            applications
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="row g-4">
          {skills.map((skill, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                className="col-md-6 col-lg-4"
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <article
                  className="card h-100 skill-card border-0 rounded-4 shadow-lg p-4 position-relative overflow-hidden"
                  aria-label={`Skill category: ${skill.category}`}
                >
                  {/* Icon Circle with top margin added */}
                  <div className="icon-circle shadow mb-3">
                    <Icon className="text-white" size={26} aria-hidden="true" />
                  </div>

                  <h3 className="fw-bold mb-4 text-primary border-bottom pb-2 fs-5 text-center">
                    {skill.category}
                  </h3>

                  <div className="d-flex flex-column gap-3">
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="d-flex justify-content-between mb-1 small">
                          <span className="fw-semibold">{item.name}</span>
                          <span className="text-muted">{item.level}</span>
                        </div>
                        <div
                          className="progress rounded-pill bg-white shadow-sm"
                          style={{ height: "10px" }}
                        >
                          <motion.div
                            className="progress-bar gradient-bar"
                            role="progressbar"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${item.percentage}%`,
                              transition: { duration: 1 },
                            }}
                            aria-valuenow={item.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </article>
              </motion.div>
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
          text-align: center;
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto; /* Adds space above and below */
        }

        .gradient-bar {
          background: linear-gradient(90deg, #0d6efd, #6f42c1);
        }

        @media (max-width: 768px) {
          .skill-card {
            padding: 1.5rem;
          }
          .icon-circle {
            width: 50px;
            height: 50px;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
