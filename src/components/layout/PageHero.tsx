import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[radial-gradient(ellipse_at_top_left,_rgba(31,78,121,0.35),_transparent_50%),linear-gradient(180deg,#121820,#0d1117)] py-16 md:py-20">
      <div className="absolute inset-0 tech-grid opacity-25" />
      <div className="container-page relative">
        <Reveal>
          {eyebrow ? (
            <p className="font-display text-xs uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold uppercase tracking-[0.05em] md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
