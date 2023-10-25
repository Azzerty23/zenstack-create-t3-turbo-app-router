// import { compare } from "bcryptjs";
import { z } from "zod";

import type { PrismaClient, User } from "@acme/db";

const credentialsSchema = z.object({
  name: z.string().min(1).max(40),
  email: z.string().email(),
  password: z.string().min(6),
});

// const validateCredentials = (
//   credentials: Partial<Record<"email" | "password" | "name", unknown>>,
// ): true | null => {
//   if (!credentials) throw new Error("Missing credentials");
//   if (!credentials.email) throw new Error('"email" is required in credentials');
//   if (!credentials.password)
//     throw new Error('"password" is required in credentials');
//   return true;
// };

export function loginOrSignin(db: PrismaClient) {
  return async (
    credentials: Partial<Record<"email" | "password" | "name", unknown>>,
    _request: Request,
  ): Promise<User | null> => {
    // validate credentials
    const validatedCredentials = credentialsSchema.parse(credentials);

    // const isValidCredentials = validateCredentials(credentials)

    const maybeUser = await db.user.findFirst({
      where: { email: validatedCredentials.email },
      // select: { id: true, email: true, password: true, name: true },
    });

    // if no user found, create a new user
    if (!maybeUser) {
      // use zod to validate the input
      const newUser = await db.user.create({
        data: {
          name: validatedCredentials.name,
          email: validatedCredentials.email,
          password: validatedCredentials.password,
        },
        // select: { id: true, email: true, name: true },
      });
      return newUser;
    }

    // a user has been created but no password
    if (!maybeUser?.password) {
      return null;
    }

    // verify the input password with stored hash
    const isValid = validatedCredentials.password === maybeUser.password;
    // const isValid = await compare(credentials.password as string, maybeUser.password);
    if (!isValid) return null;
    return maybeUser;

    // const response = await fetch(request)
    // if(!response.ok) return null
    // return await response.json() ?? null
  };
}
