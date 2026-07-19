import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const docs = [
  {
    title: "Лицензия",
    desc: "Разрешительные документы на заготовку, переработку и реализацию лома.",
    href: "/docs/license.pdf",
  },
  {
    title: "Оценка условий труда",
    desc: "Подтверждение безопасных условий работы на предприятии.",
    href: "/docs/ocenka.pdf",
  },
];

export function DocumentsTeaser() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Документы"
              title="Лицензии и прозрачность"
              description="У компании полный пакет разрешительных документов для ведения деятельности по заготовке, переработке и реализации лома, а также квалифицированные сотрудники с необходимыми допусками."
            />
            <div className="mt-6">
              <Button href="/documents" variant="secondary">
                Все документы
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {docs.map((doc, i) => (
              <Reveal key={doc.title} delay={i * 0.08}>
                <Link
                  href={doc.href}
                  target="_blank"
                  className="industrial-card flex items-start gap-4 rounded-sm p-5"
                >
                  <div className="flex h-14 w-12 shrink-0 items-center justify-center border border-accent/40 bg-accent/10 font-display text-xs uppercase text-accent">
                    PDF
                  </div>
                  <div>
                    <p className="font-display text-lg uppercase tracking-[0.06em]">
                      {doc.title}
                    </p>
                    <p className="mt-2 text-sm text-text-muted">{doc.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
