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
            .input($Schema.UserInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).user.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['aggregate'],
            ReturnType<PrismaClient['user']['aggregate']>
        >,

        create: procedure
            .input($Schema.UserInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.UserInputSchema)['create'],
            ReturnType<PrismaClient['user']['create']>
        >,

        deleteMany: procedure
            .input($Schema.UserInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.UserInputSchema)['deleteMany'],
            ReturnType<PrismaClient['user']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.UserInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.UserInputSchema)['delete'],
            ReturnType<PrismaClient['user']['delete']>
        >,

        findFirst: procedure
            .input($Schema.UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['findFirst'],
            ReturnType<PrismaClient['user']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['findFirst'],
            ReturnType<PrismaClient['user']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.UserInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['findMany'],
            ReturnType<PrismaClient['user']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['findUnique'],
            ReturnType<PrismaClient['user']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['findUnique'],
            ReturnType<PrismaClient['user']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.UserInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).user.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['groupBy'],
            ReturnType<PrismaClient['user']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.UserInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.UserInputSchema)['updateMany'],
            ReturnType<PrismaClient['user']['updateMany']>
        >,

        update: procedure
            .input($Schema.UserInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.UserInputSchema)['update'],
            ReturnType<PrismaClient['user']['update']>
        >,

        upsert: procedure
            .input($Schema.UserInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.UserInputSchema)['upsert'],
            ReturnType<PrismaClient['user']['upsert']>
        >,

        count: procedure
            .input($Schema.UserInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).user.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.UserInputSchema)['count'],
            ReturnType<PrismaClient['user']['count']>
        >,
    });
}
