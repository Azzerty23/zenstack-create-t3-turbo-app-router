import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";

import { auth } from "@acme/auth";
import { db } from "@acme/db";

// create an enhanced Prisma client with user context
async function getPrisma() {
  const session = await auth();
  return enhance(db, { user: session?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
