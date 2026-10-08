import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { LuFigma } from "react-icons/lu";
import { DecorativeFlower, SparkleStar } from "./DecorativeFlower";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Portfolio Website",
    category: "FULL-STACK DEVELOPMENT",
    filterCategory: "FULL-STACK DEVELOPMENT",
    description: "This portfolio showcases some of my work — each project a story of problem-solving, collaboration, and growth.",
    image: "/projects/Portfolio.png",
    demoUrl: "https://zuveriyakhan.netlify.app/",
    githubUrl: "https://github.com/zuveriyakhan05/Zuveriya_Portfolio.git",
    bgClass: "bg-[#FFF9F3]",
  },
  {
    id: 2,
    num: "02",
    title: "Weather Dashboard",
    category: "DATA ANALYTICS",
    filterCategory: "DATA ANALYTICS",
    description: "An interactive Power BI dashboard analyzing historical weather data and relationships between temperature, humidity, wind speed, and visibility.",
    image: "/projects/Weather.png",
    githubUrl: "https://github.com/zuveriyakhan05/Weather_Dashboard.git",
    bgClass: "bg-[#F8C0AD]/30",
  },
  {
    id: 3,
    num: "03",
    title: "Adidas Dashboard",
    category: "DATA ANALYTICS",
    filterCategory: "DATA ANALYTICS",
    description: "An interactive Adidas sales dashboard built in Excel, visualizing regional performance, product categories, sales trends, and profit insights.",
    image: "/projects/Adidas.png",
    githubUrl: "https://github.com/zuveriyakhan05/Adidas_Dashboard.git",
    bgClass: "bg-[#E0DAFE]/40",
  },
  {
    id: 4,
    num: "04",
    title: "Sales Store Dashboard",
    category: "DATA ANALYTICS",
    filterCategory: "DATA ANALYTICS",
    description: "An interactive sales store dashboard built in Excel, showcasing order trends, customer demographics, channel performance, and regional insights.",
    image: "/projects/Sales Store.png",
    githubUrl: "https://github.com/zuveriyakhan05/Sales_Store_Dashboard.git",
    bgClass: "bg-[#FFF9F3]",
  },
  {
    id: 5,
    num: "05",
    title: "Netflix Content Analytics",
    category: "DATA ANALYTICS",
    filterCategory: "DATA ANALYTICS",
    description: "A Netflix Content Analytics Dashboard built in Power BI that visualizes movies vs TV shows distribution, content trends, ratings, and genre analysis.",
    image: "/projects/Netflix.png",
    githubUrl: "https://github.com/zuveriyakhan05/Netflix-Dashboard.git",
    bgClass: "bg-[#F8C0AD]/30",
  },
  {
    id: 6,
    num: "06",
    title: "Google Playstore Dashboard",
    category: "DATA ANALYTICS",
    filterCategory: "DATA ANALYTICS",
    description: "Built an interactive Power BI dashboard using Google Play Store data to analyze app ratings, installs, and categories with Excel and Power BI.",
    image: "/projects/Playstore.png",
    githubUrl: "https://github.com/zuveriyakhan05/Google_Playstore_Dashboard",
    bgClass: "bg-[#E0DAFE]/40",
  },
  {
    id: 7,
    num: "07",
    title: "India Travel Landing UI",
    category: "UI/UX DESIGN",
    filterCategory: "UI/UX DESIGN",
    description: "An animated travel website UI designed in Figma, showcasing scenic destinations with smooth transitions and immersive visuals.",
    image: "/projects/Travel.png",
    figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=573-4",
    bgClass: "bg-[#FFF9F3]",
  },
  {
    id: 8,
    num: "08",
    title: "Business Analytics Dashboard",
    category: "UI/UX DESIGN",
    filterCategory: "UI/UX DESIGN",
    description: "A modern, data-driven analytics dashboard UI designed in Figma featuring clean KPI cards and interactive charts.",
    image: "/projects/Sales.png",
    figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-846",
    bgClass: "bg-[#F8C0AD]/30",
  },
  {
    id: 9,
    num: "09",
    title: "Admin Analytics Dashboard",
    category: "UI/UX DESIGN",
    filterCategory: "UI/UX DESIGN",
    description: "A clean and interactive admin dashboard UI designed in Figma, visualizing key metrics like users, server activity, and financial insights.",
    image: "/projects/Dataviz ui.png",
    figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-1286",
    bgClass: "bg-[#E0DAFE]/40",
  },
  {
    id: 10,
    num: "10",
    title: "StayHub Interface",
    category: "UI/UX DESIGN",
    filterCategory: "UI/UX DESIGN",
    description: "A streamlined property management suite designed to balance real-time booking analytics with effortless staff scheduling.",
    image: "/projects/StayHub.png",
    figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=550-1466",
    bgClass: "bg-[#FFF9F3]",
  },
  {
    id: 11,
    num: "11",
    title: "Pretty Lady Cosmetics Page",
    category: "UI/UX DESIGN",
    filterCategory: "UI/UX DESIGN",
    description: "A modern cosmetics landing page UI designed in Figma with soft color tones and an elegant layout to highlight beauty products.",
    image: "/projects/pretty.png",
    figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?node-id=580-75",
    bgClass: "bg-[#F8C0AD]/30",
  },
  {
    id: 12,
    num: "12",
    title: "E-Commerce Mobile UI",
    category: "UI/UX DESIGN",
    filterCategory: "UI/UX DESIGN",
    description: "A stylish E-commerce mobile UI designed in Figma, showcasing fashion products with a clean layout and bold visuals.",
    image: "/projects/E-commerce.png",
    figmaUrl: "https://www.figma.com/proto/TLwuAbBQYWLs0pRVhUFRUX/App-Designing?page-id=0%3A1",
    bgClass: "bg-[#E0DAFE]/40",
  },
  {
    id: 13,
    num: "13",
    title: "BhashaFill",
    category: "AI/ML",
    filterCategory: "AI/ML",
    description: "An NLP-based sentiment analysis model to classify text reviews as positive, negative, or neutral using machine learning techniques.",
    bgClass: "bg-[#FFF9F3]",
    comingSoon: true,
  },
  {
    id: 14,
    num: "14",
    title: "MimicToon",
    category: "AI/ML",
    filterCategory: "AI/ML",
    description: "A deep learning CNN model trained to classify images into categories with high accuracy using TensorFlow and Keras.",
    bgClass: "bg-[#F8C0AD]/30",
    comingSoon: true,
  },
  {
    id: 15,
    num: "15",
    title: "HireIQ",
    category: "AI/ML",
    filterCategory: "AI/ML",
    description: "A machine learning pipeline that forecasts trends from structured datasets and visualizes predictions through an interactive dashboard.",
    bgClass: "bg-[#E0DAFE]/40",
    comingSoon: true,
  },
];

const categories = [
  "ALL WORK",
  "DATA ANALYTICS",
  "AI/ML",
  "FULL-STACK DEVELOPMENT",
  "UI/UX DESIGN",
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL WORK");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "ALL WORK" || project.filterCategory === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#FAECE3] text-[#2D283E] relative border-t border-[#E5CFC1]/40">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#2D283E]/70 uppercase mb-8">
          <span className="text-[#E47E64]">03</span>
          <span>SELECTED WORK</span>
        </div>

        {/* Top Header Row with Headline & Project Notes Sticky Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Headline */}
          <div className="lg:col-span-8 space-y-4">
            <p className="text-[11px] font-bold tracking-widest text-[#2D283E]/60 uppercase">
              A SMALL EDIT OF A GROWING PRACTICE
            </p>

            <h2 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
              <span className="block text-5xl sm:text-6xl md:text-7xl font-normal">
                SELECTED
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-normal italic text-[#E47E64]">
                PROJECTS.
              </span>
            </h2>

            <p className="font-script text-2xl text-[#E47E64] pt-2">
              things I've made
            </p>
          </div>

          {/* Right Column Sticky Note & Graphics */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
            <div className="sticky-note p-6 rounded-xs w-64 transform rotate-2 shadow-md">
              <span className="text-[9px] font-bold tracking-widest text-[#2D283E]/60 uppercase block mb-2">
                PROJECT NOTES
              </span>
              <h4 className="font-script text-3xl text-[#2D283E] leading-tight mb-2">
                selected with intention
              </h4>
              <p className="text-xs text-[#2D283E]/70 font-medium tracking-wide">
                data × design × ideas
              </p>
            </div>

            <div className="flex items-center space-x-4 pr-4">
              <DecorativeFlower className="w-10 h-10" />
              <SparkleStar className="w-4 h-4 text-[#E47E64]" />
            </div>
          </div>

        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-[#E5CFC1] pb-4 mb-12 text-[11px] font-bold tracking-widest">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`transition-colors uppercase pb-1 ${
                activeCategory === cat
                  ? "text-[#E47E64] border-b-2 border-[#E47E64]"
                  : "text-[#2D283E]/60 hover:text-[#2D283E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-[#2D283E]/15 overflow-hidden bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative h-56 overflow-hidden bg-[#2D283E]/5 border-b border-[#2D283E]/10">
                {/* Number Pill Tag */}
                <span className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-[#E47E64] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {project.num}
                </span>

                {project.comingSoon ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#2D283E]/5 gap-2">
                    <span className="text-3xl">🚀</span>
                    <span className="text-[11px] font-bold tracking-widest text-[#2D283E]/50 uppercase">Coming Soon</span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Card Body */}
              <div className={`p-6 flex-1 flex flex-col justify-between ${project.bgClass}`}>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#2D283E]/60 uppercase block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[#2D283E] font-normal mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#2D283E]/80 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* External Links */}
                <div className="flex items-center space-x-4 pt-2 border-t border-[#2D283E]/10">
                  {project.comingSoon && (
                    <span className="text-[10px] font-bold tracking-widest text-[#E47E64] uppercase">
                      In Progress
                    </span>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2D283E] hover:text-[#E47E64] transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2D283E] hover:text-[#E47E64] transition-colors"
                      title="Figma Prototype"
                    >
                      <LuFigma size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2D283E] hover:text-[#E47E64] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};