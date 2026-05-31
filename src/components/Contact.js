"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className={styles.grid}>
          {/* Left Column: Direct Info */}
          <div>
            <span className={styles.subtitle}>Contact Details</span>
            <h3 className={styles.title}>{"Let's Connect"}</h3>
            <p className={styles.text}>
              I am actively seeking Frontend Developer / Software Development Internship opportunities. Feel free to reach out for a collaboration or just to say hello!
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>
                    <a href="mailto:ss0331429@gmail.com" style={{ display: "block" }}>
                      ss0331429@gmail.com
                    </a>
                    <a href="mailto:ss9167421@gmail.com" style={{ display: "block", marginTop: "0.25rem" }}>
                      ss9167421@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Phone</div>
                  <div className={styles.infoValue}>
                    <a href="tel:+919930731158" style={{ display: "block" }}>
                      +91 9930731158
                    </a>
                    <a href="tel:+917977762774" style={{ display: "block", marginTop: "0.25rem" }}>
                      +91 7977762774
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Mumbai, India</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <Globe size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Portfolio Website</div>
                  <a 
                    href="http://sport.byethost32.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.infoValue}
                  >
                    sport.byethost32.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className={`glass-card ${styles.formCard}`}>
              {isSubmitted ? (
                <div className={styles.successMsg}>
                  {"Thank you! Your message has been sent successfully. I'll get back to you shortly."}
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  {/* Name Input */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  {/* Message Input */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${styles.textarea} ${errors.message ? styles.errorInput : ""}`}
                      placeholder="Hi Salman, let's talk about an internship..."
                    />
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary styles.submitBtn">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
