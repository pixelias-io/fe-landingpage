import { FC } from "react";
import { IconType } from "react-icons";
import { Heading } from "../shared/components/Heading/Heading";
import { ServiceProps } from "./types";


const ServiceIcon: FC<{ Icon: IconType; title: string }> = ({ Icon, title }) => (
  <span className="p-4 mb-4 bg-indigo-400/20 rounded-full">
    <Icon
      size="32"
      className="text-midnight-blue"
      title={title}
      role="img"
    />
  </span>
)

export const Service: FC<ServiceProps> = ({ title, icon, description }) => {
  const styleScroll = 'snap-center snap-x'
  const styleBox = 'flex flex-col lg:basis-1/3 basis-5/6 lg:shrink shrink-0 items-start'
  const stylePadding = 'py-8 lg:px-8 px-6 sm:px-8'
  const styleShadow = 'shadow-2xl shadow-sky-mist/20'
  const styleBorder = 'border border-gray-200'
  const styleRadius = 'rounded-lg'
  const styleColor = 'text-slate-500'

  const className = `${styleBox} ${styleScroll} ${stylePadding} ${styleShadow} ${styleBorder} ${styleRadius} ${styleColor}`

  return (
    <li
      className={className}
      aria-label={`service-${title}`}
    >
      <ServiceIcon
        title={title}
        Icon={icon}
      />
      <Heading
        as="h4"
        className="text-crimson-pink"
      >
        {title}
      </Heading>
      <p>{description}</p>
    </li>
  )
}