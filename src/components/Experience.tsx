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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
          Experience
        </h2>

        <div className="row g-4">
          {experience.map((exp, idx) => (
            <div
              className="col-md-6"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="card shadow-sm rounded-4 h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <FaBriefcase className="text-primary me-2" />
                    {exp.title}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {exp.company}, {exp.location}
                  </h6>
                  <p className="text-secondary mb-2">
                    <strong>Duration:</strong> {exp.duration} |{" "}
                    <strong>Type:</strong> {exp.type}
                  </p>
                  <ul className="list-group list-group-flush">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="list-group-item bg-transparent border-0 ps-0 d-flex align-items-start"
                      >
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
