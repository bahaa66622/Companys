"use client";

import { FormEvent, useState } from "react";
import { PageTransition } from "@/components/ui/PageTransition";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role")
      })
    });

    const payload = await response.json();
    setMessage(response.ok ? "User created successfully" : payload.error ?? "Error");
  };

  return (
    <PageTransition>
      <main className="mx-auto flex min-h-screen max-w-xl items-center p-6">
        <form onSubmit={onSubmit} className="card w-full space-y-4">
          <h1 className="text-2xl font-bold">Register user (Super Admin only)</h1>
          <input name="name" placeholder="Name" className="w-full rounded-lg border p-3" required />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-lg border p-3" required />
          <input name="password" type="password" placeholder="Password" className="w-full rounded-lg border p-3" required />
          <select name="role" className="w-full rounded-lg border p-3" required>
            <option value="SUPER_ADMIN">Super Admin</option>
            <option value="COMPANY_MANAGER">Company Manager</option>
            <option value="DEPARTMENT_HEAD">Department Head</option>
            <option value="EMPLOYEE">Employee</option>
          </select>
          {message && <p className="text-sm text-slate-600">{message}</p>}
          <button className="w-full rounded-lg bg-brand py-3 font-semibold text-white">Create User</button>
        </form>
      </main>
    </PageTransition>
  );
}
