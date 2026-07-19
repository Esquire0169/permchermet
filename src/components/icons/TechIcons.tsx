type IconProps = { className?: string };

export function IconMetal({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M8 34 L24 10 L40 34 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M16 34 H32" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 26 H28" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconTruck({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="16"
        width="24"
        height="14"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M28 22 H36 L42 28 V30 H28 V22 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="14" cy="34" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16 V12 H20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconCrane({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M10 40 V12 H18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12 H40" stroke="currentColor" strokeWidth="1.6" />
      <path d="M34 12 V24" stroke="currentColor" strokeWidth="1.6" />
      <rect
        x="28"
        y="24"
        width="12"
        height="8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M6 40 H20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconCar({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M8 30 H40 L36 20 H12 L8 30 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M14 20 L18 14 H30 L34 20" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="34" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="34" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconScale({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M24 8 V36" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 14 H36" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 14 L8 26 H16 L12 14 Z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M36 14 L32 26 H40 L36 14 Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M16 36 H32" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconCash({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect
        x="8"
        y="14"
        width="32"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 20 H14 M34 28 H36" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconPhone({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect
        x="16"
        y="8"
        width="16"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="24" cy="34" r="1.5" fill="currentColor" />
      <path d="M20 12 H28" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export const serviceIconMap = {
  metal: IconMetal,
  truck: IconTruck,
  crane: IconCrane,
  car: IconCar,
} as const;
