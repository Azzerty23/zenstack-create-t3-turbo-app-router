/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.PostInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).post.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['aggregate'],
            ReturnType<PrismaClient['post']['aggregate']>
        >,

        create: procedure
            .input($Schema.PostInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PostInputSchema)['create'],
            ReturnType<PrismaClient['post']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PostInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PostInputSchema)['deleteMany'],
            ReturnType<PrismaClient['post']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PostInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PostInputSchema)['delete'],
            ReturnType<PrismaClient['post']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PostInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['findFirst'],
            ReturnType<PrismaClient['post']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PostInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['findFirst'],
            ReturnType<PrismaClient['post']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PostInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['findMany'],
            ReturnType<PrismaClient['post']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PostInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['findUnique'],
            ReturnType<PrismaClient['post']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PostInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).post.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['findUnique'],
            ReturnType<PrismaClient['post']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PostInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).post.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['groupBy'],
            ReturnType<PrismaClient['post']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PostInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PostInputSchema)['updateMany'],
            ReturnType<PrismaClient['post']['updateMany']>
        >,

        update: procedure
            .input($Schema.PostInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PostInputSchema)['update'],
            ReturnType<PrismaClient['post']['update']>
        >,

        upsert: procedure
            .input($Schema.PostInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).post.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PostInputSchema)['upsert'],
            ReturnType<PrismaClient['post']['upsert']>
        >,

        count: procedure
            .input($Schema.PostInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).post.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PostInputSchema)['count'],
            ReturnType<PrismaClient['post']['count']>
        >,
    });
}
