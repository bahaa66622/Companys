"use client";

import { FormEvent, useState } from "react";

export function EmployeeTaskActions({ taskId }: { taskId: string }) {
  const [message, setMessage] = useState("");

  const updateStatus = async (status: "TODO" | "IN_PROGRESS" | "DONE") => {
    const response = await fetch("/api/tasks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, status })
    });
    const payload = await response.json();
    setMessage(response.ok ? "تم تحديث الحالة" : payload.error ?? "خطأ");
  };

  const createReport = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const response = await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, content: form.get("content") })
    });
    const payload = await response.json();
    setMessage(response.ok ? "تم إرسال التقرير" : payload.error ?? "خطأ");
    if (response.ok) e.currentTarget.reset();
  };

  return (
    <div className="mt-3 space-y-3">
      <div className="flex gap-2">
        <button onClick={() => updateStatus("TODO")} className="rounded-lg bg-slate-200 px-3 py-1 text-sm">TODO</button>
        <button onClick={() => updateStatus("IN_PROGRESS")} className="rounded-lg bg-amber-100 px-3 py-1 text-sm">IN_PROGRESS</button>
        <button onClick={() => updateStatus("DONE")} className="rounded-lg bg-emerald-100 px-3 py-1 text-sm">DONE</button>
      </div>
      <form onSubmit={createReport} className="space-y-2">
        <textarea name="content" className="w-full rounded-lg border p-2" placeholder="اكتب تقريرك" required />
        <button className="rounded-lg bg-brand px-3 py-1 text-white">إرسال تقرير</button>
      </form>
      {message && <p className="text-xs text-slate-600">{message}</p>}
    </div>
  );
}
