"use client";

import { FormEvent, useState } from "react";

type Employee = { id: string; name: string };

export function HeadTaskManager({ employees, departmentId }: { employees: Employee[]; departmentId: string }) {
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.get("title"),
        description: form.get("description"),
        assignedToId: form.get("assignedToId"),
        departmentId
      })
    });

    const payload = await response.json();
    setMessage(response.ok ? "تم إنشاء المهمة" : payload.error ?? "خطأ");
    if (response.ok) e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card space-y-3">
      <h3 className="font-semibold">إنشاء مهمة جديدة</h3>
      <input name="title" className="w-full rounded-lg border p-2" placeholder="عنوان المهمة" required />
      <textarea name="description" className="w-full rounded-lg border p-2" placeholder="وصف المهمة" required />
      <select name="assignedToId" className="w-full rounded-lg border p-2" required>
        <option value="">اختر موظف</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>
      {message && <p className="text-sm text-slate-600">{message}</p>}
      <button className="rounded-lg bg-brand px-4 py-2 text-white">إضافة المهمة</button>
    </form>
  );
}
