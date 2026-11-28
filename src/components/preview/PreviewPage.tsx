import { useEffect } from 'react'
import Head from 'next/head'
import { LocaleProvider, useLocale } from './Locale'
import { Header } from './Header'
import { Hero } from './Hero'
import { Services } from './Services'
import { Experience } from './Experience'
import { Process } from './Process'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { mountMotion } from './motion'
function Content() {
  const { locale } = useLocale()
  useEffect(() => mountMotion(), [])
  const title =
    locale === 'pt' ? 'Pixelias — Juntos, construímos coisas grandiosas' : 'Pixelias — Great things are built together'
  const description =
    locale === 'pt' ?
      'Pixelias é um estúdio de produtos que ajuda equipes a projetar, desenvolver e aprimorar experiências digitais.'
    : 'Pixelias is a product studio that helps teams design, build and improve digital experiences.'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="author"
          content="Pixelias"
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:url"
          content="https://pixelias.io/"
        />
        <meta
          property="og:image"
          content="https://pixelias.io/og-image.png"
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content="https://pixelias.io/og-image.png"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <Header />
      <main id="top" tabIndex={-1}>
        <Hero />
        <Services />
        <Experience />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
export default function PreviewPage() {
  return (
    <LocaleProvider>
      <Content />
    </LocaleProvider>
  )
}
