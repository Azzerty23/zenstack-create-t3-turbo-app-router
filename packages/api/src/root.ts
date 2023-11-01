import { createRouter as createGeneratedRouter } from "./generated/routers";
import { postRouter } from "./routers/post";
import { t } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
// Flatten version
const mergeRouters = t.mergeRouters;
export const appRouter = mergeRouters(
  postRouter,
  createGeneratedRouter(t.router, t.procedure),
);

// Classic version (routers under namespaces)
// export const appRouter = createTRPCRouter({
//   post: postRouter,
//   generated: createGeneratedRouter(t.router, t.procedure),
// });

// export type definition of API
export type AppRouter = typeof appRouter;
