"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import { LeadTrigger } from "@/components/ui/LeadModal";
import { withBase } from "@/lib/paths";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] overflow-hidden metal-noise"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y, opacity }}
      >
        <Image
          src={withBase("/images/hero-yard.png")}
          alt="Площадка приема металлолома Пермчермет"
          fill
          priority
          className="object-cover photo-treatment scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/88 to-[#0d1117]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117]/55" />
        <div className="absolute inset-0 tech-grid opacity-40" />
      </motion.div>

      <div className="relative z-10 container-page flex min-h-[92vh] flex-col justify-center py-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xs uppercase tracking-[0.28em] text-accent md:text-sm"
        >
          {site.name} · Пермский край
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-text md:text-6xl lg:text-7xl"
        >
          Прием лома черных и цветных металлов в&nbsp;Перми
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-metal-light md:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <LeadTrigger intent="scrap">Сдать лом сейчас</LeadTrigger>
          <LeadTrigger intent="pickup" variant="secondary">
            Заказать самовывоз
          </LeadTrigger>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3"
        >
          {site.trustMarkers.map((item) => (
            <li
              key={item}
              className="border-l border-accent/50 bg-black/25 px-3 py-3 text-sm text-metal-light backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      <div className="pulse-glow pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-steel/20 blur-3xl" />
    </section>
  );
}
