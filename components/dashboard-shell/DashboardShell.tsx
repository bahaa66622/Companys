import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";

export function DashboardShell({
  title,
  subtitle,
  links,
  children
}: {
  title: string;
  subtitle: string;
  links: { href: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <main className="grid min-h-screen gap-4 bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:grid-cols-[280px,1fr]">
      <Sidebar links={links} />
      <section className="space-y-4">
        <header className="card bg-white/90">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </header>
        {children}
      </section>
    </main>
  );
}
