import Link from "@/components/Link";
import Image from "next/image";
import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Pajak101",
    image: "/images/pajak101.png",
    desc: "",
    url: "https://pajak101.com/",
  },
  {
    id: 2,
    title: "Bhinneka Sentra Advisory",
    image: "/images/bsa.png",
    desc: "",
    url: "https://bsadvisory.com/",
  },
  {
    id: 3,
    title: "Ortax - Subjek Pilihan",
    image: "/images/subjek-pilihan.png",
    desc: "",
    url: "https://ortax.org/subjek-pilihan",
  },
  {
    id: 4,
    title: "Ortax - Tax Tools & Calculator",
    image: "/images/kalkulator.png",
    desc: "",
    url: "https://kalkulator.ortax.org/",
  },
  {
    id: 5,
    title: "Datacenter Ortax - Kurs KMK",
    image: "/images/kurskmk.png",
    desc: "",
    url: "https://datacenter.ortax.org/ortax/kursmk/list",
  },
  {
    id: 6,
    title: "Datacenter Ortax - Objek Tarif PPh",
    image: "/images/objek-tarif-pajak.png",
    desc: "",
    url: "https://datacenter.ortax.org/ortax/objek-tarif-pph",
  },
];

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <nav
        id="navbar"
        className="flex flex-col lg:flex-row max-w-6xl w-full items-start gap-4 top-0 left-0 right-0 lg:items-center justify-between p-8"
      >
        <div>
          <p>Based in</p>
          <p>Jakarta, Indonesia</p>
        </div>

        <div className="hidden lg:flex flex-col">
          <p>Say Hi</p>
          <Link href="mailto:muhammad.afif5069@gmail.com">
            muhammad.afif5069@gmail.com
          </Link>
        </div>

        {/* <div className="gap-4 hidden lg:flex">
          <Link href={""}>ABOUT</Link>
          <Link href={""}>EXPERIENCE</Link>
          <Link href={""}>PROJECTS</Link>
          <Link href={""}>CONTACT</Link>
        </div> */}
      </nav>

      <div className="max-w-6xl text-4xl md:text-8xl lg:text-9xl w-full font-bold">
        <h1 className="px-10 flex items-center h-40 lg:h-60">MUHAMMAD</h1>
        <h1 className="px-10 flex items-center h-40 lg:h-60 justify-end bg-slate-300">
          AFIF
        </h1>
        <p className="text-base font-normal lg:w-[50%] px-10 flex items-center h-60">
          Frontend Developer Specializing in React.js, Next.js, and React Native
          development. Creating beautiful, responsive web applications with
          modern technologies.
        </p>
      </div>

      <div
        id="work"
        className="flex min-h-screen max-w-6xl w-full mx-8 flex-col bg- items-center justify-center text-center"
      >
        <p className="text-4xl mb-8">My Work</p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-4">
          {PROJECTS.map((e, i) => (
            <Link
              href={e.url}
              key={i}
              className="flex items-center justify-center border border-gray-300 flex-col rounded overflow-hidden"
              target="_blank"
            >
              <div className="relative w-full aspect-video">
                <Image alt={e.image} src={e.image} fill />
              </div>
              <p className="p-3 font-medium">{e.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div
        id="contact"
        className="bg-gray-100 w-full flex min-h-screen flex-col bg- items-center justify-center text-center"
      >
        <p className="text-4xl">Let’s Connect</p>
        <p className="mt-4 max-w-xl">
          Have a project or idea? Reach out and let’s create something amazing
          together!
        </p>

        <div className="flex mt-4 gap-4">
          <Link
            className="bg-black text-white hover:text-black border border-black px-4 py-2 rounded hover:bg-white transition duration-300"
            href="mailto:muhammad.afif5069@gmail.com"
          >
            Email Me
          </Link>
          <Link
            className="bg-black text-white hover:text-black border border-black px-4 py-2 rounded hover:bg-white transition duration-300"
            href="https://www.linkedin.com/in/mhmmd-afif/"
            target="_blank"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
