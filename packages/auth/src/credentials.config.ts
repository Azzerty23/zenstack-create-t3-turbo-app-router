import type { CredentialsConfig } from "@auth/core/providers/credentials";

export const credentialsConfig = {
  type: "credentials",
  credentials: {
    name: { label: "Name", type: "text", placeholder: "Your name" },
    email: { type: "email" },
    password: { type: "password" },
  },
} satisfies Partial<CredentialsConfig>;
