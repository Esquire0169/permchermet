import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/ui/LeadForm";

export function ContactsBlock() {
  const mapQuery = encodeURIComponent(site.addresses.yard.line);

  return (
    <section className="border-t border-white/5 bg-[#090c11] py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Площадка и офис в Перми"
            description="Приезжайте на весовую или оставьте заявку — перезвоним и согласуем условия."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="industrial-card rounded-sm p-5">
                <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                  {site.addresses.yard.title}
                </p>
                <p className="mt-2 text-lg text-text">{site.addresses.yard.line}</p>
              </div>
              <div className="industrial-card rounded-sm p-5">
                <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                  {site.addresses.office.title}
                </p>
                <p className="mt-2 text-lg text-text">
                  {site.addresses.office.line}
                </p>
              </div>
              <div className="industrial-card rounded-sm p-5">
                <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                  Связь
                </p>
                <div className="mt-3 space-y-2 text-lg">
                  {site.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="block text-accent hover:text-accent-hot"
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
                  <p className="text-sm text-text-muted">{site.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="overflow-hidden rounded-sm border border-white/8">
                <iframe
                  title="Карта площадки Пермчермет"
                  src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                  className="h-64 w-full grayscale contrast-125 invert-[0.88] md:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="industrial-card rounded-sm p-5 md:p-6">
                <LeadForm intent="contact" compact />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
