import { FC, ReactNode } from "react";
import { Heading } from "../shared/components/Heading/Heading";

import {
  PiAtomLight,
  PiLightbulbLight,
  PiCircuitryLight,
  PiTrendUpLight,
  PiTargetLight,
  PiShoppingBagLight,
  PiFilesLight,
} from "react-icons/pi";
import { Service } from "./Service";

interface ServicesListProps {
  category: string;
  children: ReactNode;
}

const ServicesList: FC<ServicesListProps> = ({ children, category }) => {
  return (
    <li className="mb-12 last:mb-0">
      <Heading as="h3">{category}</Heading>
      <ul className="flex gap-8 snap-mandatory snap-x overflow-x-auto lg:overflow-x-visible">{children}</ul>
    </li>
  )
};

const ServicesCategories: FC<{ children: ReactNode }> = ({ children }) => (
  <ul className="grid grid-cols-1 gap-4 mt-8">{children}</ul>
);

export const Services = () => {
  return (
    <section className="w-full p-8 lg:p-24 pt-16">
      <Heading as="h2">Our services</Heading>

      <div className="lg:text-xl text-lg">
        <p>
          Our comprehensive suite of services is designed to elevate your online
          presence, captivate your audience, and drive measurable results.
        </p>

        <p>Discover how we can transform your business in the digital landscape:</p>
      </div>

      <ServicesCategories>
          <ServicesList category="Marketing">
            <Service
              icon={PiTrendUpLight}
              title="Landing Pages"
              description="Make a lasting impression with Landing Pages designed to engage, inform, and drive action. Our strategic approach ensures your visitors become loyal customers."
            />

            <Service
              icon={PiLightbulbLight}
              title="Product Pages"
              description="Showcase your products like never before with meticulously crafted Product Pages. We merge creativity and functionality to captivate your audience and boost sales."
            />

            <Service
              icon={PiFilesLight}
              title="Microsites"
              description="When a story needs a stage, we create Microsites that tell it in style. Unveil new products, campaigns, or initiatives with an immersive digital experience."
            />
          </ServicesList>
          <ServicesList category="Product">
            <Service
              icon={PiCircuitryLight}
              title="Feature Development"
              description="Stay ahead of the curve with Feature Development that enhances user experiences. We turn your ideas into reality, breathing life into your digital platform."
            />

            <Service
              icon={PiShoppingBagLight}
              title="E-commerce"
              description="Step into online retail confidently with our e-commerce expertise. We create stunning storefronts using Shopify or Swell, ensuring success in the digital marketplace."
            />
          </ServicesList>
          <ServicesList category="Experimentation">
            <Service
                icon={PiTargetLight}
                title="A/B Testing"
                description="Data-driven decisions lead to success. Our A/B Testing services fine-tune your digital elements, ensuring optimal performance and user satisfaction."
              />

            <Service 
              icon={PiAtomLight}
              title="Feature Testing"
              description="Feature Testing is the key to unlocking your digital platform's full potential. We test, analyze, and optimize your features to deliver the best results."
              />
          </ServicesList>
      </ServicesCategories>
    </section>
  );
};
