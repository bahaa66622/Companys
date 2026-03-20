"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function CounterCard({ label, value }: { label: string; value: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!numberRef.current) return;
    gsap.fromTo(numberRef.current, { innerText: 0 }, { innerText: value, duration: 1, snap: { innerText: 1 } });
  }, [value]);

  return (
    <div className="card">
      <p className="text-sm text-slate-500">{label}</p>
      <span ref={numberRef} className="text-3xl font-bold text-slate-900">0</span>
    </div>
  );
}
