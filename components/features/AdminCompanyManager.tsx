"use client";

import { FormEvent, useState } from "react";

type ManagerOption = { id: string; name: string; email: string };

export function AdminCompanyManager({ managers }: { managers: ManagerOption[] }) {
  const [message, setMessage] = useState("");

  const onCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const response = await fetch("/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        managerId: form.get("managerId") || undefined
      })
    });

    const payload = await response.json();
    setMessage(response.ok ? "تم إنشاء الشركة بنجاح" : payload.error ?? "حدث خطأ");
    if (response.ok) e.currentTarget.reset();
  };

  return (
    <form onSubmit={onCreate} className="card space-y-3">
      <h3 className="text-lg font-semibold">إنشاء شركة جديدة</h3>
      <input name="name" className="w-full rounded-lg border p-2" placeholder="اسم الشركة" required />
      <select name="managerId" className="w-full rounded-lg border p-2">
        <option value="">بدون مدير حالياً</option>
        {managers.map((manager) => (
          <option key={manager.id} value={manager.id}>
            {manager.name} - {manager.email}
          </option>
        ))}
      </select>
      {message && <p className="text-sm text-slate-600">{message}</p>}
      <button className="rounded-lg bg-brand px-4 py-2 text-white">حفظ</button>
    </form>
  );
}
