import Image from "next/image";
import { gallery } from "@/data/gallery";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section className="bg-bg-elevated/50 py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Площадка"
            title="Площадка и оборудование"
            description="Реальные объекты и техника компании — основа скорости приема и прозрачности взвешивания."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.06}>
              <figure className="industrial-card group overflow-hidden rounded-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover photo-treatment transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-90" />
                </div>
                <figcaption className="space-y-1 p-4">
                  <p className="font-display text-sm uppercase tracking-[0.08em] text-text">
                    {item.caption}
                  </p>
                  <p className="text-sm text-text-muted">{item.why}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
