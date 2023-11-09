"use server";

import { z } from "zod";

import { getEnhancedPrisma, signIn } from "@acme/auth";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const rawData = Object.fromEntries(formData);
    const parsedCredentials = loginSchema.safeParse(rawData);
    if (!parsedCredentials.success) {
      return parsedCredentials.error.issues[0]?.message;
    }
    const { email, password } = parsedCredentials.data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    // We must rethrow the error here to handle redirection
    throw error;
  }
}

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  terms: z.string(),
});

export async function signUp(
  prevState: string | undefined,
  formData: FormData,
) {
  const rawData = Object.fromEntries(formData);
  const parsedCredentials = signupSchema.safeParse(rawData);
  if (!parsedCredentials.success) {
    return parsedCredentials.error.issues[0]?.message;
  }
  const { name, email, password } = parsedCredentials.data;
  const db = await getEnhancedPrisma();
  try {
    await db.user.create({ data: { name, email, password } });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any).code === "P2002") {
      // P2002 is Prisma's error code for unique constraint violations
      return "User already exists";
    }
    return "An error occurred. Please try again.";
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    // We must rethrow the error here to handle redirection
    throw error;
  }
}
