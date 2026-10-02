import React, { useState } from "react";
import { cn } from "../lib/utils";
import { SparkleStar } from "./DecorativeFlower";

const certificates = [
  {
    title: "kAlzen - A GenAI Product Hackathon",
    issuer: "Unstop",
    category: "hackathon",
    file: "/kAlzen.pdf",
  },
  {
    title: "AI - ML Virtual Internship",
    issuer: "Google for Developers",
    category: "internship",
    file: "/AI ML.pdf",
  },
  {
    title: "UI/UX Design Internship",
    issuer: "ThinkMile",
    category: "internship",
    file: "/Zuveriya.pdf",
  },
  {
    title: "Introduction to C++",
    issuer: "Sololearn",
    category: "course",
    file: "/Introduction to C++.pdf",
  },
  {
    title: "Basics of Data Structures and Algorithms",
    issuer: "Simplilearn",
    category: "course",
    file: "/Basics of DSA.pdf",
  },
  {
    title: "Kick start in tech skills: AI - ML & Cybersecurity",
    issuer: "Ganpat University",
    category: "workshop",
    file: "/Kick start.pdf",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    category: "course",
    file: "/DA with Python.pdf",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "Google for Developers",
    category: "internship",
    file: "/Android Developer.pdf",
  },
  {
    title: "Prajwalan 2k26",
    issuer: "SRKR Engineering College",
    category: "hackathon",
    file: "/Prajwalan.pdf",
  },
  {
    title: "CodeXccelerate",
    issuer: "GATEWAY EDUCATION, Delhi-NCR",
    category: "hackathon",
    file: "/CodeXccelerate.pdf",
  },
  {
    title: "Gen - AI Workshop",
    issuer: "Adani Institute of Digital Technology Management",
    category: "workshop",
    file: "/Gen - AI Workshop.pdf",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    category: "course",
    file: "/Split_20260424_1047.pdf",
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    category: "course",
    file: "/DV with python.pdf",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    category: "course",
    file: "/Data Analysis with python.pdf",
  },
  {
    title: "CodeVersity",
    issuer: "Indian Institute of Technology Gandhinagar",
    category: "hackathon",
    file: "/CodeVersity.pdf",
  },
  {
    title: "CodeAlpha Internship",
    issuer: "CodeAlpha",
    category: "internship",
    file: "/CodeAlpha.pdf",
  },
  {
    title: "Elite Her Hackathon",
    issuer: "Elite Her Hackathon",
    category: "hackathon",
    file: "/Elite her.pdf",
  },
  {
    title: "Data Analytics Using Python and SQL",
    issuer: "ADS Foundation",
    category: "course",
    file: "/ADS.pdf",
  },
  {
    title: "Data Analytics Internship",
    issuer: "Decode Labs",
    category: "internship",
    file: "/Decode labs.pdf",
  },
  {
    title: "Data Analytics Internship",
    issuer: "Sysslan IT Solutions",
    category: "internship",
    file: "/Sysslan.pdf",
  },
  {
    title: "Review of Research Paper on Cloud & Edge Computing",
    issuer: "Sysslan IT Solutions",
    category: "research",
    file: "/research paper certificate.pdf",
  }
];

const categories = ["all", "hackathon", "internship", "course", "workshop", "research"];

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredCerts = certificates.filter(
    (cert) => activeCategory === "all" || cert.category === activeCategory
  );

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 bg-[#FFFDF9] text-[#2D283E] relative border-t border-[#E5CFC1]/40">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Tag */}
        <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#2D283E]/70 uppercase mb-8">
          <span className="text-[#E47E64]">05</span>
          <span>CERTIFICATES & ACHIEVEMENTS</span>
        </div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">

          {/* Left — headline */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-[11px] font-bold tracking-widest text-[#2D283E]/60 uppercase">
              CONTINUOUS LEARNING & CREDENTIALS
            </p>
            <div className="relative inline-block">
              <h2 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                  MY
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal italic text-[#E47E64]">
                  CERTIFICATIONS.
                </span>
              </h2>
              <SparkleStar className="absolute -top-3 -right-6 w-5 h-5 text-[#E47E64]" />
            </div>
          </div>

          {/* Right — cute sticker cluster */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center gap-8 relative h-40">

            {/* Sticker 1 — keep learning tag */}
            <div className="transform -rotate-6 sticky-note px-4 py-3 rounded-lg flex flex-col items-center gap-1 w-32">
              <span className="text-2xl">📚</span>
              <span className="font-script text-sm text-[#E47E64]">keep learning</span>
            </div>

            {/* Sticker 2 — star burst doodle */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                {[0,45,90,135,180,225,270,315].map((deg, i) => (
                  <line
                    key={i}
                    x1="40" y1="40"
                    x2={40 + 28 * Math.cos((deg * Math.PI) / 180)}
                    y2={40 + 28 * Math.sin((deg * Math.PI) / 180)}
                    stroke="#E47E64" strokeWidth="2" strokeLinecap="round" opacity="0.5"
                  />
                ))}
                <circle cx="40" cy="40" r="8" fill="#E47E64" opacity="0.2" />
                <circle cx="40" cy="40" r="4" fill="#E47E64" opacity="0.6" />
              </svg>
              <span className="font-script text-xs text-[#2D283E]/40">certified ✦</span>
            </div>

            {/* Sticker 3 — achievement badge */}
            <div className="transform rotate-4 sticky-note px-4 py-3 rounded-lg flex flex-col items-center gap-1 w-32">
              <span className="text-2xl">🏅</span>
              <span className="font-script text-sm text-[#E47E64]">achievement</span>
            </div>

            {/* Floating sparkles */}
            <SparkleStar className="absolute top-2 left-1/2 w-3 h-3 text-[#E47E64]/40" />
            <SparkleStar className="absolute bottom-2 left-[40%] w-4 h-4 text-[#2D283E]/20" />

          </div>

        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 capitalize border",
                activeCategory === category
                  ? "bg-[#E47E64] text-white border-[#E47E64]"
                  : "bg-[#FFFBF5] text-[#2D283E] border-[#2D283E]/20 hover:border-[#E47E64]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="sticky-note p-6 rounded-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#E47E64] uppercase block mb-2">
                  {cert.category}
                </span>
                <h3 className="font-serif text-xl text-[#2D283E] font-normal mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#2D283E]/70 mb-4 font-sans">
                  {cert.issuer}
                </p>
              </div>

              <a
                href={encodeURI(cert.file)}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-navy text-xs uppercase tracking-wider w-fit"
              >
                View Certificate <span className="text-sm">↘</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};