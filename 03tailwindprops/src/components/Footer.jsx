import React from "react";

export default function FooterCard({
  note = "You are using the free version. Upgrade anytime!",
  buttonLabel = "Upgrade Plan",
  onClick = () => {},
}) {
  return (
    <footer
      className="
      max-w-md mx-auto mt-8 px-6 py-4
      rounded-3xl bg-white/80 backdrop-blur-xl
      shadow-md border border-white/30 text-center
    "
    >
      <p className="text-sm text-slate-600">{note}</p>

      <button
        onClick={onClick}
        className="
        mt-3 px-4 py-2 bg-slate-900 text-white text-sm
        rounded-xl hover:shadow hover:-translate-y-0.5
        active:scale-95 transition
      "
      >
        {buttonLabel}
      </button>

      <div className="text-xs text-slate-400 mt-3">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}
