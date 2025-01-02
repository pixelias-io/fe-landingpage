import Image from "next/image";
import { Card } from "../shared/components/Card/Card";
import { FC } from "react";
import { companies } from "./constants";

interface CompanyProps {
  url: string;
  logoSrc: string;
  name: string;
}

const Company: FC<CompanyProps> = ({ url, logoSrc, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="w-36 h-20 relative block"
    >
      <Image src={logoSrc} alt={`${name} Logo`} fill={true} />
    </a>
  );
};

export const Companies = () => {
  return (
    <section className="w-full bg-indigo-400/10 lg:p-24 p-8 lg:pt-8 lg:grid lg:grid-cols-2">
      <p className="lg:text-xl text-lg mb-8 lg:mb-16">
        Those are some of the brands he has worked with over the years, either as a freelancer or a full-time employee:
      </p>

      <ul className="flex flex-col sm:flex-row justify-around items-center col-span-2">
        {companies.map((company) => (
          <Card
            as="li"
            key={company.name}
          >
            <Company {...company} />
          </Card>
        ))}
      </ul>
    </section>
  )
};
