"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { LeadForm } from "./LeadForm";

type Intent = "scrap" | "pickup" | "calc" | "contact";

type LeadContextValue = {
  openLead: (intent?: Intent) => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function useLead() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used within LeadProvider");
  return ctx;
}

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<Intent>("scrap");

  const openLead = useCallback((next: Intent = "scrap") => {
    setIntent(next);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <LeadContext.Provider value={{ openLead }}>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg rounded-t-md border border-concrete bg-bg-elevated p-5 shadow-2xl sm:rounded-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-xl uppercase tracking-[0.08em]">
                Заявка
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-metal-light transition hover:text-accent"
              >
                Закрыть
              </button>
            </div>
            <LeadForm intent={intent} compact />
          </div>
        </div>
      ) : null}
    </LeadContext.Provider>
  );
}

export function LeadTrigger({
  intent = "scrap",
  className = "",
  children,
  variant = "primary",
}: {
  intent?: Intent;
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const { openLead } = useLead();
  const styles = {
    primary:
      "glow-btn bg-accent text-[#0d1117] hover:bg-accent-hot font-semibold",
    secondary: "outline-btn text-accent font-semibold",
    ghost:
      "bg-transparent text-metal-light hover:text-accent border border-transparent",
  };

  return (
    <button
      type="button"
      onClick={() => openLead(intent)}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm uppercase tracking-[0.08em] font-display ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
