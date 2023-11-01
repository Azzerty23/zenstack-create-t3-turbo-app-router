import CredentialsProvider from "@auth/core/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

import { credentialsConfig } from "./src/credentials.config";

const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      ...credentialsConfig,
    }),
  ],
};

// handlers can't be initialized here without complete auth config (needs authorize() in CredentialsProvider)
// handlers have to be imported from the root auth package (index.ts)
export const { auth } = NextAuth(authConfig);
