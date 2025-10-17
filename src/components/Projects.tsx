// src/components/Projects.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

export default function Projects() {
  const { projects } = data;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Sort projects: featured first
  const sortedProjects = [...projects].sort((a, b) => {
    return b.featured === true ? 1 : -1;
  });

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Projects</h2>
          <p className="text-muted fs-5">Some of my recent projects</p>
        </div>

        <div className="row">
          {sortedProjects.map((project, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="card h-100 shadow-sm border-0 position-relative">
                {/* Featured Badge */}
                {project.featured && (
                  <span
                    className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1 fw-bold"
                    style={{ borderBottomRightRadius: "0.25rem" }}
                  >
                    <FaStar className="me-1" /> Featured
                  </span>
                )}

                {/* Project Image */}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="mb-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="badge bg-secondary me-1 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto d-flex gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        Demo <FaExternalLinkAlt className="ms-1" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-dark"
                      >
                        GitHub <FaGithub className="ms-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
