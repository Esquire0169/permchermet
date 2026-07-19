"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { Logo } from "@/components/brand/Logo";
import { LeadTrigger } from "@/components/ui/LeadModal";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0d1117]/88 backdrop-blur-md">
      <div className="container-page flex h-16 items-center gap-6 md:h-[72px] lg:gap-8">
        <div className="shrink-0">
          <Logo />
        </div>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:gap-1 lg:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-sm px-2.5 py-2 text-sm transition xl:px-3 ${
                  active
                    ? "text-accent"
                    : "text-metal-light hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-4 lg:flex">
          <div className="flex flex-col items-end gap-0.5">
            {site.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="whitespace-nowrap text-xs tabular-nums leading-tight text-metal-light transition hover:text-accent xl:text-sm"
              >
                {phone.label}
              </a>
            ))}
          </div>
          <LeadTrigger intent="scrap" className="!px-4 !py-2.5 !text-xs">
            Сдать лом
          </LeadTrigger>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center border border-concrete text-accent lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-display text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-bg-elevated lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-base text-metal-light hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            {site.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="px-2 py-3 text-accent"
                onClick={() => setOpen(false)}
              >
                {phone.label}
              </a>
            ))}
            <LeadTrigger intent="scrap" className="mt-2 w-full">
              Сдать лом
            </LeadTrigger>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
