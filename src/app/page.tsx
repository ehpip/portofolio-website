import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        id="home"
        className="flex min-h-screen flex-col bg- items-center justify-center text-center"
      >
        <p className="text-4xl">Hi, I’m Muhammad Afif - Frontend Developer</p>
        <p className="mt-4 max-w-xl">
          Specializing in Next.js, Tailwind CSS, JavaScript, and TypeScript. I
          build sleek, responsive, and user-friendly web applications.
        </p>
        <Link
          href="#work"
          className="bg-black text-white hover:text-black border border-black px-4 py-2 rounded mt-4 hover:bg-white transition duration-300"
        >
          View My Work
        </Link>
      </div>
      <div
        id="about"
        className="bg-gray-100 flex min-h-screen flex-col bg- items-center justify-center text-center"
      >
        <p className="text-4xl">About Me</p>
        <p className="mt-4 max-w-xl">
          I’m a frontend developer passionate about crafting intuitive and
          efficient web experiences. With expertise in modern tools like Next.js
          and Tailwind CSS, I bring ideas to life through clean, scalable code.
        </p>
      </div>
      <div
        id="work"
        className="flex min-h-screen flex-col bg- items-center justify-center text-center"
      >
        <p className="text-4xl">My Work</p>
        <p className="mt-4">
          Here are some of the projects I’ve built using Next.js, Tailwind CSS,
          and more.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
            <div
              key={i}
              className="aspect-square flex items-center justify-center border border-gray-300 p-4 rounded "
            >
              Project {e}
            </div>
          ))}
        </div>
      </div>
      <div
        id="contact"
        className="bg-gray-100 flex min-h-screen flex-col bg- items-center justify-center text-center"
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
          >
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
