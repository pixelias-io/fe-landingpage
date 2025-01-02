import Image from 'next/image'

import { Heading } from '../shared/components/Heading/Heading'
import { PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'

const DynamicHeroAnimation = dynamic(() => import('./HeroAnimation'))

const TextSliderItem = ({ children, delay }: PropsWithChildren<{ delay: number }>) => {
  const animationStyle = {
    animationDelay: `${delay * 1}s`,
    animationFillMode: 'both'
  }

  return (
    <li
      className="-translate-y-full absolute h-full w-full animate-text-slide"
      style={animationStyle}
    >
      {children}
    </li>
  )
}

const TextSlider = () => {
  const items = ['Web Applications', 'E-commerces', 'Features']

  return (
    <ul className="relative h-[1.5em] overflow-hidden text-crimson-pink brightness-150 saturate-150">
      {items.map((item, index) => (
        <TextSliderItem
          key={index}
          delay={index}
        >
          {item}
        </TextSliderItem>
      ))}
    </ul>
  )
}

const HeroLogo = () => (
  <Image
    src="/pixelias.png"
    alt="Pixelias Logo"
    width={240}
    height={60}
    priority
  />
)

export const Hero = () => {
  return (
    <section className="relative w-full bg-indigo-800 lg:p-24 pt-16 p-8 bg-hero-pattern">
      <HeroLogo />

      <div className="mt-8 flex items-center flex-col lg:flex-row lg:pt-18 py-12">
        <Heading
          as="h1"
          className="text-white max-w-[800px] leading-relaxed xl:leading-snug"
        >
          Transforming Ideas into Exceptional <TextSlider />
        </Heading>
        <DynamicHeroAnimation />
      </div>
    </section>
  )
}
