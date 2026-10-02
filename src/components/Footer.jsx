import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[#FAECE3] border-t border-[#E5CFC1] relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[#2D283E]">
        <span className="font-script text-2xl font-medium">Zuveriya Khan</span>

        <p className="text-xs text-[#2D283E]/70">
          &copy; {new Date().getFullYear()} Zuveriya Khan. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-2.5 rounded-full bg-[#2D283E] text-white hover:bg-[#E47E64] transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};