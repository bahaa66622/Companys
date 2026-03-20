"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PageTransition } from "@/components/ui/PageTransition";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false
    });

    if (result?.error) {
      setError("Invalid credentials");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <PageTransition>
      <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
        <form onSubmit={onSubmit} className="card w-full space-y-4">
          <h1 className="text-2xl font-bold">Login</h1>
          <input name="email" type="email" placeholder="Email" className="w-full rounded-lg border p-3" required />
          <input name="password" type="password" placeholder="Password" className="w-full rounded-lg border p-3" required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="w-full rounded-lg bg-brand py-3 font-semibold text-white">Sign In</button>
        </form>
      </main>
    </PageTransition>
  );
}
