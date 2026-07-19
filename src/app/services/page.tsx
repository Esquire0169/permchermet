import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/data/services";
import { serviceIconMap } from "@/components/icons/TechIcons";
import { Reveal } from "@/components/ui/Reveal";
import { LeadTrigger } from "@/components/ui/LeadModal";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Прием лома, самовывоз, демонтаж металлоконструкций и утилизация транспортных средств в Перми.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title="Что мы делаем для клиентов"
        description="Четыре ключевых направления — от приема на площадке до полного цикла демонтажа и утилизации авто."
      />
      <section className="container-page space-y-6 py-14 md:py-20">
        {services.map((service, i) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 0.05}>
              <article className="industrial-card grid overflow-hidden rounded-sm md:grid-cols-[280px_1fr]">
                <div className="relative min-h-[220px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover photo-treatment"
                    sizes="(max-width:768px) 100vw, 280px"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-accent">
                    <Icon className="h-9 w-9" />
                  </div>
                  <h2 className="mt-3 font-display text-2xl uppercase tracking-[0.05em]">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-text-muted">{service.short}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm text-metal-light"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="outline-btn inline-flex rounded-sm px-4 py-2.5 font-display text-xs uppercase tracking-[0.12em] text-accent"
                    >
                      Подробнее
                    </Link>
                    <LeadTrigger intent="scrap" className="!px-4 !py-2.5 !text-xs">
                      Оставить заявку
                    </LeadTrigger>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
