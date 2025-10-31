import React from "react";

export default function ProfileCard({
  name = "John Carter",
  company = "Acme Corp",
  age = '45',
  role = "Product Designer",
  avatar = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  cover = "https://images.pexels.com/photos/7134985/pexels-photo-7134985.jpeg",
  onConnect = () => {},
}) {
  return (
    <div className="p-4">

    <article className="
       max-w-sm w-full mx-auto overflow-hidden
      rounded-3xl shadow-xl backdrop-blur-xl
      border border-white/20 bg-white/10
      hover:shadow-2xl hover:scale-[1.02]
      transition-all duration-300 ease-out
    ">
      
      <div className="relative h-32 w-full">
        <img
          src={cover}
          alt="cover"
          className="h-full w-full object-cover opacity-90"
        />

        <div
          className="
            absolute -bottom-12 left-1/2 -translate-x-1/2
            bg-gradient from-slate-200 to-white
            p-[3px] rounded-full shadow-xl
          "
        >
          <img
            src={avatar}
            alt="avatar"
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="pt-16 px-6 pb-6 text-center">
        <h3 className="text-2xl font-semibold text-slate-900 flex justify-center items-center gap-1">
          {name}
          <span className="inline-block h-4 w-4 bg-blue-500 rounded-full"></span>
        </h3>

        <p className="py-2 text-sm text-slate-600 mt-1">
          <span className="px-2 py-2.5 text-xs bg-slate-800 text-white rounded-md mr-1">
            {role}
          </span>
          at <span className="font-semibold text-slate-800">{company}</span>
        </p>

        <span className="
          inline-block mt-3 text-xs px-3 py-1
          rounded-full font-medium
          bg-white/60 border border-slate-200 text-slate-700
        ">
          Age: {age}
        </span>

        <p className="text-xs mt-2 text-green-600 font-medium flex justify-center items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for projects
        </p>

        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={onConnect}
            className="
              px-4 py-2 text-sm font-medium
              bg-slate-900 text-white rounded-xl
              shadow hover:shadow-xl hover:-translate-y-0.5
              active:scale-95 transition
            "
          >
            Connect
          </button>

          <button
            className="
              px-4 py-2 text-sm font-medium
              bg-white text-slate-700 border border-slate-200 rounded-xl
              hover:bg-slate-50 active:scale-95 transition
            "
          >
            Message
          </button>
        </div>

        <div className="mt-6 border-t border-white/40 pt-4">
          <p className="text-xs text-slate-500">User Profile • Verified Account</p>
        </div>
      </div>
    </article>
    </div>


  );
}
