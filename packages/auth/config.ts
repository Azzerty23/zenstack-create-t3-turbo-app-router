// This file cannot be exported from the package index due to build dependencies
// and Edge runtime compatibility (used in Next.js middleware)

import type { DefaultSession } from "@auth/core/types";
import type { NextAuthConfig } from "next-auth";

const PUBLIC_PATHS = ["/login", "/signup"];

/**
 * Module augmentation for `next-auth` types
 * Allows us to add custom properties to the `session` object
 * and keep type safety
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      // ...other properties
    };
  }
}

export const authConfig = {
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    session: ({ session, token }) => {
      //   if (session.user) {
      //     const user = await db.user.findUniqueOrThrow({
      //       where: { id: token.sub },
      //       select: { role: true },
      //     });

      //     session.user.role = user.role; // <-- put other properties on the session here
      //   }
      session.user.id = token.sub!;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPublicRoute = PUBLIC_PATHS.includes(nextUrl.pathname);
      const isOnLoginPage = nextUrl.pathname.startsWith("/login");
      if (isOnLoginPage && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      if (isOnPublicRoute) {
        return true;
      }
      return isLoggedIn; // Redirect unauthenticated users to login page if false
    },
  },
} satisfies NextAuthConfig;
