import CredentialsProvider from "@auth/core/providers/credentials";
import type { DefaultSession } from "@auth/core/types";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthConfig } from "next-auth";

import { db } from "@acme/db";

import { loginOrSignin } from "./authorize";
import { credentialsConfig } from "./credentials.config";

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

/**
 * Options for NextAuth.js used to configure
 * adapters, providers, callbacks, etc.
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthConfig = {
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },
  // Include user.id on session
  callbacks: {
    // Will be called whenever a session is checked (e.g. on `useSession` or `getSession`)
    // Sent to client
    session: async ({ session, token }) => {
      if (session.user) {
        const user = await db.user.findUniqueOrThrow({
          where: { id: token.sub },
          select: { role: true },
        });

        session.user.role = user.role; // <-- put other properties on the session here
      }
      session.user.id = token.sub!;
      return session;
    },
    redirect: ({ url: _url, baseUrl }) => {
      return baseUrl;
    },
    // Will be called whenever a JWT is created (e.g. on signin) or updated (i.e whenever a session is accessed)
    // Returned object will be passed to session.user
    jwt: ({ token, trigger, session }) => {
      if (trigger === "update" && session) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        if (typeof session.name === "string") token.name = session.name;
        if (typeof session.email === "string") token.email = session.email;
        if (typeof session.role === "string") token.role = session.role;
      }
      return { id: token.sub, ...token };
    },
    // @TODO - if you wanna have auth on the edge
    // jwt: ({ token, profile }) => {
    //   if (profile?.id) {
    //     token.id = profile.id;
    //     token.image = profile.picture;
    //   }
    //   return token;
    // },

    // @TODO
    // authorized({ request, auth }) {
    //   return !!auth?.user
    // }
  },
  events: {
    updateUser: ({ user }) => {
      console.log("updateUser:", user);
    },
  },
  // Customize pages redirect behavior
  pages: {
    // TODO: add a custom login page
    // signIn: "/login",
    // error: "/api/auth/error",
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      ...credentialsConfig,
      authorize: loginOrSignin(db),
    }),
    //     GoogleProvider({
    //       clientId: process.env.GOOGLE_CLIENT_ID as string,
    //       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //     }),
    //     DiscordProvider({
    //       clientId: process.env.DISCORD_CLIENT_ID as string,
    //       clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    //     }),
    //     /**
    //      * ...add more providers here
    //      *
    //      * Most other providers require a bit more work than the Discord provider.
    //      * For example, the GitHub provider requires you to add the
    //      * `refresh_token_expires_in` field to the Account model. Refer to the
    //      * NextAuth.js docs for the provider you want to use. Example:
    //      * @see https://next-auth.js.org/providers/github
    //      **/
  ],
};
