import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  direction?: "left" | "right";
  className?: string;
};

export default function Marquee({
  children,
  duration = 28,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`marquee ${direction === "right" ? "marquee--reverse" : ""} ${className}`.trim()}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div className="marquee__fade marquee__fade--left" aria-hidden />
      <div className="marquee__fade marquee__fade--right" aria-hidden />
      <div className="marquee__viewport">
        <div className="marquee__track">
          <div className="marquee__group">{children}</div>
          <div className="marquee__group" aria-hidden>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
