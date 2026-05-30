"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Data sertifikat: disesuaikan dengan file di `public/certificate/`
const certificates = [
  { id: 7, alt: "Hactiv8", img: "/certificate/Hacktiv8.png" },
  { id: 6, alt: "Udemy React Native", img: "/certificate/UdemyRN.png" },
  { id: 5, alt: "Hour Of Code", img: "/certificate/HourOfCode.png" },
  { id: 1, alt: "HackerRank CSS", img: "/certificate/hackerRankCSS.png" },
  // {
  //   id: 2,
  //   alt: "HackerRank Front-End (FER)",
  //   img: "/certificate/hackerRankFER.png",
  // },
  {
    id: 3,
    alt: "HackerRank Problem Solving",
    img: "/certificate/HackerRankPS.png",
  },
  { id: 4, alt: "HackerRank React", img: "/certificate/HackerRankReact.png" },
];

export default function Certificates({ dict }) {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // prevent body scroll when modal open
    const prev = document.body.style.overflow;
    if (selected) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [selected]);

  return (
    <section id="projects" className="scroll-mt-14 py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Badge Judul */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text">
            {dict?.title || "Sertifikat"}{" "}
            <span className="text-brand-mint">
              {dict?.accent || "Keahlian"}
            </span>
            .
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 group">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                type="button"
                onClick={() => setSelected(cert)}
                className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-brand-text/5 border border-brand-text/10 cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-brand-mint/20 group-hover:opacity-50 hover:opacity-100! transform-gpu block"
              >
                <Image
                  src={cert.img}
                  alt={cert.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-brand-text/10 mix-blend-overlay transition-opacity duration-300 hover:opacity-0" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeModal}
              aria-hidden="true"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative max-w-[90vw] max-h-[90vh] w-full"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 z-50 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
                aria-label="Tutup preview"
              >
                ✕
              </button>

              <img
                src={selected.img}
                alt={selected.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
