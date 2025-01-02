import Image from 'next/image'
import { Heading } from '../shared/components/Heading/Heading'

export const Leadership = () => {
  return (
    <section className="w-full p-8 lg:p-24 lg:pb-0 pb-0 pt-16 bg-indigo-400/10">
      <Heading as="h2">Meet Matheus Moreira</Heading>
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col gap-8 self-center lg:text-xl text-lg">
          <p>
            The brains, heart, and soul behind Pixelias. With over 9 years of rolling up his sleeves in software
            development, Matheus is the creative spark that keeps our digital agency buzzing. He’s not just here to
            lead—he’s here to redefine what “awesome” looks like in the digital world.
          </p>
          <p>
            At Pixelias, Matheus is our go-to tech wizard and big-picture thinker. Whether it’s cooking up fresh ideas
            or making sure every project shines, he’s all about delivering the kind of digital magic that turns heads
            (and clicks).
          </p>
        </div>
        <Image
          src="/me-2.png"
          className="justify-self-center rounded-2xl pt-8 my-8 lg:my-0 bg-gradient-to-tr from-indigo-400 to-crimson-pink "
          alt="Me"
          height={225}
          width={300}
        />
      </div>
    </section>
  )
}
