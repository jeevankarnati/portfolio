import React from "react";

export const Logo = () => {
  return (
    <div className="relative group cursor-pointer">
      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>

      {/* Main container */}
      <div className="relative h-16 w-16 bg-black rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden">
        {/* Inner gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-blue-500/10 opacity-50"></div>

        {/* Glass shine effect */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rotate-45 blur-xl group-hover:translate-x-10 transition-transform duration-700"></div>

        {/* The Letter J */}
        <span className="relative z-10 text-4xl font-bold bg-clip-text text-transparent bg-linear-to-br from-white via-purple-200 to-blue-200 drop-shadow-sm font-sans">
          J
        </span>
      </div>
    </div>
  );
};
