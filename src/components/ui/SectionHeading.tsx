type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 font-display text-xs uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.06em] text-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
