import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PricesTable } from "@/components/prices/PricesTable";

export const metadata: Metadata = {
  title: "Цены на металлолом",
  description:
    "Актуальные цены закупа лома черных и цветных металлов в Перми. Рассчитайте стоимость по фото или телефону.",
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Прайс"
        title="Цены закупа металлолома"
        description="Если нашли цену выше — сообщите нам. Мы готовы дать предложение еще выше. Оплата физлицам в день сдачи, юрлицам — безнал до 2 дней."
      />
      <section className="container-page py-14 md:py-20">
        <PricesTable />
      </section>
    </>
  );
}
