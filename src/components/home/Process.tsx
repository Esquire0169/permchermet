"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconCash,
  IconPhone,
  IconScale,
  IconTruck,
} from "@/components/icons/TechIcons";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    title: "Вы оставляете заявку или звоните",
    text: "Телефон или форма на сайте — отвечаем в рабочее время.",
    Icon: IconPhone,
  },
  {
    title: "Оцениваем объем и тип лома",
    text: "Предлагаем условия по актуальной цене. Оценка на объекте или по фото — бесплатно.",
    Icon: IconTruck,
  },
  {
    title: "Самовывоз или прием на площадке",
    text: "Взвешиваем на честных электронных весах до 70 тонн.",
    Icon: IconScale,
  },
  {
    title: "Моментальный расчет",
    text: "Наличные, карта или безнал — удобный способ для вас.",
    Icon: IconCash,
  },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Процесс"
            title="Как мы работаем"
            description="Четыре понятных шага от заявки до денег — без лишней бюрократии и скрытых условий."
          />
        </Reveal>

        <div className="relative mt-12 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px md:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-accent/10 via-accent/70 to-accent/10"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <article className="industrial-card relative h-full rounded-sm p-5">
                <div className="mb-4 flex items-center justify-between">
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.05 }}
                    className="flex h-12 w-12 items-center justify-center border border-accent/35 text-accent"
                  >
                    <step.Icon className="h-7 w-7" />
                  </motion.div>
                  <span className="font-display text-3xl text-steel-soft/80">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg uppercase tracking-[0.06em] text-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
