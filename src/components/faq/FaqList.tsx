"use client";

import { useState } from "react";
import { faq } from "@/data/faq";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="industrial-card overflow-hidden rounded-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base uppercase tracking-[0.04em] md:text-lg">
                {item.q}
              </span>
              <span className="font-display text-accent">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-white/6 px-5 py-4 text-sm leading-relaxed text-text-muted md:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
