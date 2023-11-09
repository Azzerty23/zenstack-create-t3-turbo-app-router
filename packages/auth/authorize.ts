import { compare } from "bcryptjs";
import { z } from "zod";

import type { User } from "@acme/db";
import { db } from "@acme/db";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

async function getUser(email: string): Promise<User | null> {
  try {
    const user = await db.user.findFirst({ where: { email } });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

export const authorize = async (
  credentials: Partial<Record<"email" | "password" | "name", unknown>>,
  _request: Request,
): Promise<User | null> => {
  const parsedCredentials = credentialsSchema.safeParse(credentials);

  if (parsedCredentials.success) {
    const { email, password } = parsedCredentials.data;

    const user = await getUser(email);
    if (!user) return null;

    const passwordsMatch = await compare(password, user.password);
    if (passwordsMatch) return user;
  }

  console.log("Invalid credentials");
  return null;
};
