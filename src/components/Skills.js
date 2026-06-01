import React from "react";
import { Code2, Globe, Smartphone, Cloud, Database, Cpu } from "lucide-react";
import styles from "./Skills.module.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      skills: ["PHP", "JavaScript (ES6+)", "Dart", "Java", "Python", "SQL", "C", "C++"],
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: ["Next.js", "React", "ElysiaJS", "Node.js", "Express", "HTML5", "CSS3", "Bootstrap 5"],
    },
    {
      title: "Mobile App Dev",
      icon: <Smartphone size={24} />,
      skills: ["Flutter", "Dart", "Java (Android)", "SQLite", "Material Design", "FutureBuilder"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Git / GitHub", "Vercel", "Linux", "XAMPP", "Tomcat"],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MySQL (Joins, Triggers)", "SQLite", "Database Design", "ER Diagrams", "Query Optimization"],
    },
    {
      title: "Core CS Concepts",
      icon: <Cpu size={24} />,
      skills: ["Data Structures & Algorithms", "OOP", "Operating Systems (OS)", "SDLC", "Computer Networks", "HTTP / HTTPS"],
    },
  ];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className="section-title">
          My <span>Technical Skills</span>
        </h2>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.tagsContainer}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
