import React from "react";
import { DecorativeFlower, SparkleStar } from "./DecorativeFlower";

export const WhatIDoSection = () => {
  const services = [
    {
      num: "01",
      title: "Data Analytics",
      description: "Finding the story inside numbers, patterns, and everyday data.",
      bg: "sticky-note", // off-white
      rotate: "-rotate-1",
    },
    {
      num: "02",
      title: "UI/UX Design",
      description: "Creating clear, intuitive interfaces with a human point of view.",
      bg: "sticky-note-peach", // peach
      rotate: "rotate-1",
    },
    {
      num: "03",
      title: "Graphic Design",
      description: "Building visual identities, layouts, and details that feel personal.",
      bg: "sticky-note", // off-white
      rotate: "rotate-0",
    },
    {
      num: "04",
      title: "AI / Machine Learning",
      description: "Exploring intelligent tools and thoughtful applications of AI.",
      bg: "sticky-note", // off-white
      rotate: "rotate-1",
    },
    {
      num: "05",
      title: "Full-stack Development",
      description: "Turning ideas into useful digital products from front to back.",
      bg: "sticky-note-peach", // peach
      rotate: "-rotate-1",
    },
  ];

  return (
    <section id="what-i-do" className="py-24 px-6 md:px-12 bg-[#BDB2FF] text-[#2D283E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#2D283E]/70 uppercase mb-8">
          <span className="text-[#E47E64]">02</span>
          <span>WHAT I DO</span>
        </div>

        {/* Top Header Row with Sticky Note on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column Headline */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-[11px] font-bold tracking-widest text-[#2D283E]/60 uppercase">
              A MULTIDISCIPLINARY PRACTICE
            </p>

            <div className="relative inline-block">
              <h2 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                  IDEAS, MADE
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-normal italic text-[#E47E64]">
                  USEFUL.
                </span>
              </h2>
            </div>

            <p className="font-script text-2xl text-[#E47E64] flex items-center space-x-2 pt-2">
              <span>A little bit of this, a little bit of that</span>
              <SparkleStar className="w-4 h-4 text-[#E47E64]" />
            </p>

            {/* Decorative Flower + Arc shape in middle */}
            <div className="flex items-center space-x-6 pt-4">
              <DecorativeFlower className="w-10 h-10" />
              <svg className="w-12 h-6 text-[#E47E64]" viewBox="0 0 50 25" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 20 C 15 5, 35 5, 45 20" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Centre Doodle Column */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center gap-6 pt-4">

            {/* Floating label */}
            <div className="transform -rotate-6">
              <span className="font-script text-lg text-[#2D283E]/50">where ideas live</span>
            </div>

            {/* Squiggly arrow pointing right */}
            <svg viewBox="0 0 80 40" fill="none" className="w-20 text-[#E47E64]/60" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 20 C 14 8, 26 32, 38 20 C 50 8, 62 32, 74 20" />
              <path d="M68 14 L74 20 L68 26" />
            </svg>

            {/* Mini doodle stars cluster */}
            <div className="flex items-center gap-3">
              <SparkleStar className="w-3 h-3 text-[#2D283E]/30" />
              <SparkleStar className="w-5 h-5 text-[#E47E64]/50" />
              <SparkleStar className="w-3 h-3 text-[#2D283E]/30" />
            </div>

            {/* Circle doodle */}
            <svg viewBox="0 0 60 60" fill="none" className="w-14 h-14 text-[#2D283E]/20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3">
              <circle cx="30" cy="30" r="24" />
            </svg>

            {/* Small handwritten-style note */}
            <div className="transform rotate-3 border border-[#2D283E]/20 rounded px-3 py-2 bg-[#2D283E]/5">
              <span className="font-script text-sm text-[#2D283E]/50">stay curious ✦</span>
            </div>

          </div>

          {/* Right Column - Top Sticky Note Card */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="sticky-note p-6 rounded-xs w-64 transform rotate-2">
              <span className="text-[9px] font-bold tracking-widest text-[#2D283E]/60 uppercase block mb-3">
                CREATIVE NOTES
              </span>
              <h4 className="font-script text-3xl text-[#2D283E] leading-tight mb-2">
                little things, big ideas
              </h4>
              <p className="text-xs text-[#2D283E]/70 font-medium tracking-wide">
                data × design × ideas
              </p>
            </div>
          </div>

        </div>

        {/* 5 Service Sticky-Note Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} ${service.rotate} p-6 rounded-xs flex flex-col justify-between min-h-[260px]`}
            >
              <div>
                <span className="text-xs font-bold text-[#E47E64] block mb-6">
                  {service.num}
                </span>
                <h3 className="font-serif text-2xl text-[#2D283E] font-normal leading-snug mb-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-[#2D283E]/80 leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
