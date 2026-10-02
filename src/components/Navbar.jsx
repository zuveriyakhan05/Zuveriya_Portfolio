import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "WHAT I DO", href: "#what-i-do" },
  { name: "WORK", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CERTIFICATES", href: "#certificates" },
  { name: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#FAECE3]/95 backdrop-blur-xs border-b border-[#E5CFC1]/40",
        isScrolled ? "py-3 shadow-xs" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="font-script text-3xl md:text-4xl text-[#2D283E] font-medium tracking-wide hover:text-[#E47E64] transition-colors">
          Zuveriya Khan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <span className="font-script text-xl text-[#E47E64] font-medium mr-8">
            Design / Data / AI
          </span>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[11px] font-semibold tracking-widest text-[#2D283E]/80 hover:text-[#E47E64] transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-[#2D283E] z-50 focus:outline-hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu dropdown */}
        <div
          className={cn(
            "fixed inset-0 bg-[#FAECE3] z-40 flex flex-col items-center justify-center space-y-6 lg:hidden transition-all duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <span className="font-script text-2xl text-[#E47E64] mb-4">
            Design / Data / AI
          </span>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-widest text-[#2D283E] hover:text-[#E47E64] transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};