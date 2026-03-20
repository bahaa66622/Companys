"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function Sidebar({ links }: { links: { href: string; label: string }[] }) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 });
  }, []);

  return (
    <aside ref={ref} className="h-full w-full rounded-2xl bg-dark p-4 text-white md:w-64">
      <h2 className="mb-4 text-xl font-bold">CMS Dashboard</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 hover:bg-slate-700">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
