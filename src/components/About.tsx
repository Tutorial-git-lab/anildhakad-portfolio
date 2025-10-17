// src/components/About.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import data from "../data/portfolioData.json";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function About() {
  const { personal, highlights } = data;
  const { profileImage, location, email, phone, resumeUrl, hireMe } = personal;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">About Me</h2>
          <p className="text-muted fs-5">
            A brief introduction and highlights of my professional journey
          </p>
        </div>

        {/* Bio with Profile Image */}
        <div className="row align-items-center mb-5">
          <div
            className="col-md-4 text-center mb-3 mb-md-0"
            data-aos="fade-right"
          >
            <Image
              src={profileImage}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-circle shadow"
            />
          </div>
          <div className="col-md-8" data-aos="fade-left">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="fs-6 mb-3">{personal.bio}</p>
                <ul className="list-unstyled mb-3">
                  <li className="mb-1">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    {location}
                  </li>
                  <li className="mb-1">
                    <FaEnvelope className="text-primary me-2" />
                    <a
                      href={`mailto:${email}`}
                      className="text-decoration-none"
                    >
                      {email}
                    </a>
                  </li>
                  <li className="mb-1">
                    <FaPhone className="text-primary me-2" />
                    <a href={`tel:${phone}`} className="text-decoration-none">
                      {phone}
                    </a>
                  </li>
                </ul>
                <div className="d-flex gap-3">
                  <a
                    href={resumeUrl}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Download Resume
                  </a>
                  <a href={hireMe} className="btn btn-outline-primary">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="row">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4 mb-3"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-start">
                  <FaCheckCircle className="text-primary me-3 fs-4 mt-1" />
                  <p className="mb-0">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
