"use client";

import { FormEvent, useState } from "react";

type EmployeeOption = { id: string; name: string; role: string };
type DepartmentOption = { id: string; name: string };

export function ManagerOperations({
  companyId,
  users,
  departments
}: {
  companyId: string;
  users: EmployeeOption[];
  departments: DepartmentOption[];
}) {
  const [message, setMessage] = useState("");

  const createDepartment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const response = await fetch("/api/departments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        companyId,
        headId: form.get("headId") || undefined
      })
    });
    const payload = await response.json();
    setMessage(response.ok ? "تم إنشاء القسم" : payload.error ?? "خطأ");
    if (response.ok) e.currentTarget.reset();
  };

  const assignUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const response = await fetch("/api/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: form.get("userId"),
        companyId,
        departmentId: form.get("departmentId") || null
      })
    });

    const payload = await response.json();
    setMessage(response.ok ? "تم تحديث المستخدم" : payload.error ?? "خطأ");
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <form onSubmit={createDepartment} className="card space-y-3">
        <h3 className="font-semibold">إنشاء قسم</h3>
        <input name="name" className="w-full rounded-lg border p-2" placeholder="اسم القسم" required />
        <select name="headId" className="w-full rounded-lg border p-2">
          <option value="">بدون رئيس قسم</option>
          {users
            .filter((user) => user.role === "DEPARTMENT_HEAD")
            .map((head) => (
              <option key={head.id} value={head.id}>
                {head.name}
              </option>
            ))}
        </select>
        <button className="rounded-lg bg-brand px-4 py-2 text-white">إنشاء</button>
      </form>

      <form onSubmit={assignUser} className="card space-y-3">
        <h3 className="font-semibold">ربط موظف بالقسم</h3>
        <select name="userId" className="w-full rounded-lg border p-2" required>
          <option value="">اختر موظف</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.role})
            </option>
          ))}
        </select>
        <select name="departmentId" className="w-full rounded-lg border p-2">
          <option value="">إزالة من كل الأقسام</option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>
        <button className="rounded-lg bg-brand px-4 py-2 text-white">تحديث</button>
      </form>
      {message && <p className="md:col-span-2 text-sm text-slate-600">{message}</p>}
    </div>
  );
}
