import React from "react";
import { DecorativeFlower, SparkleStar } from "./DecorativeFlower";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#FFFDF9] text-[#2D283E] relative border-t border-[#E5CFC1]/40">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#2D283E]/70 uppercase mb-12">
          <span className="text-[#E47E64]">04</span>
          <span>SKILLS & TOOLS</span>
        </div>

        {/* Top Section Row: Left Graphic Notes + Right Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column - Studio Note & Flower Doodles */}
          <div className="lg:col-span-5 relative flex flex-col items-start space-y-6">
            <div className="sticky-note p-6 rounded-xs w-64 transform -rotate-3 shadow-md">
              <span className="text-[9px] font-bold tracking-widest text-[#2D283E]/60 uppercase block mb-2">
                STUDIO NOTE
              </span>
              <h4 className="font-script text-3xl text-[#2D283E] leading-tight mb-2">
                little tools, big ideas
              </h4>
              <p className="text-xs text-[#E47E64] font-medium italic">
                design in progress
              </p>
            </div>

            {/* Floating Wire Arc and Decorative Flower */}
            <div className="relative pl-12 flex items-center space-x-6">
              <svg className="w-16 h-8 text-[#E47E64]" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 25 C 20 5, 40 5, 55 25" strokeLinecap="round" />
              </svg>
              <DecorativeFlower className="w-12 h-12" />
              <SparkleStar className="w-4 h-4 text-[#E47E64]" />
            </div>
          </div>

          {/* Right Column - Main Headline */}
          <div className="lg:col-span-7 space-y-4 lg:text-left">
            <p className="text-[11px] font-bold tracking-widest text-[#2D283E]/60 uppercase">
              A WORKING VOCABULARY
            </p>
            <h2 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
              <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                TOOLS FOR
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-normal italic text-[#E47E64]">
                MAKING
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-normal italic text-[#E47E64]">
                SENSE.
              </span>
            </h2>
          </div>

        </div>

        {/* 4 Category Skills Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-[#E5CFC1] divide-y md:divide-y-0 md:divide-x divide-[#E5CFC1]">
          
          {/* Top Left: Data Analytics */}
          <div className="p-8 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#2D283E]/60 uppercase block">
              DATA ANALYTICS
            </span>
            <p className="font-serif text-2xl md:text-3xl text-[#2D283E] leading-relaxed">
              Python, SQL, Excel, Power BI, Tableau, Google Sheets, Google Colab
            </p>
          </div>

          {/* Top Right: Development (Peach Background Highlight Box) */}
          <div className="p-8 bg-[#F8C0AD]/40 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#2D283E]/60 uppercase block">
              DEVELOPMENT
            </span>
            <p className="font-serif text-2xl md:text-3xl text-[#2D283E] leading-relaxed">
              HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, Git, GitHub
            </p>
          </div>

          {/* Bottom Left: AI / Machine Learning */}
          <div className="p-8 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#2D283E]/60 uppercase block">
              AI / MACHINE LEARNING
            </span>
            <p className="font-serif text-2xl md:text-3xl text-[#E47E64] leading-relaxed">
              Python, Machine Learning, AI application development, Data analysis
            </p>
          </div>

          {/* Bottom Right: Design */}
          <div className="p-8 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#2D283E]/60 uppercase block">
              DESIGN
            </span>
            <p className="font-serif text-2xl md:text-3xl text-[#2D283E] leading-relaxed">
              Figma, UI/UX Design, Graphic Design, Photoshop, CorelDraw
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};