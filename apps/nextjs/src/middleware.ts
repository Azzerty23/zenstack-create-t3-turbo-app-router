import { auth } from "@acme/auth/middleware";

import { NextResponse  } from "next/server";
import type { NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async (req) => {
  const session = await auth()
  const { pathname, search, origin, basePath } = req.nextUrl;
  const loginPage = '/login'
  if (!session) {
    // If the user is already on the login page, don't redirect to it again
    if (pathname === loginPage) {
      return NextResponse.next();
    }
    const url = new URL(`${basePath}${loginPage}`, origin);
    url.searchParams.append("callbackUrl", `${basePath}${pathname}${search}`);
    return NextResponse.redirect(url);
  }
  // If the user access login page and is already logged in, redirect to the home page
  if (pathname === loginPage) {
    const homePage = '/'
    const url = new URL(`${basePath}${homePage}`, origin);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// Run middleware on all routes except login
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // "/",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
