"use server";

import { signIn } from "@acme/auth";

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
}
