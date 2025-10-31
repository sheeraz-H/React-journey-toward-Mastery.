import React from "react";

export default function HeaderCard({
  title = "Welcome, User!",
  subtitle = "Here is your personalized dashboard overview.",
  cover = "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
}) {
  return (
    <header
      className="
      max-w-3xl mx-auto text-center rounded-3xl overflow-hidden
      bg-white/10 backdrop-blur-xl border border-white/20
      shadow-xl hover:shadow-2xl transition duration-300
    "
    >
      <div className="h-40 w-full relative">
        <img
          src={cover}
          className="h-full w-full object-cover opacity-90"
          alt="header cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="px-6 py-6">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600 mt-1">{subtitle}</p>
      </div>
    </header>
  );
}
