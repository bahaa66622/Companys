import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { routeRoleMap } from "@/lib/permissions/roles";

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;

    const required = Object.entries(routeRoleMap).find(([route]) => pathname.startsWith(route))?.[1];
    const role = req.nextauth.token?.role as string | undefined;

    if (required && (!role || !required.includes(role as never))) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/auth/login")) return true;
        if (req.nextUrl.pathname.startsWith("/")) return !!token;
        return true;
      }
    }
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/auth/register"]
};
