import { useEffect, useRef, useState } from "react";

// A fixed, hand-placed constellation behind the hero. The node positions are
// deliberate (not random), so it reads as a drawn mark rather than generic
// background noise. Pointer moves it slightly — parallax, not a screensaver.
const NODES: { x: number; y: number; r: number }[] = [
  { x: 0.06, y: 0.18, r: 2.5 },
  { x: 0.2, y: 0.1, r: 1.5 },
  { x: 0.34, y: 0.22, r: 2 },
  { x: 0.5, y: 0.06, r: 3 },
  { x: 0.66, y: 0.16, r: 1.5 },
  { x: 0.8, y: 0.09, r: 2.5 },
  { x: 0.94, y: 0.2, r: 1.5 },
  { x: 0.1, y: 0.4, r: 1.5 },
  { x: 0.28, y: 0.48, r: 2 },
  { x: 0.44, y: 0.38, r: 1.5 },
  { x: 0.6, y: 0.46, r: 2.5 },
  { x: 0.76, y: 0.36, r: 1.5 },
  { x: 0.9, y: 0.5, r: 2 },
  { x: 0.04, y: 0.68, r: 2 },
  { x: 0.2, y: 0.78, r: 1.5 },
  { x: 0.38, y: 0.7, r: 2.5 },
  { x: 0.54, y: 0.82, r: 1.5 },
  { x: 0.7, y: 0.66, r: 2 },
  { x: 0.86, y: 0.78, r: 1.5 },
  { x: 0.96, y: 0.64, r: 2.5 },
];

const LINES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19],
];

export function Constellation() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (raf.current) return; // throttle to a frame
      raf.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
        const py = (e.clientY - r.top) / r.height - 0.5;
        setOffset({ x: px * 14, y: py * 14 });
        raf.current = null;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <g className="text-ink-fg-faint">
          {LINES.map(([a, b], i) => {
            const A = NODES[a];
            const B = NODES[b];
            return (
              <line
                key={i}
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="0.25"
              />
            );
          })}
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="currentColor"
              fillOpacity="0.85"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}