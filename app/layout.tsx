import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { SessionAuthProvider } from "@/components/providers/SessionAuthProvider";

export const metadata: Metadata = {
  title: "Company Management System",
  description: "Internal multi-role company management dashboard"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <SessionAuthProvider>{children}</SessionAuthProvider>
      </body>
    </html>
  );
}
