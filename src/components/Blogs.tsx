// src/components/Blogs.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Head from "next/head";
import data from "../data/portfolioData.json";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
  const { blogs } = data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Blogs & Insights | My Portfolio</title>
        <meta
          name="description"
          content="Explore tutorials, coding insights, and web development guides written by me. Learn about modern frontend and backend technologies."
        />
        <meta
          name="keywords"
          content="React, Next.js, Web Development, Blog, Programming"
        />
      </Head>

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
            <h2 className="display-5 fw-bold text-primary text-uppercase mb-3">
              Blogs & Insights
            </h2>
            <p className="text-muted fs-5 mb-0">
              Sharing my thoughts, tutorials, and learnings from my developer
              journey.
            </p>
            <div className="mx-auto mt-3" style={{ width: "70px" }}>
              <div className="border-bottom border-3 border-primary"></div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="row g-4">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="col-md-6 col-lg-4"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 150}
              >
                <div
                  className="card border-0 shadow-lg h-100 blog-card rounded-4 overflow-hidden bg-white"
                  style={{
                    transition: "all 0.4s ease",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Blog Image */}
                  <div className="position-relative overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      loading="lazy"
                      className="card-img-top blog-image"
                      style={{
                        objectFit: "cover",
                        height: "250px",
                        transition: "transform 0.6s ease",
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
                      <p className="text-muted small mb-3">
                        {blog.description}
                      </p>
                    </div>

                    {blog.url && (
                      <div className="mt-auto">
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill fw-semibold shimmer-button"
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

          {/* Decorative Gradient Shapes */}
          <div
            className="position-absolute top-0 end-0 translate-middle opacity-10 blur-effect"
            style={{
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle at center, rgba(13,110,253,0.4), transparent 70%)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          ></div>
          <div
            className="position-absolute bottom-0 start-0 translate-middle opacity-10 blur-effect"
            style={{
              width: "250px",
              height: "250px",
              background:
                "radial-gradient(circle at center, rgba(111,66,193,0.4), transparent 70%)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          ></div>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(13, 110, 253, 0.15);
          }

          .blog-card:hover .blog-image {
            transform: scale(1.08);
          }

          .shimmer-button {
            position: relative;
            overflow: hidden;
          }

          .shimmer-button::after {
            content: "";
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.6),
              rgba(255, 255, 255, 0.2)
            );
            animation: shimmer 2s infinite;
          }

          @keyframes shimmer {
            0% {
              left: -75%;
            }
            100% {
              left: 125%;
            }
          }

          .blur-effect {
            filter: blur(80px);
          }

          @media (max-width: 768px) {
            .display-5 {
              font-size: 2rem;
            }
            .fs-5 {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}
