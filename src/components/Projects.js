import React from "react";
import { FolderGit2, CheckCircle2, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

// Custom Inline SVG Icon for GitHub Logo
const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Projects() {
  const projectsData = [
    {
      title: "Shopr — E-Commerce Web App",
      folder: "/shopr",
      description: "A full-stack online storefront equipped with catalog browsing, interactive cart dynamics, user reviews, and comprehensive role management.",
      features: [
        "Role-based controls with dedicated administrative user audit dashboards",
        "Tamper-proof authentication using HttpOnly JWT cookies and Google OAuth",
        "Email OTP integration facilitating secure password resets (6-digit, 10-min expiry)",
        "Merged guest shopping carts into user account databases on login"
      ],
      tech: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "shadcn/ui", "JWT"],
      demoUrl: "https://shopr-first.vercel.app",
      githubUrl: "https://github.com/Salman5646/react-shadcn",
    },
    {
      title: "Full-Stack Social Platform (Chatting Website)",
      folder: "/chat",
      description: "A PHP-based real-time communication platform built on strict security guidelines, featuring user messaging, post feeds, and automated image captioning.",
      features: [
        "Real-time style user messaging supporting text and image sharing",
        "Secure session controls utilizing password_hash() and Google OAuth integration",
        "AI caption module to generate descriptions for uploaded post images",
        "Prepared SQL Statements preventing SQL injection and Remote Code Execution"
      ],
      tech: ["PHP 8+", "MySQL", "JavaScript", "Bootstrap 5", "AJAX", "Prepared Statements"],
      demoUrl: "http://chat.byethost17.com/home/",
      githubUrl: "https://github.com/Salman5646/chatting-website-php",
    },

    {
      title: "Java Socket Multiplayer App",
      folder: "/Socket Mp",
      description: "A client-server multiplayer network infrastructure built on raw socket channels, thread concurrency, and multi-threading logic.",
      features: [
        "TCP/IP raw server socket bindings for client connection pooling",
        "Multi-threaded background threads to handle synchronous message delivery",
        "Custom serialization mechanisms and thread safety routines to block deadlocks"
      ],
      tech: ["Java", "TCP/IP Sockets", "Java Concurrency", "Multi-threading"],
      githubUrl: "https://github.com/Salman5646",
    },
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">
          Key <span>Projects</span>
        </h2>

        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={`glass-card ${styles.card}`}>
              {/* Header: Title and Folder */}
              <div className={styles.cardHeader}>
                <div className={styles.titleArea}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div style={{ marginTop: "0.25rem" }}>
                    <span className={styles.folderBadge}>
                      <FolderGit2 size={14} />
                      {project.folder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={styles.description}>{project.description}</p>

              {/* Features List */}
              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>Core Features</h4>
                <div className={styles.featureList}>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.featureCheck} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className={styles.techContainer}>
                {project.tech.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.techBadge}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className={styles.cardFooter}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.linkBtn} ${styles.linkBtnOutline}`}
                >
                  <GithubIcon size={16} /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
