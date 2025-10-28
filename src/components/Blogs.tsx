// src/components/Blogs.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import data from "../data/portfolioData.json";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
  const { blogs } = data;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="blogs"
      className="py-5 bg-light position-relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background gradient overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,110,253,0.05), rgba(111,66,193,0.05))",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 fw-bold text-primary">Blogs & Insights</h2>
          <p className="text-muted fs-5">
            Sharing my thoughts, tutorials, and learnings from development
            journey.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="row g-4">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div
                className="card border-0 shadow-lg h-100 blog-card rounded-4 overflow-hidden"
                style={{
                  transition: "all 0.4s ease",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Blog Image with gradient overlay */}
                <div className="position-relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
                    }}
                  ></div>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h5 className="fw-bold text-dark mb-2">{blog.title}</h5>
                    <p className="text-muted small mb-3">{blog.description}</p>
                  </div>

                  {blog.url && (
                    <div className="mt-auto">
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill fw-semibold"
                      >
                        Read More <FaArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Decorative Shapes */}
        <div
          className="position-absolute top-0 end-0 translate-middle opacity-10"
          style={{
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle at center, rgba(13,110,253,0.3), transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>
        <div
          className="position-absolute bottom-0 start-0 translate-middle opacity-10"
          style={{
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle at center, rgba(111,66,193,0.3), transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>
      </div>
    </section>
  );
}
