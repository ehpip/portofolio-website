import React from "react";
import Links from "next/link";

const Link = ({
  href,
  className,
  children,
  target,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
}) => {
  return (
    <Links
      href={href}
      className={`${className} group transition duration-300`}
      target={target}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
    </Links>
  );
};

export default Link;
