"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
  }, []);

  return <div ref={ref} className="card">{children}</div>;
}
