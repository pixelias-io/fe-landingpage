import '@/styles/preview/base.css'
import '@/styles/preview/header.css'
import '@/styles/preview/hero.css'
import '@/styles/preview/services.css'
import '@/styles/preview/experience.css'
import '@/styles/preview/process.css'
import '@/styles/preview/about.css'
import '@/styles/preview/contact.css'
import '@/styles/preview/footer.css'
import '@/styles/preview/motion.css'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
