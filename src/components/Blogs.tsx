// src/components/Blogs.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import Image from "next/image";

export default function Blogs() {
  const { blogs } = data;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="blogs" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Blogs</h2>
          <p className="text-muted fs-5">Some of my recent blog posts</p>
        </div>

        <div className="row">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="card h-100 shadow-sm border-0">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  {blog.url && (
                    <a
                      href={blog.url}
                      target="_blank"
                      className="btn btn-sm btn-primary"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
