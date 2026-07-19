import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Stats } from "@/components/home/Stats";
import { PricesTeaser } from "@/components/home/PricesTeaser";
import { Gallery } from "@/components/home/Gallery";
import { DocumentsTeaser } from "@/components/home/DocumentsTeaser";
import { ContactsBlock } from "@/components/home/ContactsBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Process />
      <ServicesGrid />
      <Stats />
      <PricesTeaser />
      <Gallery />
      <DocumentsTeaser />
      <ContactsBlock />
    </>
  );
}
