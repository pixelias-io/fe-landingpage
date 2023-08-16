import Image from "next/image";
import { Heading } from "../shared/components/Heading/Heading";

export const Leadership = () => {
  return (
    <section className="w-full p-8 lg:p-24 lg:pb-0 pb-0 pt-16 bg-midnight-blue/5">
      <Heading as="h2">About our founder</Heading>
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col gap-8 self-center lg:text-xl text-lg">
          <p>
            Introducing Matheus Moreira, the driving visionary of Pixelias. With
            8+ years of hands-on software development across agencies and
            product companies, he infuses innovation into our digital agency.
            Matheus&apos;s journey is fueled by a passion for crafting
            innovative solutions that surpass expectations.
          </p>
          <p>
            Within Pixelias, he isn&apos;t just a founder; he&apos;s our
            technical compass. Matheus shapes our direction and maintains
            unwavering project excellence, guiding us toward digital brilliance.
          </p>
        </div>
        <Image
          src="/me.png"
          className="justify-self-center rounded-lg bg-gradient-to-tr from-midnight-blue to-fuchsia-950 shadow-2xl shadow-midnight-blue/25 pt-8 my-8 lg:my-0"
          alt="Me"
          height={225}
          width={300}
        />
      </div>
    </section>
  );
};
