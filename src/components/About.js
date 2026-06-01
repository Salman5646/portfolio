import React from "react";
import styles from "./About.module.css";

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      school: "Shah And Anchor Kutchhi Engineering College",
      year: "2024 – 2027",
      grade: "Pursuing",
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "VES Polytechnic",
      year: "2021 – 2024",
      grade: "Aggregate: 91.31%",
    },
    {
      degree: "Secondary School Certificate (Class X)",
      school: "Maharashtra State Board",
      year: "2021",
      grade: "Percentage: 87.40%",
    },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">
          About <span>Me & Experience</span>
        </h2>
        
        <div className={styles.grid}>
          {/* Left Column: Bio & Education */}
          <div>
            <h3 className={styles.subtitle}>My Journey</h3>
            <h4 className={styles.title}>Who I Am</h4>
            <p className={styles.text}>
              I am a <span>Computer Engineering student</span> currently pursuing my B.Tech at Shah And Anchor Kutchhi Engineering College. With a strong base built during my 91.31% aggregate Diploma at VES Polytechnic, I specialize in creating responsive, smooth, and high-performance applications.
            </p>
            <p className={styles.text}>
              I enjoy bridging the gap between design and functionality. I am focused on both backend and frontend development, with solid knowledge of Java and basic knowledge of Flutter. My technical skill set covers modern web standards (React, Next.js), backend integrations (Node.js, PHP, MySQL, Java), cloud platforms (AWS), and mobile development (Flutter).
            </p>
            
            <h3 className={`${styles.subtitle} ${styles.educationTitle}`} style={{ marginTop: "2rem" }}>
              Education
            </h3>
            <div className={styles.education}>
              {education.map((edu, idx) => (
                <div key={idx} className={`glass-card ${styles.eduCard}`}>
                  <div className={styles.eduHeader}>
                    <h4 className={styles.degree}>{edu.degree}</h4>
                    <span className={styles.year}>{edu.year}</span>
                  </div>
                  <p className={styles.school}>{edu.school}</p>
                  <p className={styles.grade}>{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div>
            <h3 className={styles.subtitle}>My Path</h3>
            <h4 className={styles.title}>Professional Experience</h4>
            
            <div className={styles.timeline}>
              {/* ILM Innovates UX Intern */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={`glass-card ${styles.expCard}`}>
                  <div className={styles.expHeader}>
                    <div>
                      <h4 className={styles.roleTitle}>Full-Stack Developer Intern</h4>
                      <p className={styles.company}>
                        <a 
                          href="https://www.ilmux.com/en" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: "var(--accent-purple)", textDecoration: "underline" }}
                        >
                          ILM Innovates UX
                        </a>
                      </p>
                    </div>
                    <span className={styles.date}>May 2026 – Present</span>
                  </div>
                  <ul className={styles.expList}>
                    <li className={styles.expBullet}>
                      Architecting and developing full-stack web features and layouts for core product modules.
                    </li>
                    <li className={styles.expBullet}>
                      Created and optimized high-performance backend REST APIs using the ElysiaJS framework.
                    </li>
                    <li className={styles.expBullet}>
                      Designed, queried, and integrated relational database schemas using PostgreSQL.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Insys Intern */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={`glass-card ${styles.expCard}`}>
                  <div className={styles.expHeader}>
                    <div>
                      <h4 className={styles.roleTitle}>Web Development Intern</h4>
                      <p className={styles.company}>
                        <a 
                          href="https://drive.google.com/file/d/17LwthJKsxEmkT2Z5CGJucaqus2YK6U6V/view?usp=sharing" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: "var(--accent-cyan)", textDecoration: "underline" }}
                        >
                          Insys Technologies
                        </a>
                      </p>
                    </div>
                    <span className={styles.date}>June 2023 – July 2023</span>
                  </div>
                  <ul className={styles.expList}>
                    <li className={styles.expBullet}>
                      Debugged and resolved UI/UX inconsistencies across internal web modules using CSS and JavaScript, enhancing layout consistency.
                    </li>
                    <li className={styles.expBullet}>
                      Collaborated with the development team to fix backend integration issues and maintain application performance.
                    </li>
                    <li className={styles.expBullet}>
                      Streamlined data entry workflows by optimizing basic SQL queries, improving data retrieval efficiency.
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* SAKEC Student Developer */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={`glass-card ${styles.expCard}`}>
                  <div className={styles.expHeader}>
                    <div>
                      <h4 className={styles.roleTitle}>Student Developer</h4>
                      <p className={styles.company}>Academic Projects & Open Source</p>
                    </div>
                    <span className={styles.date}>2021 – Present</span>
                  </div>
                  <ul className={styles.expList}>
                    <li className={styles.expBullet}>
                      Developed and maintained full-stack web products, mobile applications, and offline database storage solutions.
                    </li>
                    <li className={styles.expBullet}>
                      Integrated APIs, managed database constraints (optimization, joins, triggers), and worked with cloud services like AWS.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
