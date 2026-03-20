import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Company Management System",
  description: "Internal multi-role company management dashboard"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
