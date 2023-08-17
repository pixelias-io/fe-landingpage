import { FC } from "react";
import { IconType } from "react-icons";
import { Heading } from "../shared/components/Heading/Heading";


const ServiceIcon: FC<{ Icon: IconType }> = ({ Icon }) => (
  <span className="p-4 mb-4 bg-sunset-orange rounded-full">
    <Icon size="32" className="text-midnight-blue" />
  </span>
);

interface ServiceProps {
  icon: IconType;
  title: string;
  description: string;
}

export const Service: FC<ServiceProps> = ({ title, icon, description }) => {
  const styleScroll = "snap-center snap-x"
  const styleBox = "flex flex-col lg:basis-1/3 basis-5/6 lg:shrink shrink-0 items-start"
  const stylePadding = "xl:py-16 sm:py-12 py-8 lg:px-12 px-6 sm:px-8"
  const styleShadow = "shadow-2xl shadow-crimson-pink/10"
  const styleRadius = "rounded-lg"
  const styleBg = "bg-sunset-orange/20"

  const className = `${styleBox} ${styleScroll} ${stylePadding} ${styleShadow} ${styleRadius} ${styleBg}`

  return (
    <li className={className}>
      <ServiceIcon Icon={icon} />
      <Heading as="h4" className="text-crimson-pink">{title}</Heading>
      <p>{description}</p>
    </li>
  );
};