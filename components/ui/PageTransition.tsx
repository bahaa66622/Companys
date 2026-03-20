"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
