import { useState } from "react";

export default function PremiumBgChanger() {
  const [bg, setBg] = useState({ color: "#414141", name: "Gray" });

  const colors = [
    { hex: "#EF4444", name: "Red" },
    { hex: "#3B82F6", name: "Blue" },
    { hex: "#10B981", name: "Green" },
    { hex: "#8B5CF6", name: "Purple" },
    { hex: "#F59E0B", name: "Orange" },
    { hex: "#EC4899", name: "Pink" },
    { hex: "#FACC15", name: "Yellow" },
    { hex: "#14B8A6", name: "Teal" },
    { hex: "#06B6D4", name: "Cyan" },
    { hex: "#84CC16", name: "Lime" },
  ];

  const randomBg = () => {
    const pick = colors[Math.floor(Math.random() * colors.length)];
    const gradient = `linear-gradient(135deg, ${pick.hex}, ${colors[Math.floor(Math.random() * colors.length)].hex})`;
    setBg({ color: gradient, name: pick.name });
  };

  const copyColor = () => {
    navigator.clipboard.writeText(bg.color);
    alert(`Copied: ${bg.color}`);
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center transition-all duration-1000"
      style={{ background: bg.color }}
    >
      <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-6">
        {bg.name} Background
      </h1>

      <div className="flex gap-4">
        <button
          onClick={randomBg}
          className="px-6 py-3 bg-white/30 backdrop-blur-md text-white rounded-xl shadow-lg font-semibold hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Random BG
        </button>

        <button
          onClick={copyColor}
          className="px-6 py-3 bg-white/30 backdrop-blur-md text-white rounded-xl shadow-lg font-semibold hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Copy BG
        </button>
      </div>

      <h4 className="mt-6 text-white/90 text-sm">
        Click “Random BG” to generate a new premium gradient background.
      </h4>
    </div>
  );
}


