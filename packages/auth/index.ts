import Credentials from "@auth/core/providers/credentials";
import { enhance } from "@zenstackhq/runtime";
import NextAuth from "next-auth";

import type { User } from "@acme/db";
import { db } from "@acme/db";

import { authConfig } from "./auth.config";
import { authorize } from "./authorize";

export type { Session } from "next-auth";

// Update this whenever adding new providers so that the client can
export const providers = ["credentials"] as const;
export type OAuthProviders = (typeof providers)[number];

export { authConfig } from "./auth.config";

// eslint-disable-next-line -- fixed in next release. See https://github.com/nextauthjs/next-auth/commit/37219665d89840b194851a1c9ba6768690111e6b
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },
  providers: [
    Credentials({
      authorize,
    }),
  ],
});

/**
 * Get an authorization-enabled database client
 */
export async function getEnhancedPrisma() {
  const session = await auth();
  const user = await db.user.findUnique({
    where: { id: session?.user?.id },
  });
  return enhance(db, { user: user as User | undefined });
}
