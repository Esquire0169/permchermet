import { site } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(31,78,121,0.35),_transparent_55%),linear-gradient(180deg,#10161f,_#0d1117)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-steel-soft/40 to-transparent" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Масштаб"
            title="Цифры и факты"
            description="Реальный промышленный объем — не маркетинговые обещания."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <div className="industrial-card rounded-sm p-6">
                <p className="font-display text-4xl font-semibold text-accent md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-sm border border-white/8 bg-black/20 p-6 md:p-8">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-accent">
              Ключевое оборудование
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {site.equipment.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-metal-light"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
