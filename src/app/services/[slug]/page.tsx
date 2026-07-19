import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { LeadTrigger } from "@/components/ui/LeadModal";
import { LeadForm } from "@/components/ui/LeadForm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Услуга" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Услуга"
        title={service.title}
        description={service.short}
      />
      <section className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div className="space-y-8">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/8">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover photo-treatment"
                sizes="(max-width:768px) 100vw, 60vw"
                priority
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-metal-light">
              {service.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl uppercase tracking-[0.06em]">
              Как проходит работа
            </h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, i) => (
                <li
                  key={step.title}
                  className="industrial-card rounded-sm p-5"
                >
                  <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                    Шаг {i + 1}
                  </p>
                  <p className="mt-2 font-display text-lg uppercase tracking-[0.04em]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl uppercase tracking-[0.06em]">
              Выгоды для клиента
            </h2>
            <ul className="mt-4 grid gap-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-metal-light">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <LeadTrigger intent="scrap">Оставить заявку</LeadTrigger>
          </Reveal>
        </div>

        <Reveal className="h-fit">
          <div className="industrial-card sticky top-24 rounded-sm p-5 md:p-6">
            <LeadForm
              intent={slug === "samovyvoz" ? "pickup" : "scrap"}
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
