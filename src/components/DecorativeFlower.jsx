import React from "react";

export const DecorativeFlower = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Top Petal - Pink */}
        <path
          d="M50 50 C38 28, 38 8, 50 8 C62 8, 62 28, 50 50 Z"
          fill="#F4978E"
          stroke="#2D283E"
          strokeWidth="3"
        />
        {/* Right Petal - Purple */}
        <path
          d="M50 50 C72 38, 92 38, 92 50 C92 62, 72 62, 50 50 Z"
          fill="#BDB2FF"
          stroke="#2D283E"
          strokeWidth="3"
        />
        {/* Bottom Petal - Peach */}
        <path
          d="M50 50 C62 72, 62 92, 50 92 C38 92, 38 72, 50 50 Z"
          fill="#F8C0AD"
          stroke="#2D283E"
          strokeWidth="3"
        />
        {/* Left Petal - Light Purple */}
        <path
          d="M50 50 C28 62, 8 62, 8 50 C8 38, 28 38, 50 50 Z"
          fill="#C8B6FF"
          stroke="#2D283E"
          strokeWidth="3"
        />
        {/* Center Dot */}
        <circle cx="50" cy="50" r="7" fill="#2D283E" />
      </svg>
    </div>
  );
};

export const SparkleStar = ({ className = "w-5 h-5 text-[#E47E64]" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
};
