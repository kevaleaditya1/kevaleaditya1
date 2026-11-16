type MarkProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

// A hand-drawn mark: a sketchy eye (computer vision) with a couple of
// circuit nodes trailing off it. Drawn, not typed — the slight wobble in
// the paths is the whole point.
export function Mark({ className, ...rest }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* outer lash — deliberately irregular */}
        <path
          d="M5.5 32.5 C7 22.5, 18 11.5, 32 10.5 C47 9.5, 57.5 21, 58.5 31.5 C59.5 42.5, 48 53.5, 32 54 C17 54.5, 5.5 43.5, 5.5 32.5 Z"
          strokeWidth="2"
        />
        {/* iris */}
        <path
          d="M20.5 32.5 C20.5 26, 26 21, 32 21 C38 21, 43.5 26, 43.5 32.5 C43.5 39, 38 44, 32 44 C26 44, 20.5 39, 20.5 32.5 Z"
          strokeWidth="1.5"
        />
        {/* pupil */}
        <circle cx="32.5" cy="32" r="3.5" fill="currentColor" />
        {/* node + trace, bottom-left */}
        <path d="M12 50.5 L17 45.5" strokeWidth="1.25" />
        <circle cx="12" cy="50.5" r="2.2" fill="currentColor" />
        {/* node + trace, top-right */}
        <path d="M52 13.5 L47 18.5" strokeWidth="1.25" />
        <circle cx="52" cy="13.5" r="2.2" fill="currentColor" />
      </g>
    </svg>
  );
}