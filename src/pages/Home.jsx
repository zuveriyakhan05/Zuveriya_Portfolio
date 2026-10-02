import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { WhatIDoSection } from "../components/WhatIDoSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { Certificates } from "../components/Certificates";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAECE3] text-[#2D283E] selection:bg-[#E47E64] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <ProjectsSection />
        <SkillsSection />
        <Certificates />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};