import Link from "next/link";
import { teaserPrices } from "@/data/prices";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LeadTrigger } from "@/components/ui/LeadModal";

export function PricesTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Цены"
              title="Актуальный прайс — по запросу"
              description="Рынок лома подвижный. Назовите тип металла — дадим цену на сегодня. Если нашли выше, сообщите: предложим лучше."
            />
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            <Button href="/prices" variant="secondary">
              Все цены
            </Button>
            <LeadTrigger intent="calc">Рассчитать стоимость</LeadTrigger>
          </Reveal>
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-sm border border-white/8">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-steel/40 font-display text-xs uppercase tracking-[0.14em] text-metal-light">
              <tr>
                <th className="px-4 py-3 font-medium">Тип</th>
                <th className="px-4 py-3 font-medium">Ед.</th>
                <th className="px-4 py-3 font-medium">Цена</th>
                <th className="px-4 py-3 font-medium">Комментарий</th>
              </tr>
            </thead>
            <tbody>
              {teaserPrices.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-white/6 bg-bg-card/40 odd:bg-bg-card/70"
                >
                  <td className="px-4 py-3 text-text">{row.name}</td>
                  <td className="px-4 py-3 text-metal">{row.unit}</td>
                  <td className="px-4 py-3 text-accent">{row.price}</td>
                  <td className="px-4 py-3 text-text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-4 text-sm text-text-muted">
          Полная таблица и фильтры — на странице{" "}
          <Link href="/prices" className="text-accent hover:text-accent-hot">
            «Цены»
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
