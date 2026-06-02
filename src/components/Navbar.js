"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code2, FolderGit2, Mail } from "lucide-react";
import styles from "./Navbar.module.css";

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section on scroll
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Skills", id: "skills", icon: Code2 },
    { label: "Projects", id: "projects", icon: FolderGit2 },
    { label: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}>
      {/* Mobile Menu Overlay Backdrop */}
      <div 
        className={`${styles.mobileOverlay} ${isMobileOpen ? styles.mobileOverlayActive : ""}`} 
        onClick={() => setIsMobileOpen(false)} 
      />

      <div className={styles.container}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, "home")}>
          <span className="text-gradient">Salman</span>.Dev
        </a>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.navLinkActive : ""
              }`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:ss0331429@gmail.com"
            className={styles.resumeBtn}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`${styles.mobileNav} ${isMobileOpen ? styles.mobileNavOpen : ""}`}>
          <div className={styles.mobileLinks}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${styles.mobileNavLink} ${
                    activeSection === item.id ? styles.mobileNavLinkActive : ""
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <Icon size={20} className={styles.mobileNavIcon} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="mailto:ss0331429@gmail.com"
              className={styles.mobileResumeBtn}
              onClick={() => setIsMobileOpen(false)}
            >
              <Mail size={18} />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Social Links inside Mobile Drawer */}
          <div className={styles.mobileSocials}>
            <a 
              href="https://www.linkedin.com/in/shaikh-salman-baa1293a3" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileSocialIcon}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="https://github.com/Salman5646" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileSocialIcon}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="mailto:ss0331429@gmail.com"
              className={styles.mobileSocialIcon}
              aria-label="Email Address"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
