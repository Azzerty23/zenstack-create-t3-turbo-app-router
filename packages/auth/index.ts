import NextAuth from "next-auth";
import { authOptions } from "./src/auth-options";

export type { Session } from "next-auth";

// Update this whenever adding new providers so that the client can
export const providers = ["discord"] as const;
export type OAuthProviders = (typeof providers)[number];

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth(authOptions);
