import React, { useState } from "react";
import { cn } from "../lib/utils";

const certificates = [
  {
    title: "kAlzen - A GenAI Product Hackathon",
    issuer: "Unstop",
    category: "hackathon",
    file: "/public/kAlzen.pdf",
  },
  {
    title: "AI - ML Virtual Internship",
    issuer: "Google for Developers",
    category: "internship",
    file: "/public/AI ML.pdf",
  },
  {
    title: "UI/UX Design Internship",
    issuer: "ThinkMile",
    category: "internship",
    file: "/public/Zuveriya.pdf",
  },
  {
    title: "Introduction to C++",
    issuer: "Sololearn",
    category: "programming",
    file: "/public/Introduction to C++.pdf",
  },
  {
    title: "Basics of Data Structures and Algorithms",
    issuer: "Simplilearn",
    category: "programming",
    file: "/public/Basics of DSA.pdf",
  },
  {
    title: "Kick start in tech skills: AI - ML & Cybersecurity",
    issuer: "Ganpat University",
    category: "workshop",
    file: "/public/Kick start.pdf",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    category: "programming",
    file: "/public/DA with Python.pdf",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "Google for Developers",
    category: "internship",
    file: "/public/Android Developer.pdf",
  },
  {
    title: "Prajwalan 2k26",
    issuer: "SRKR Engineering College",
    category: "hackathon",
    file: "/public/Prajwalan.pdf",
  },
  {
    title: "CodeXccelerate",
    issuer: "GATEWAY EDUCATION, Delhi-NCR",
    category: "hackathon",
    file: "/public/CodeXccelerate.pdf",
  },
  {
    title: "Gen - AI Workshop",
    issuer: "Adani Institute of Digital Technology Management",
    category: "workshop",
    file: "/public/Gen - AI Workshop.pdf",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    category: "programming",
    file: "/public/Split_20260424_1047.pdf",
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    category: "programming",
    file: "/public/DV with python.pdf",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    category: "programming",
    file: "/public/Data Analysis with python.pdf",
  },
  {
    title: "CodeVersity",
    issuer: "Indian Institute of Technology Gandhinagar",
    category: "hackathon",
    file: "/public/CodeVersity.pdf",
  },
  {
    title: "CodeAlpha",
    issuer: "CodeAlpha",
    category: "internship",
    file: "/public/CodeAlpha.pdf",
  },
];

const categories = ["all", "hackathon", "internship", "programming", "workshop"];

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredCerts = certificates.filter(
    (cert) => activeCategory === "all" || cert.category === activeCategory
  );

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
      
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {/* <span className="!text-black dark:!text-white">My</span>{" "} */}
        My <span className="text-primary">Certificates</span>
        </h2>


        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4 capitalize">
                {cert.category}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 transition"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};