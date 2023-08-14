import Image from "next/image";
import { Heading } from "../shared/components/Heading/Heading";

export const Leadership = () => {
  return (
    <section className="w-full p-8 lg:p-24 lg:pb-0 pb-0 pt-16 bg-midnight-blue/5">
      <Heading as="h2">About our founder</Heading>
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col gap-8 self-center lg:text-xl text-lg">
          <p>
            Meet Matheus Moreira, the visionary force behind Pixelias. As the
            founder and Senior Software Engineer, Matheus brings over 8 years of
            invaluable hands-on experience in software development to our
            digital agency. His journey is rooted in a passion for crafting
            innovative digital solutions that transcend expectations.
          </p>
          <p>
            At Pixelias, his role goes beyond leadership - he&apos;s the guiding
            compass that steers our technical direction and ensures the highest
            standards of project execution. With a deep commitment to delivering
            excellence and embracing technology&apos;s ever-evolving landscape,
            Matheus&apos;s expertise is the heart and soul of our agency.
          </p>
        </div>
        <Image
          src="/me.png"
          className="justify-self-center rounded-lg bg-sunset-orange/10 shadow-2xl shadow-midnight-blue/25 pt-8 my-8 lg:my-0"
          alt="Me"
          height={300}
          width={400}
        />
      </div>
    </section>
  );
};
