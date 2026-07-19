import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { serviceIconMap } from "@/components/icons/TechIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  return (
    <section className="relative bg-bg-elevated/60 py-20 md:py-28">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Услуги"
            title="Полный цикл работы с металлоломом"
            description="Прием, вывоз, демонтаж и утилизация — одна команда, одна площадка, прозрачные условия."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <article className="industrial-card group overflow-hidden rounded-sm">
                  <div className="grid md:grid-cols-[180px_1fr]">
                    <div className="relative min-h-[180px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover photo-treatment transition duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 180px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="mb-3 text-accent">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-display text-xl uppercase tracking-[0.05em]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {service.short}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-5 inline-flex font-display text-xs uppercase tracking-[0.14em] text-accent transition hover:text-accent-hot"
                      >
                        Подробнее →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <Button href="/services" variant="secondary">
            Все услуги
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
