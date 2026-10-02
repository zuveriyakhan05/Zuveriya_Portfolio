import React from "react";
import { SparkleStar } from "./DecorativeFlower";

export const AboutSection = () => {
  const specialties = [
    { num: "01", name: "Data Analytics" },
    { num: "02", name: "Artificial Intelligence" },
    { num: "03", name: "Machine Learning" },
    { num: "04", name: "UI/UX Design" },
    { num: "05", name: "Full-stack Development" },
    { num: "06", name: "Creative Problem Solving" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#FFFDF9] relative border-t border-[#E5CFC1]/40">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#2D283E]/70 uppercase mb-12">
          <span className="text-[#E47E64]">01</span>
          <span>ABOUT ME</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Headline */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-bold tracking-widest text-[#2D283E]/60 uppercase">
              A CURIOUS MIND WITH A VISUAL INSTINCT
            </p>

            <div className="relative">
              {/* Sparkle Icon */}
              <SparkleStar className="absolute -top-4 right-8 w-5 h-5 text-[#E47E64]" />

              <h2 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                  WHERE
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                  INSIGHT
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                  MEETS
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal italic text-[#E47E64]">
                  INTENTION.
                </span>
              </h2>
            </div>

            {/* Script Subquote */}
            <p className="font-script text-2xl text-[#E47E64] pt-2">
              Data is a material. Design is a way of seeing.
            </p>

            {/* Little Colored Circles Decoration */}
            <div className="flex items-center space-x-2 pt-4">
              <span className="w-2.5 h-2.5 rounded-full border border-[#2D283E] bg-[#BDB2FF]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#2D283E] bg-[#F8C0AD]"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#2D283E] bg-[#F4978E]"></span>
            </div>
          </div>

          {/* Right Column - Details & List */}
          <div className="lg:col-span-6 space-y-8 lg:pt-8">
            {/* Cursive Subhead */}
            <h3 className="font-script text-3xl md:text-4xl text-[#E47E64] font-normal">
              curious by nature
            </h3>

            {/* Paragraph */}
            <p className="text-[#2D283E]/80 text-base leading-relaxed">
              I am Zuveriya Khan, a Data Analyst and aspiring AI professional with experience in UI/UX and graphic design. I enjoy transforming raw data into meaningful insights, creating intuitive digital experiences, and building intelligent digital solutions.
            </p>

            {/* 2-Column Grid with Horizontal Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-[#E5CFC1]">
              {specialties.map((item, index) => (
                <div
                  key={index}
                  className="py-3 border-b border-[#E5CFC1] flex items-center space-x-2 text-xs font-medium text-[#2D283E]"
                >
                  <span className="text-[#2D283E]/60">{item.num} /</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-4">
              <a
                href="#contact"
                className="btn-outline-navy uppercase text-xs tracking-wider"
              >
                Start A Conversation <span className="text-sm">↘</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};