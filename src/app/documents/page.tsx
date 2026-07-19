import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Документы",
  description:
    "Лицензии и разрешительные документы ООО «Пермчермет» на работу с металлоломом.",
};

const documents = [
  {
    title: "Лицензия",
    description:
      "Разрешительный документ на заготовку, переработку и реализацию лома черных и цветных металлов.",
    href: "/docs/license.pdf",
  },
  {
    title: "Оценка условий труда",
    description:
      "Документ о специальной оценке условий труда на предприятии.",
    href: "/docs/ocenka.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        title="Лицензии и разрешительные документы"
        description="Работаем официально: полный пакет документов для заготовки, переработки и реализации лома."
      />
      <section className="container-page grid gap-5 py-14 md:grid-cols-2 md:py-20">
        {documents.map((doc, i) => (
          <Reveal key={doc.title} delay={i * 0.08}>
            <article className="industrial-card flex h-full flex-col rounded-sm p-6">
              <div className="mb-5 flex h-16 w-14 items-center justify-center border border-accent/40 bg-accent/10 font-display text-sm uppercase text-accent">
                PDF
              </div>
              <h2 className="font-display text-2xl uppercase tracking-[0.05em]">
                {doc.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                {doc.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={doc.href}
                  target="_blank"
                  className="glow-btn inline-flex rounded-sm bg-accent px-4 py-2.5 font-display text-xs uppercase tracking-[0.12em] font-semibold text-[#0d1117]"
                >
                  Открыть
                </Link>
                <a
                  href={doc.href}
                  download
                  className="outline-btn inline-flex rounded-sm px-4 py-2.5 font-display text-xs uppercase tracking-[0.12em] text-accent"
                >
                  Скачать
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
