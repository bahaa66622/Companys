"use client";

import { useState } from "react";

type Cred = { email: string; password: string; role: string };

export function DemoSeederPanel() {
  const [creds, setCreds] = useState<Cred[]>([]);
  const [message, setMessage] = useState("");

  const generate = async () => {
    const response = await fetch("/api/setup/demo", { method: "POST" });
    const payload = await response.json();
    if (!response.ok) {
      setMessage(payload.error ?? "خطأ أثناء تجهيز البيانات التجريبية");
      return;
    }

    setCreds(payload.credentials ?? []);
    setMessage("تم تجهيز بيانات الدخول التجريبية بنجاح.");
  };

  return (
    <div className="card space-y-3">
      <h3 className="text-lg font-semibold">تجهيز بيانات تجريبية كاملة</h3>
      <p className="text-sm text-slate-600">ينشئ شركة وقسم ومستخدمين لكل الأدوار مع كلمات مرور جاهزة.</p>
      <button onClick={generate} className="rounded-lg bg-brand px-4 py-2 font-semibold text-white">
        إنشاء البيانات التجريبية
      </button>
      {message && <p className="text-sm text-slate-700">{message}</p>}

      {creds.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="p-2">الدور</th>
                <th className="p-2">البريد</th>
                <th className="p-2">كلمة المرور</th>
              </tr>
            </thead>
            <tbody>
              {creds.map((cred) => (
                <tr key={cred.email} className="border-t">
                  <td className="p-2">{cred.role}</td>
                  <td className="p-2">{cred.email}</td>
                  <td className="p-2">{cred.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
