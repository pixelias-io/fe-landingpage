import { Archivo } from "next/font/google";
import { Companies } from "@/modules/companies/Companies";
import { Services } from "@/modules/services/Services";
import { Leadership } from "@/modules/leadership/Leadership";
import { ContactUs } from "@/modules/contactus/ContactUs";
import { Hero } from "@/modules/hero/Hero";
import Head from "next/head";
import dynamic from 'next/dynamic'

const DynamicCookieBanner = dynamic(() => import("@/modules/cookieconsent/CookieConsent"), {
  ssr: false,
})

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${archivo.className}`}
    >
      <Head>
        <title>Pixelias - Digital Agency</title>
      </Head>
      <Hero />
      <Services />
      <Leadership />
      <Companies />
      <ContactUs />
      <DynamicCookieBanner />
    </main>
  );
}
