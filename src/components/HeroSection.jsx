import React from "react";
import { DecorativeFlower, SparkleStar } from "./DecorativeFlower";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-[#FAECE3] min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Subtag */}
          <div className="flex items-center space-x-2 text-[11px] font-bold tracking-widest text-[#2D283E]/70 uppercase">
            <span>PORTFOLIO</span>
            <span className="w-2 h-2 rounded-full bg-[#E47E64]"></span>
            <span>ZUVERIYA KHAN</span>
          </div>

          {/* Cursive Subtitle */}
          <h2 className="font-script text-2xl md:text-3xl lg:text-4xl text-[#E47E64] font-normal tracking-wide">
            UI/UX Designer, Data Analyst, Product Manager & Full-Stack Developer
          </h2>

          {/* Main Headline & Decorative Flower */}
          <div className="relative">
            {/* Decorative Flower & Sparkle */}
            <div className="absolute -top-6 left-[65%] md:left-[55%] lg:left-[60%] flex items-center space-x-2 z-10 animate-float">
              <DecorativeFlower className="w-12 h-12 md:w-16 md:h-16" />
              <SparkleStar className="w-4 h-4 text-[#E47E64]" />
            </div>

            <h1 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal">
                CREATIVE
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal italic text-[#E47E64] my-1">
                THINKING
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal">
                MEETS
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal">
                INTELLIGENCE.
              </span>
            </h1>
          </div>

          {/* Sub-paragraph */}
          <p className="max-w-lg text-[#2D283E]/80 text-sm md:text-base leading-relaxed pt-2">
            I transform raw data into meaningful insights and build thoughtful digital experiences through design, technology, and intelligent solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="#projects"
              className="btn-peach uppercase text-xs tracking-wider"
            >
              Explore My Work <span className="text-sm">↘</span>
            </a>
            <a
              href="/Pathan Zuveriya.pdf"
              download
              className="btn-outline-navy uppercase text-xs tracking-wider"
            >
              Download Resume <span className="text-sm">↘</span>
            </a>
          </div>
        </div>

        {/* Right Column Portrait Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4]">
            
            {/* Background Offset Arch Shadow */}
            <div className="absolute inset-0 bg-[#F6C1AF] rounded-t-[180px] rounded-b-2xl transform rotate-3 scale-102 transition-transform duration-300 hover:rotate-2"></div>
            
            {/* Outline Decorative Arch Layer */}
            <div className="absolute -inset-3 border border-[#2D283E]/20 rounded-t-[195px] rounded-b-3xl pointer-events-none transform -rotate-1"></div>

            {/* Main Arch Frame with Image */}
            <div className="relative w-full h-full bg-[#FFFBF5] rounded-t-[180px] rounded-b-2xl border-4 border-white shadow-lg overflow-hidden flex items-end">
              <img
                src="/zuveriya_hero.png"
                alt="Zuveriya Khan"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                style={{ imageRendering: "high-quality", WebkitFontSmoothing: "antialiased" }}
              />
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Ticker Strip */}
      <div className="max-w-7xl mx-auto w-full pt-16 border-t border-[#E5CFC1]/60 mt-12">
        <div className="flex flex-wrap justify-between items-center text-[10px] md:text-xs font-semibold tracking-widest text-[#2D283E]/70 uppercase gap-4">
          <span>DATA ANALYST</span> 
          <span>ASPIRING AI PROFESSIONAL</span>
          <span>UI/UX DESIGNER</span>
          <span>GRAPHIC DESIGNER</span>
        </div>
      </div>
    </section>
  );
};