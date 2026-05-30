"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function AboutSection({ dict }) {
  return (
    <section id="about" className="scroll-mt-14 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:gap-14 lg:gap-16">
        {/* KOLOM KIRI: Foto Bersih & Elegan (Tanpa Blur/Glow Berat) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-70 sm:max-w-sm md:max-w-none md:mx-0"
        >
          {/* Aksen Background Solid yang Lembut (Sangat ringan diproses) */}
          <div className="absolute inset-0 rounded-4xl bg-brand-amber/15 translate-x-3 translate-y-3 -rotate-3 sm:translate-x-4 sm:translate-y-4" />

          {/* Frame Foto Utama */}
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-brand-text/5 bg-white shadow-xl z-10">
            <Image
              src="/images/About.jpg"
              alt="Profil Kevin Sultana"
              fill
              sizes="(max-width: 768px) 80vw, 380px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* KOLOM KANAN: Teks Rapi, Solid, & Profesional */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="min-w-0 space-y-5 text-center md:text-left md:space-y-6"
        >
          {/* Sapaan dengan Aksen Solid Color (Tidak norak) */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-brand-text uppercase">
            <span className="block">{dict?.greeting || "Halo, saya"}</span>
            {/* Pil Nama: Solid Biru */}
            <span className="mt-2 inline-block rounded-xl bg-brand-blue px-3 py-1 text-white shadow-sm">
              {dict?.name || "Kevin Sultana Herman"}
            </span>
            , <br className="hidden md:block" />
            {/* Pil Role: Solid Mint */}
            <span className="mt-3 inline-block rounded-xl bg-brand-mint px-3 py-1 text-brand-text shadow-sm">
              {dict?.role || "Full-stack Developer & DevOps"}
            </span>
          </h3>

          {/* Bio Rapi dengan Garis Samping Solid */}
          <div className="my-4 border-l-4 border-brand-purple pl-4 sm:pl-6 py-1 sm:py-2 text-left md:my-6">
            <p className="text-base sm:text-lg whitespace-pre-line text-brand-text/70 font-medium leading-relaxed">
              {dict?.bio ||
                "Berpengalaman membangun arsitektur web modern menggunakan Next.js, React, dan Express.js. Saya memiliki minat mendalam dalam manajemen infrastruktur, Linux server, dan mengoptimalkan lingkungan deployment untuk skalabilitas tinggi."}
            </p>
          </div>

          {/* Tombol Clean & Modern */}
          <div className="pt-1 md:pt-2 flex justify-center md:justify-start">
            <a
              href="/CV-KevinSultanaHerman.pdf"
              download="CV-KevinSultanaHerman.pdf"
              className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-brand-ink px-6 py-3.5 font-black text-brand-paper shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-brand-purple hover:text-white hover:shadow-lg sm:w-auto sm:px-8"
            >
              <Download className="w-5 h-5" />{" "}
              {dict?.downloadCv || "Download CV"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
