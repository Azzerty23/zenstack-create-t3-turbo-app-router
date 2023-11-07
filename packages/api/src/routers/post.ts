import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  createPost: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      const { prisma, session } = ctx;

      return prisma.post.create({
        data: {
          name: input.name,
          authorId: session.user.id,
        },
      });
    }),

  getLatestPost: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findFirst({
      where: {
        authorId: ctx.session?.user.id,
      },
      orderBy: { createdAt: "desc" },
    });
  }),
});
