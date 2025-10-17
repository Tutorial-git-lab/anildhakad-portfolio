"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/portfolioData.json";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

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
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with API call if needed
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
          Contact Me
        </h2>

        {submitted && (
          <div
            className="alert alert-success text-center"
            data-aos="fade-down"
            role="alert"
          >
            Thank you! Your message has been sent.
          </div>
        )}

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5" data-aos="fade-right">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
              <h5 className="fw-bold mb-4">Get in Touch</h5>
              <p className="mb-3">
                <FiMail className="me-2 text-primary" size={20} />
                <a
                  href={`mailto:${personal.email}`}
                  className="text-decoration-none"
                >
                  {personal.email}
                </a>
              </p>
              <p className="mb-3">
                <FiPhone className="me-2 text-primary" size={20} />
                <a
                  href={`tel:${personal.phone}`}
                  className="text-decoration-none"
                >
                  {personal.phone}
                </a>
              </p>
              <p className="mb-0">
                <FiMapPin className="me-2 text-primary" size={20} />
                {personal.location}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7" data-aos="fade-left">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control form-control-lg"
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
                  className="btn btn-primary btn-lg w-100 fw-bold shadow-sm"
                  data-aos="zoom-in"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Styling */}
      <style jsx>{`
        section#contact {
          scroll-margin-top: 80px;
        }
      `}</style>
    </section>
  );
}
