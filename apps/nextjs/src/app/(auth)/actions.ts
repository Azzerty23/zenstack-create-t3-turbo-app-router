"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { getEnhancedPrisma, signIn } from "@acme/auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const rawData = Object.fromEntries(formData);
    await signIn("credentials", rawData);
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    console.log("error from authenticate server action :", error);
    throw error;
  }
  redirect("/");
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
  console.log("signup server action");
  console.log("formData :", formData);
  try {
    const rawData = Object.fromEntries(formData);
    const parsedCredentials = signupSchema.safeParse(rawData);
    if (!parsedCredentials.success) {
      return parsedCredentials.error.issues[0]?.message;
    }
    const { name, email, password } = parsedCredentials.data;
    const db = await getEnhancedPrisma();
    await db.user.create({ data: { name, email, password } });
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log("error from signup server action :", error);
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    if ((error as any).info?.prisma && (error as any).info?.code === "P2002") {
      // P2002 is Prisma's error code for unique constraint violations
      return "User already exists";
    }
    throw error;
  }
}
