import { Archivo } from "next/font/google";
import { Companies } from "@/modules/companies/Companies";
import { Services } from "@/modules/services/Services";
import { Leadership } from "@/modules/leadership/Leadership";
import { ContactUs } from "@/modules/contactus/ContactUs";
import { Hero } from "@/modules/hero/Hero";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${archivo.className}`}
    >
      <Hero />
      <Services />
      <Leadership />
      <Companies />
      <ContactUs />
    </main>
  );
}
