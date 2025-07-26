"use client";

import {
  ArrowRight,
  Code,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Pajak101",
    image: "/images/pajak101.png",
    desc: "Tax management platform with comprehensive videos and resources",
    url: "https://pajak101.com/",
    tech: ["Next.js", "TypeScript", "Material UI"],
  },
  {
    id: 2,
    title: "Bhinneka Sentra Advisory",
    image: "/images/bsa.png",
    desc: "Professional advisory services platform",
    url: "https://bsadvisory.com/",
    tech: ["Next.js", "Tailwind", "Mantine"],
  },
  {
    id: 3,
    title: "Ortax - Subjek Pilihan",
    image: "/images/subjek-pilihan.png",
    desc: "Interactive tax subject selection topics",
    url: "https://ortax.org/subjek-pilihan",
    tech: ["Next.js", "API Integration"],
  },
  {
    id: 4,
    title: "Tax Tools & Calculator",
    image: "/images/kalkulator.png",
    desc: "Comprehensive tax calculation tools",
    url: "https://kalkulator.ortax.org/",
    tech: ["JavaScript", "React", "Charts"],
  },
  {
    id: 5,
    title: "Datacenter Ortax - Kurs KMK",
    image: "/images/kurskmk.png",
    desc: "Real-time currency exchange rate tracker",
    url: "https://datacenter.ortax.org/ortax/kursmk/list",
    tech: ["React", "Data Visualization"],
  },
  {
    id: 6,
    title: "Objek Tarif PPh",
    image: "/images/objek-tarif-pajak.png",
    desc: "Income tax rate object management system",
    url: "https://datacenter.ortax.org/ortax/objek-tarif-pph",
    tech: ["React", "Database Integration"],
  },
  {
    id: 7,
    title: "First Portfolio Website",
    image: "/images/afif-first-portfolio.png",
    desc: "My first portfolio web application",
    url: "https://afif-porotfolio.netlify.app/",
    tech: ["React", "Sanity", "Netlify"],
  },
  {
    id: 8,
    title: "Vine - Tiktok clone app",
    image: "/images/vine.png",
    desc: "A tiktok clone web application",
    url: "https://vine-app.vercel.app/",
    tech: ["Next.js", "Vercel", "Sanity"],
  },
  {
    id: 9,
    title: "TamrLatte Landing Page",
    image: "/images/tamrlatte.png",
    desc: "My own business landing page web application",
    url: "https://tamrlatte.netlify.app/",
    tech: ["Next.js", "Netlify", "TailwindCSS"],
  },
  {
    id: 10,
    title: "Ortax Internal CRM",
    image: "/images/crm.png",
    desc: "Customer relation management web application",
    url: "/",
    tech: ["Next.js", "Material UI", "API Integration"],
  },
  {
    id: 11,
    title: "HooBank Landing Page",
    image: "/images/hoobank.png",
    desc: "Dummy Bank landing page web application",
    url: "https://hoobank-modern.netlify.app/",
    tech: ["Vite", "Tailwind", "Netlify"],
  },
];

const SKILLS = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "React.js, Next.js, TypeScript",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "React Native, Cross-platform",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Modern, responsive interfaces",
  },
];

const EnhancedPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["hero", "about", "work", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin size={16} />
              <span className="text-sm font-medium">Jakarta, Indonesia</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {["About", "Work", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600"
                      : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              href="mailto:muhammad.afif5069@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Say Hi</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-8 shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  MA
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              MUHAMMAD AFIF
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Frontend Developer crafting beautiful, responsive web applications
              with
              <span className="text-blue-600 font-semibold"> React.js</span>,
              <span className="text-blue-600 font-semibold"> Next.js</span>, and
              <span className="text-blue-600 font-semibold"> React Native</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("work")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                href="mailto:muhammad.afif5069@gmail.com"
                className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink size={16} className="text-slate-700" />
                    </div>
                  </div>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you and discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:muhammad.afif5069@gmail.com"
              className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 hover:-translate-y-1"
            >
              <Mail size={20} />
              Send me an email
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/mhmmd-afif/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-blue-300 text-blue-100 px-6 py-3 rounded-full font-medium hover:bg-blue-300 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 hover:-translate-y-1"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>

            <a
              href="https://www.instagram.com/mhmmd_afif_"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-purple-300 text-purple-100 px-6 py-3 rounded-full font-medium hover:bg-purple-300 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 hover:-translate-y-1"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-blue-800">
            <p className="text-blue-200 text-sm">
              © 2025 Muhammad Afif. Crafted with passion in Jakarta, Indonesia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedPortfolio;
