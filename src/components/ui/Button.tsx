import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "glow-btn bg-accent text-[#0d1117] hover:bg-accent-hot font-semibold",
  secondary: "outline-btn text-accent font-semibold",
  ghost:
    "bg-transparent text-metal-light hover:text-accent border border-transparent hover:border-accent/30",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & { href: string; onClick?: () => void };

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm uppercase tracking-[0.08em] font-display ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
