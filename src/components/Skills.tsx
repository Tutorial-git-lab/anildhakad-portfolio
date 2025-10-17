"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";

export default function Skills() {
  const { skills } = data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
          My Skills
        </h2>

        <div className="row g-4">
          {skills.map((skill, idx) => (
            <div
              className="col-md-4"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
                <h5 className="card-title fw-bold mb-3">{skill.category}</h5>
                <div className="d-flex flex-column gap-3">
                  {skill.items.map((item, i) => (
                    <div key={i}>
                      <div className="d-flex justify-content-between mb-1">
                        <span>{item.name}</span>
                        <span className="text-muted">{item.level}</span>
                      </div>
                      <div className="progress" style={{ height: "8px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${item.percentage}%` }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
