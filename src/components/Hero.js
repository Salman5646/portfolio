"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const roles = [
  "Frontend Developer",
  "Full-Stack Engineer",
  "Software Developer",
  "Computer Engineering Student"
];

// Custom Inline SVG Icons for Brand Logos
const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Add characters
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          // Pause when full role is typed, then start deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Delete characters
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      const speed = isDeleting ? 50 : 100;
      timer = setTimeout(handleTyping, speed);
    };

    const initialSpeed = isDeleting ? 50 : 100;
    timer = setTimeout(handleTyping, initialSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        {/* Hero Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Seeking Internships
          </div>
          <h2 className={styles.greeting}>Hello, I am</h2>
          <h1 className={styles.name}>
            <span className="text-gradient">Salman Shaikh</span>
          </h1>
          <div className={styles.title}>
            {"I'm a "} <span className={styles.typingText}>{displayText}</span>
          </div>
          <p className={styles.description}>
            Frontend-focused Computer Engineering student passionate about building highly interactive, responsive, and user-centric web applications. Experienced in React, Next.js, PHP/MySQL, and foundational mobile development.
          </p>
          
          <div className={styles.ctaButtons}>
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, "projects")}
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Get In Touch
            </a>
          </div>

          <div className={styles.socials}>
            <span className={styles.socialsLabel}>Connect:</span>
            <a 
              href="https://www.linkedin.com/in/shaikh-salman-baa1293a3" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="https://github.com/Salman5646" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="mailto:ss0331429@gmail.com" 
              className={styles.socialIcon}
              aria-label="Email Address"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Hero Right Visual (Glassmorphic Code Block Mockup) */}
        <div className={styles.visual}>
          <div className={styles.visualInner}>
            <div className={styles.visualWindowBar}>
              <span className={`${styles.dot} ${styles.dotRed}`}></span>
              <span className={`${styles.dot} ${styles.dotYellow}`}></span>
              <span className={`${styles.dot} ${styles.dotGreen}`}></span>
            </div>
            <div className={styles.visualCode}>
              <div>
                <span className={styles.codeKeyword}>const</span>{" "}
                <span className={styles.codeVar}>developer</span> = &#123;
              </div>
              <div style={{ paddingLeft: "1.25rem" }}>
                name: <span className={styles.codeString}>{"'Salman Shaikh'"}</span>,
              </div>
              <div style={{ paddingLeft: "1.25rem" }}>
                role: <span className={styles.codeString}>{"'Frontend & Full-Stack'"}</span>,
              </div>
              <div style={{ paddingLeft: "1.25rem" }}>
                techStack: [
                <span className={styles.codeString}>{"'Next.js'"}</span>,{" "}
                <span className={styles.codeString}>{"'React'"}</span>,{" "}
                <span className={styles.codeString}>{"'ElysiaJS'"}</span>,{" "}
                <span className={styles.codeString}>{"'PostgreSQL'"}</span>
                ],
              </div>
              <div style={{ paddingLeft: "1.25rem" }}>
                awsCertified: <span className={styles.codeKeyword}>true</span>,
              </div>
              <div style={{ paddingLeft: "1.25rem" }}>
                passion: <span className={styles.codeString}>{"'Premium UI & Clean Code'"}</span>
              </div>
              <div>&#125;;</div>
              <br />
              <div className={styles.codeComment}>
                {"// Ready to turn ideas into code..."}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
