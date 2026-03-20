import { ReactNode } from "react";

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card bg-white/90">
      <h2 className="mb-3 border-b pb-2 text-lg font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}
