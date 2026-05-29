"use client";

import React from "react";

const topRowSkills = [
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "ReactJS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Express.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const bottomRowSkills = [
  {
    name: "Linux",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "Proxmox",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg",
  },
  {
    name: "DevOps",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Self-hosting",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  },
];

export default function Skills({ dict }) {
  // Array digandakan agar animasi scrolling tidak pernah putus (seamless loop)
  const multipliedTop = [
    ...topRowSkills,
    ...topRowSkills,
    ...topRowSkills,
    ...topRowSkills,
    ...topRowSkills,
  ];
  const multipliedBottom = [
    ...bottomRowSkills,
    ...bottomRowSkills,
    ...bottomRowSkills,
    ...bottomRowSkills,
    ...bottomRowSkills,
  ];

  return (
    <section id="skills" className="py-10 overflow-hidden relative">
      {/* Judul Section */}
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text">
          {dict?.title || "Tech"}{" "}
          <span className="text-brand-pink">{dict?.accent || "Stack"}</span>.
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative">
        {/* Gradient Blur di Kiri dan Kanan */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Baris 1: Jalan ke Kiri */}
        <div className="flex w-max animate-scroll pause-on-hover py-4">
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
            {multipliedTop.map((skill, index) => (
              <SkillCard key={`top-1-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
            {multipliedTop.map((skill, index) => (
              <SkillCard key={`top-2-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Baris 2: Jalan ke Kanan (Reverse) */}
        <div className="flex w-max animate-scroll-reverse pause-on-hover py-4">
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
            {multipliedBottom.map((skill, index) => (
              <SkillCard key={`bottom-1-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
            {multipliedBottom.map((skill, index) => (
              <SkillCard key={`bottom-2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// Komponen Card dengan Hover Interaktif
function SkillCard({ skill }) {
  return (
    <div className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 bg-white/60 backdrop-blur-md border border-brand-text/10 rounded-3xl shadow-sm hover:shadow-xl hover:scale-110 hover:-translate-y-2 hover:border-brand-purple/30 hover:bg-white transition-all duration-300 cursor-pointer">
      <img
        src={skill.img}
        alt={skill.name}
        className="w-6 h-6 md:w-8 md:h-8 object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
      />

      <span className="font-bold text-brand-text group-hover:text-brand-purple text-base md:text-lg whitespace-nowrap transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
}
