import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import CertificatesSection from "@/components/certificates-section";
import Experience from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import { getDictionary } from "@/lib/dictionary";

const locales = ["id", "en"];

const socialLinks = {
  email: "mailto:kevinpdg.ks@gmail.com",
  whatsapp: "https://wa.me/6285718159757",
  linkedin: "https://www.linkedin.com/in/kevinsultanaherman/",
  github: "https://github.com/kevinsultana",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <main className="portfolio-shell relative isolate overflow-hidden bg-background text-foreground selection:bg-brand-pink selection:text-white">
      <Navbar locale={locale} dict={dict.navbar} />
      <div className="pointer-events-none absolute inset-0 -z-20 subtle-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(245,158,11,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_28%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <HeroSection dict={dict.hero} socialLinks={socialLinks} />
        <ProjectsSection dict={dict.projects} />
        <SkillsSection dict={dict.skills} />
        <CertificatesSection dict={dict.certificates} />
        <Experience dict={dict.experience} />
        <AboutSection dict={dict.about} />
        <ContactSection dict={dict.contact} socialLinks={socialLinks} />
      </div>
    </main>
  );
}
