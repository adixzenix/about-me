"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
  /**
   * For content above the fold. Plays a CSS only rise on first paint instead
   * of hiding the content until hydration, so the largest paint is not held
   * back by scripts.
   */
  eager?: boolean;
};

/**
 * Fades its children in the first time they scroll into view.
 * The hidden state lives in CSS behind `prefers-reduced-motion: no-preference`,
 * so visitors who ask for less motion get static content.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  eager = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || eager) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  if (eager) {
    return (
      <div
        className={className ? `reveal-eager ${className}` : "reveal-eager"}
        style={delay ? { animationDelay: `${delay}ms` } : undefined}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
