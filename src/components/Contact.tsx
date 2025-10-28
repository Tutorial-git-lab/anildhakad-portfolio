// src/components/Contact.tsx
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const { personal } = data;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // TODO: Integrate with API or EmailJS
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* SEO Tags */}
      <Head>
        <title>Contact | My Portfolio</title>
        <meta
          name="description"
          content="Get in touch for collaborations, freelance work, or full-stack web development opportunities. Let's build something amazing together!"
        />
      </Head>

      <section
        id="contact"
        className="py-5 position-relative bg-light overflow-hidden"
        data-aos="fade-up"
      >
        {/* Decorative Orbs */}
        <div
          className="position-absolute top-0 start-0 translate-middle opacity-25 blur-effect"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle at center, rgba(13,110,253,0.3), transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>
        <div
          className="position-absolute bottom-0 end-0 translate-middle opacity-25 blur-effect"
          style={{
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle at center, rgba(111,66,193,0.3), transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Section Title */}
          <h2
            className="fw-bold text-center display-5 mb-5 text-primary text-uppercase"
            data-aos="fade-down"
          >
            Let&apos;s Connect
          </h2>

          {/* Success Message */}
          {submitted && (
            <div
              className="alert alert-success text-center rounded-pill fw-semibold shadow-sm mx-auto w-75 animate__animated animate__fadeInDown"
              role="alert"
            >
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="row g-4 mt-4 align-items-stretch">
            {/* Contact Info */}
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="p-4 bg-white rounded-4 shadow-lg h-100 glass-card">
                <h5 className="fw-bold mb-4 text-dark">Get in Touch</h5>
                <p className="text-muted mb-4">
                  I&apos;d love to hear about your projects or opportunities.
                  Feel free to reach out anytime.
                </p>

                <div className="d-flex align-items-center mb-3">
                  <FiMail className="me-3 text-primary fs-4" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    {personal.email}
                  </a>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FiPhone className="me-3 text-primary fs-4" />
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    {personal.phone}
                  </a>
                </div>

                <div className="d-flex align-items-start">
                  <FiMapPin className="me-3 text-primary fs-4" />
                  <p className="text-dark fw-semibold mb-0">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7" data-aos="fade-left" data-aos-delay="200">
              <div className="p-4 bg-white rounded-4 shadow-lg glass-card">
                <form onSubmit={handleSubmit} aria-label="Contact form">
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label visually-hidden"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label visually-hidden"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="message"
                      className="form-label visually-hidden"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="Your Message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-bold rounded-pill shadow-sm d-flex justify-content-center align-items-center gap-2 shimmer-button"
                    data-aos="zoom-in"
                    aria-label="Send message"
                  >
                    <FiSend /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Local Styles */}
        <style jsx global>{`
          section#contact {
            scroll-margin-top: 80px;
          }

          .glass-card {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
          }

          .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(13, 110, 253, 0.15);
          }

          input:focus,
          textarea:focus {
            border-color: #0d6efd !important;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
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
            filter: blur(90px);
          }

          /* Dark Mode Support */
          @media (prefers-color-scheme: dark) {
            section#contact {
              background-color: #121212 !important;
              color: #eaeaea;
            }
            .glass-card {
              background: rgba(30, 30, 30, 0.85);
              color: #f1f1f1;
            }
            .form-control {
              background-color: rgba(255, 255, 255, 0.05);
              color: #fff;
            }
            .form-control::placeholder {
              color: #aaa;
            }
          }
        `}</style>
      </section>
    </>
  );
}
