import { useState } from "react";

export default function PremiumBgChanger() {
  const [bg, setBg] = useState({ color: "#414141", name: "Gray" });

const colors = [
  { hex: "#EF4444", name: "Red" },
  { hex: "#F87171", name: "Red Light" },
  { hex: "#B91C1C", name: "Red Dark" },

  { hex: "#3B82F6", name: "Blue" },
  { hex: "#60A5FA", name: "Blue Light" },
  { hex: "#1E40AF", name: "Blue Dark" },

  { hex: "#10B981", name: "Green" },
  { hex: "#34D399", name: "Green Light" },
  { hex: "#065F46", name: "Green Dark" },

  { hex: "#8B5CF6", name: "Purple" },
  { hex: "#A78BFA", name: "Purple Light" },
  { hex: "#5B21B6", name: "Purple Dark" },

  { hex: "#F59E0B", name: "Orange" },
  { hex: "#FBBF24", name: "Orange Light" },
  { hex: "#B45309", name: "Orange Dark" },

  { hex: "#EC4899", name: "Pink" },
  { hex: "#F472B6", name: "Pink Light" },
  { hex: "#BE185D", name: "Pink Dark" },

  { hex: "#FACC15", name: "Yellow" },
  { hex: "#EAB308", name: "Yellow Dark" },
  { hex: "#FEF08A", name: "Yellow Light" },

  { hex: "#14B8A6", name: "Teal" },
  { hex: "#2DD4BF", name: "Teal Light" },
  { hex: "#0F766E", name: "Teal Dark" },

  { hex: "#06B6D4", name: "Cyan" },
  { hex: "#22D3EE", name: "Cyan Light" },
  { hex: "#0E7490", name: "Cyan Dark" },

  { hex: "#84CC16", name: "Lime" },
  { hex: "#A3E635", name: "Lime Light" },
  { hex: "#4D7C0F", name: "Lime Dark" },

  { hex: "#F97316", name: "Amber" },
  { hex: "#FB923C", name: "Amber Light" },
  { hex: "#C2410C", name: "Amber Dark" },

  { hex: "#64748B", name: "Slate" },
  { hex: "#94A3B8", name: "Slate Light" },
  { hex: "#1E293B", name: "Slate Dark" },

  { hex: "#F3F4F6", name: "Gray Light" },
  { hex: "#9CA3AF", name: "Gray" },
  { hex: "#111827", name: "Gray Dark" },

  { hex: "#F87171", name: "Rose Light" },
  { hex: "#BE123C", name: "Rose Dark" },

  { hex: "#8B5CF6", name: "Violet" },
  { hex: "#C4B5FD", name: "Violet Light" },
  { hex: "#5B21B6", name: "Violet Dark" },

  { hex: "#22C55E", name: "Emerald" },
  { hex: "#A7F3D0", name: "Emerald Light" },
  { hex: "#065F46", name: "Emerald Dark" },

  { hex: "#E879F9", name: "Fuchsia" },
  { hex: "#FBCFE8", name: "Fuchsia Light" },
  { hex: "#9D174D", name: "Fuchsia Dark" },

  { hex: "#F472B6", name: "Pink Light 2" },
  { hex: "#DB2777", name: "Pink Dark 2" },

  { hex: "#FDE68A", name: "Yellow Light 2" },
  { hex: "#B45309", name: "Yellow Dark 2" },

  { hex: "#A3E635", name: "Lime Light 2" },
  { hex: "#365314", name: "Lime Dark 2" },

  { hex: "#0EA5E9", name: "Sky" },
  { hex: "#38BDF8", name: "Sky Light" },
  { hex: "#0369A1", name: "Sky Dark" }
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


