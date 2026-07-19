"use client";

import { useMemo, useState } from "react";
import { priceCategories, prices } from "@/data/prices";
import { LeadForm } from "@/components/ui/LeadForm";

export function PricesTable() {
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (category === "all") return prices;
    return prices.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {priceCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`rounded-sm border px-3 py-2 font-display text-xs uppercase tracking-[0.12em] transition ${
                category === cat.id
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-concrete text-metal-light hover:border-accent/40 hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-sm border border-white/8">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead className="bg-steel/40 font-display text-xs uppercase tracking-[0.14em] text-metal-light">
              <tr>
                <th className="px-4 py-3 font-medium">Тип металла</th>
                <th className="px-4 py-3 font-medium">Ед.</th>
                <th className="px-4 py-3 font-medium">Ориентир</th>
                <th className="px-4 py-3 font-medium">Комментарий</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-white/6 odd:bg-bg-card/50"
                >
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3 text-metal">{row.unit}</td>
                  <td className="px-4 py-3 text-accent">{row.price}</td>
                  <td className="px-4 py-3 text-text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          Цены меняются в зависимости от сезона и спроса комбинатов. Уточняйте
          актуальный прайс по телефону — или пришлите фото партии для расчета.
        </p>
      </div>

      <div className="industrial-card h-fit rounded-sm p-5 md:p-6">
        <LeadForm intent="calc" />
      </div>
    </div>
  );
}
