import { FC, ReactNode } from 'react'
import { Heading } from '../shared/components/Heading/Heading'

import { Service } from './Service'
import { services } from './constants'
import { ServiceProps } from './types'

interface ServicesListProps {
  title: string
  items: ServiceProps[]
}

const ServicesList: FC<ServicesListProps> = ({ items, title }) => {
  return (
    <li className="mb-12 last:mb-0">
      <Heading as="h3">{title}</Heading>
      <ul className="flex gap-8 snap-mandatory snap-x overflow-x-auto lg:overflow-x-visible p-8 lg:p-0 -m-8 lg:-m-0">
        {items.map(({ title, icon, description }) => (
          <Service
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </li>
  )
}

const ServicesCategories: FC<{ children: ReactNode }> = ({ children }) => (
  <ul className="grid grid-cols-1 gap-8 mt-8">{children}</ul>
)

export const Services = () => {
  const serviceKeys = Object.keys(services) as (keyof typeof services)[]

  return (
    <section className="w-full p-8 lg:p-24 pt-16 space-y-12">
      <Heading as="h2">What We Do?</Heading>

      <div className="text-lg lg:text-2xl space-y-2">
        <p>
          From grabbing attention to turning clicks into customers, we’ve got the skills to make your brand shine
          online.
        </p>
        <p>Whether you need a bold rebrand, or a website that wows, we’re here to make it happen.</p>
      </div>

      <ServicesCategories>
        {serviceKeys.map((serviceKey) => (
          <ServicesList
            key={serviceKey}
            {...services[serviceKey]}
          />
        ))}
      </ServicesCategories>
    </section>
  )
}
