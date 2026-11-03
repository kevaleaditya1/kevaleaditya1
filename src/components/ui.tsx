import { useEffect, useRef, useState, type ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-teal text-sm tabular">{index}</span>
        <span className="h-px w-12 bg-ink-line" />
      </div>
      <h2 className="text-display-md text-ink-fg">{title}</h2>
      {description && (
        <p className="mt-4 text-ink-fg-soft text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-500 ease-out",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-mono text-ink-fg-soft bg-ink-soft border border-ink-line">
      {children}
    </span>
  );
}

export function Pill({
  children,
  accent = "teal",
}: {
  children: ReactNode;
  accent?: "copper" | "teal";
}) {
  const tone =
    accent === "copper"
      ? "text-copper border-copper-line bg-copper-soft"
      : "text-teal border-teal-line bg-teal-soft";
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-sm text-[11px] font-mono border tabular",
        tone
      )}
    >
      {children}
    </span>
  );
}

export function Rule() {
  return <div className="h-px bg-ink-line" />;
}