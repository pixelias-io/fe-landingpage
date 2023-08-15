// create footer component with links to linkedin, github, and email using nextjs link component

import React, { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiLinkedinLogoFill, PiGithubLogoFill } from "react-icons/pi";

interface FooterLinkProps {
  children: ReactNode;
  href: string;
}

const FooterLink: FC<FooterLinkProps> = ({ children, href }) => (
  <a
    target="_blank"
    href={href}
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-midnight-blue text-white flex justify-between items-center p-8 flex-col sm:flex-row gap-6">
      <Image src="/pixelias.png" alt="Pixelias Logo" width={120} height={30} />

      <span>
        Made with <span className="text-red-500">❤️</span> in BH - Brazil
      </span>

      <div className="flex gap-6">
        <FooterLink href="https://www.linkedin.com/company/pixelias">
          <PiLinkedinLogoFill /> LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/pixelias-io">
          <PiGithubLogoFill /> Github
        </FooterLink>
      </div>
    </footer>
  );
};
