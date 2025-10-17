"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import { FaGraduationCap } from "react-icons/fa";

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
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
          Education
        </h2>

        <div className="row g-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="col-md-6"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <FaGraduationCap className="text-primary me-2" />
                    {edu.degree}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {edu.school}, {edu.location}
                  </h6>
                  <p className="text-secondary mb-2">
                    <strong>Period:</strong> {edu.period} |{" "}
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                  <ul className="list-group list-group-flush">
                    {edu.details.map((detail, i) => (
                      <li
                        key={i}
                        className="list-group-item bg-transparent border-0 ps-0 d-flex align-items-start"
                      >
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>{detail}</span>
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
