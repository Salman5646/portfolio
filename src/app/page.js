import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* Dynamic Header & Navigation */}
      <Navbar />

      {/* Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Styled Footer */}
      <footer 
        style={{
          borderTop: "1px solid var(--border-card)",
          background: "rgba(10, 15, 29, 0.9)",
          padding: "2.5rem 0",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-heading)"
        }}
      >
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p>© {new Date().getFullYear()} Salman Shaikh. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Designed & built with Next.js, React, and Vanilla CSS. Hosted on Vercel.
          </p>
        </div>
      </footer>
    </>
  );
}
