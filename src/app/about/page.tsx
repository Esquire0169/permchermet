import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "ООО «Пермчермет» — более 17 лет на рынке лома Пермского края, от 16 000 тонн в год, площадка более 5000 м².",
};

const timeline = [
  {
    title: "Старт на рынке края",
    text: "Вышли на рынок лома черных и цветных металлов Пермского края и выстроили стабильные поставки на комбинаты.",
  },
  {
    title: "Собственная площадка",
    text: "Развернули производственные площади более 5000 м² с кранами, прессами и электронной весовой.",
  },
  {
    title: "Парк спецтехники",
    text: "Собрали собственный автопарк ломовозов с гидроманипуляторами для самовывоза и демонтажных работ.",
  },
  {
    title: "Сегодня",
    text: "Перерабатываем не менее 16 000 тонн лома ежегодно и работаем с частными и корпоративными клиентами.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title="Промышленный оператор металлолома"
        description="ООО «Пермчермет» — надежный партнер по приему, переработке и реализации лома в Пермском крае."
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-metal-light">
              <p>
                Мы работаем на рынке лома черных и цветных металлов Пермского
                края более 17 лет. Ежегодный объем переработки и реализации —
                не менее 16 000 тонн. Потребители нашей продукции —
                металлургические комбинаты региона и за его пределами.
              </p>
              <p>
                Производственная база превышает 5000 м² и оснащена всем, что
                нужно для честного и быстрого приема: мостовыми и козловыми
                кранами, прессами, электронной автомобильной весовой на 70 тонн,
                электромагнитными шайбами, дозиметрическим и газорезательным
                оборудованием.
              </p>
              <p>
                Для вывоза используем собственный парк специализированного
                транспорта — ломовозы с гидроманипулятором грузоподъемностью до
                20 тонн. У компании полный пакет лицензий и разрешительных
                документов, а сотрудники имеют необходимые допуски и
                удостоверения.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.stats.map((stat) => (
                <div key={stat.label} className="industrial-card rounded-sm p-5">
                  <p className="font-display text-4xl text-accent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-elevated/50 py-14 md:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl uppercase tracking-[0.06em]">
              Таймлайн развития
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="industrial-card h-full rounded-sm p-5">
                  <p className="font-display text-xs uppercase tracking-[0.16em] text-accent">
                    Этап 0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-lg uppercase tracking-[0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-[0.06em]">
            Техника и оборудование
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.equipment.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.05}>
              <li className="industrial-card rounded-sm px-4 py-4 text-sm text-metal-light">
                <span className="mr-2 inline-block h-1.5 w-1.5 bg-accent" />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-bg-elevated/40 py-14 md:py-20">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-3xl uppercase tracking-[0.06em]">
                Галерея площадки
              </h2>
            </Reveal>
            <Reveal>
              <Button href="/documents" variant="secondary">
                Документы и лицензии
              </Button>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <Reveal key={item.src} delay={(i % 3) * 0.05}>
                <figure className="industrial-card overflow-hidden rounded-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover photo-treatment"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-text-muted">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
