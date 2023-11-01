import { enhance } from "@zenstackhq/runtime";

import { db } from "@acme/db";

import { auth } from "..";

/**
 * Get an authorization-enabled database client
 */
export async function getEnhancedPrisma() {
  const session = await auth();
  return enhance(db, { user: session?.user });
}
