import Image from "next/image";
import Lottie from "lottie-react";

import animationData from "./animation_lottie_hero.json";
import { Heading } from "../shared/components/Heading/Heading";

export const Hero = () => {
  return (
    <section className="w-full bg-midnight-blue lg:p-24 pt-16 p-8 heropattern-polkadots-blue-950 relative">
      <Image
        src="/pixelias.png"
        alt="Pixelias Logo"
        width={240}
        height={60}
        priority
      />

      <div className="mt-8 flex items-center flex-col lg:flex-row lg:py-24 py-12">
        <Heading as="h1" className="text-white max-w-[800px] leading-relaxed xl:leading-relaxed">
          Transforming{" "}
          <u className="underline-offset-8 decoration-crimson-pink">Ideas</u>{" "}
          into Exceptional{" "}
          <u className="underline-offset-8 decoration-crimson-pink">
            Digital Experiences
          </u>
        </Heading>
        <Lottie animationData={animationData} loop={true} />;
      </div>
    </section>
  );
};
