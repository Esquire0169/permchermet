import Link from "next/link";
import { site } from "@/data/site";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5 bg-[#090c11]">
      <div className="section-line" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
            {site.shortName} — промышленный прием и переработка лома в Пермском
            крае. Честные весы, собственная техника, прозрачный расчет.
          </p>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-accent">
            Навигация
          </p>
          <ul className="mt-4 space-y-2 text-sm text-metal-light">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-accent">
            Контакты
          </p>
          <ul className="mt-4 space-y-2 text-sm text-metal-light">
            <li>
              <a href={site.phones[0].href} className="hover:text-accent">
                {site.phones[0].label}
              </a>
            </li>
            <li>
              <a href={site.phones[1].href} className="hover:text-accent">
                {site.phones[1].label}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-accent"
              >
                {site.email}
              </a>
            </li>
            <li className="pt-2 text-text-muted">{site.addresses.yard.line}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} {site.name}. Все права защищены.
      </div>
    </footer>
  );
}
