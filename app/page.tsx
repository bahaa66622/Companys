import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-bold text-slate-900">نظام إدارة الشركات الداخلي</h1>
      <p className="text-slate-600">منصة احترافية لإدارة الشركات والأقسام والمهام والتقارير متعددة الأدوار.</p>
      <Link href="/auth/login" className="rounded-xl bg-brand px-6 py-3 font-semibold text-white">
        تسجيل الدخول
      </Link>
    </main>
  );
}
