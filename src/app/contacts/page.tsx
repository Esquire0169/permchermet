import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Адрес площадки и офиса ООО «Пермчермет» в Перми, телефоны, email и форма обратной связи.",
};

export default function ContactsPage() {
  const yard = encodeURIComponent(site.addresses.yard.line);
  const office = encodeURIComponent(site.addresses.office.line);

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Связаться с Пермчермет"
        description="Площадка приема и офис на ул. Героев Хасана. Звоните или оставьте заявку."
      />

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] md:py-20">
        <Reveal>
          <div className="space-y-4">
            <div className="industrial-card rounded-sm p-5">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                {site.addresses.yard.title}
              </p>
              <p className="mt-2 text-lg">{site.addresses.yard.line}</p>
            </div>
            <div className="industrial-card rounded-sm p-5">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                {site.addresses.office.title}
              </p>
              <p className="mt-2 text-lg">{site.addresses.office.line}</p>
            </div>
            <div className="industrial-card rounded-sm p-5">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                Телефоны и почта
              </p>
              <div className="mt-3 space-y-2">
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block text-xl text-accent hover:text-accent-hot"
                  >
                    {p.label}
                  </a>
                ))}
                <a
                  href={`mailto:${site.email}`}
                  className="block text-metal-light hover:text-accent"
                >
                  {site.email}
                </a>
                <p className="text-sm text-text-muted">Режим: {site.hours}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="industrial-card rounded-sm p-5 md:p-6">
            <LeadForm intent="contact" />
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <Reveal>
          <h2 className="font-display text-2xl uppercase tracking-[0.06em]">
            Карта: офис и площадка
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-white/8">
              <p className="bg-bg-card px-4 py-2 font-display text-xs uppercase tracking-[0.14em] text-accent">
                Площадка
              </p>
              <iframe
                title="Площадка Пермчермет"
                src={`https://maps.google.com/maps?q=${yard}&z=16&output=embed`}
                className="h-72 w-full grayscale contrast-125 invert-[0.88]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-sm border border-white/8">
              <p className="bg-bg-card px-4 py-2 font-display text-xs uppercase tracking-[0.14em] text-accent">
                Офис
              </p>
              <iframe
                title="Офис Пермчермет"
                src={`https://maps.google.com/maps?q=${office}&z=16&output=embed`}
                className="h-72 w-full grayscale contrast-125 invert-[0.88]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
