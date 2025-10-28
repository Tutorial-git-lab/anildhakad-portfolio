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
    AOS.init({ duration: 1000, once: true, offset: 120 });
  }, []);

  const sortedProjects = [...projects].sort((a, b) =>
    b.featured === true ? 1 : -1
  );

  return (
    <section
      id="projects"
      className="py-5 bg-light position-relative overflow-hidden"
    >
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
          <h2 className="display-5 fw-bold text-primary mb-3">Projects</h2>
          <p className="text-muted fs-5">
            A showcase of my creative and technical work
          </p>
        </div>

        <div className="row g-4">
          {sortedProjects.map((project, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
            >
              <div className="project-card card border-0 shadow-lg h-100 position-relative">
                {/* Featured Badge */}
                {project.featured && (
                  <span className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1 fw-semibold rounded-end shadow-sm d-flex align-items-center gap-1">
                    <FaStar /> Featured
                  </span>
                )}

                {/* Project Image */}
                {project.image && (
                  <div className="project-image position-relative overflow-hidden rounded-top">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="img-fluid w-100 project-img"
                    />
                    <div className="overlay d-flex align-items-center justify-content-center gap-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-light fw-semibold shadow"
                        >
                          Live Demo <FaExternalLinkAlt className="ms-1" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-light fw-semibold"
                        >
                          GitHub <FaGithub className="ms-1" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Project Info */}
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="fw-bold mb-2 text-dark">{project.title}</h5>
                  <p className="text-muted small flex-grow-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="mt-3">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="badge rounded-pill bg-gradient me-1 mb-1"
                          style={{
                            background:
                              "linear-gradient(45deg, #0d6efd, #6f42c1)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styling */}
      <style jsx>{`
        .project-card {
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        }

        .project-image {
          position: relative;
        }

        .project-img {
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.1);
          filter: brightness(0.85);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
