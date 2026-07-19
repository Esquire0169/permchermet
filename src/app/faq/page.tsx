import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FaqList } from "@/components/faq/FaqList";
import { Reveal } from "@/components/ui/Reveal";
import { LeadTrigger } from "@/components/ui/LeadModal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Ответы на частые вопросы о приеме лома, взвешивании, самовывозе и утилизации автомобилей.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Частые вопросы"
        description="Коротко о взвешивании, документах, самовывозе, утилизации авто и формировании цены."
      />
      <section className="container-page py-14 md:py-20">
        <Reveal>
          <FaqList />
        </Reveal>
        <Reveal className="mt-10">
          <div className="industrial-card flex flex-col items-start gap-4 rounded-sm p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-text-muted">
              Не нашли ответ? Оставьте заявку или позвоните — подскажем по вашей
              партии и рассчитаем стоимость.
            </p>
            <LeadTrigger intent="contact">Задать вопрос</LeadTrigger>
          </div>
        </Reveal>
      </section>
    </>
  );
}
