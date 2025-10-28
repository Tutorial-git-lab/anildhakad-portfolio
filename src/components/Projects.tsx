"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import data from "../data/portfolioData.json";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

export default function Projects() {
  const { projects } = data;

  // ✅ Type-safe Framer Motion variant
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier for "easeOut"
      },
    }),
  };

  // ✅ Sort featured projects first
  const sortedProjects = [...projects].sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  );

  return (
    <section
      id="projects"
      className="py-5 bg-light position-relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      {/* Gradient background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(13,110,253,0.1), transparent 60%), radial-gradient(circle at 80% 70%, rgba(111,66,193,0.15), transparent 60%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2
            id="projects-title"
            className="display-5 fw-bold text-primary mb-3"
          >
            Projects
          </h2>
          <p className="text-muted fs-5">
            A showcase of my creative and technical work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="row g-4">
          {sortedProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="col-md-6 col-lg-4"
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <article
                className="project-card card border-0 shadow-lg h-100 position-relative"
                aria-label={`Project: ${project.title}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <span
                    className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1 fw-semibold rounded-end shadow-sm d-flex align-items-center gap-1"
                    aria-label="Featured project"
                  >
                    <FaStar aria-hidden="true" /> Featured
                  </span>
                )}

                {/* Project Image */}
                {project.image && (
                  <div className="project-image position-relative overflow-hidden rounded-top">
                    <Image
                      src={project.image}
                      alt={project.title || "Project image"}
                      width={400}
                      height={250}
                      className="img-fluid w-100 project-img"
                      loading="lazy"
                    />
                    <div className="overlay d-flex align-items-center justify-content-center gap-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
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
                          aria-label={`GitHub repository for ${project.title}`}
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
                  <h3 className="fw-bold mb-2 text-dark fs-5">
                    {project.title}
                  </h3>
                  <p className="text-muted small flex-grow-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <ul
                      className="list-inline mt-3 mb-0"
                      aria-label="Tech stack used"
                    >
                      {project.techStack.map((tech: string, i: number) => (
                        <li key={i} className="list-inline-item">
                          <span
                            className="badge rounded-pill text-white px-2 py-1"
                            style={{
                              background:
                                "linear-gradient(45deg, #0d6efd, #6f42c1)",
                            }}
                          >
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </motion.div>
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

        .project-img {
          transition: transform 0.6s ease, filter 0.6s ease;
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
