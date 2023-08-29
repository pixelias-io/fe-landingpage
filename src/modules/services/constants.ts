import {
  PiAtomLight,
  PiLightbulbLight,
  PiCircuitryLight,
  PiTrendUpLight,
  PiTargetLight,
  PiShoppingBagLight,
  PiFilesLight,
} from "react-icons/pi";
import { ServiceProps } from "./types";

const marketingServices: ServiceProps[] = [
  {
    icon: PiTrendUpLight,
    title: "Landing Pages",
    description:
      "Make a lasting impression with Landing Pages designed to engage, inform, and drive action. Our strategic approach ensures your visitors become loyal customers.",
  },
  {
    icon: PiLightbulbLight,
    title: "Product Pages",
    description:
      "Showcase your products like never before with meticulously crafted Product Pages. We merge creativity and functionality to captivate your audience and boost sales.",
  },
  {
    icon: PiFilesLight,
    title: "Microsites",
    description:
      "When a story needs a stage, we create Microsites that tell it in style. Unveil new products, campaigns, or initiatives with an immersive digital experience.",
  },
];

const productServices: ServiceProps[] = [
  {
    icon: PiCircuitryLight,
    title: "Feature Development",
    description:
      "Stay ahead of the curve with Feature Development that enhances user experiences. We turn your ideas into reality, breathing life into your digital platform.",
  },
  {
    icon: PiShoppingBagLight,
    title: "E-commerce",
    description:
      "Step into online retail confidently with our e-commerce expertise. We create stunning storefronts using Shopify or Swell, ensuring success in the digital marketplace.",
  },
];

const experimentationServices: ServiceProps[] = [
  {
    icon: PiTargetLight,
    title: "A/B Testing",
    description:
      "Data-driven decisions lead to success. Our A/B Testing services fine-tune your digital elements, ensuring optimal performance and user satisfaction.",
  },
  {
    icon: PiAtomLight,
    title: "Feature Testing",
    description:
      "Feature Testing is the key to unlocking your digital platform's full potential. We test, analyze, and optimize your features to deliver the best results.",
  },
];

export const services = {
  marketing: {
    title: "Marketing",
    items: marketingServices
  },
  product: {
    title: "Product",
    items: productServices
  },
  experimentation: { 
    title: "Experimentation",
    items: experimentationServices 
  },
} as const;