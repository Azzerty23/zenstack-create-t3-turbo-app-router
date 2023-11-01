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
            .input($Schema.AccountInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).account.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['aggregate'],
            ReturnType<PrismaClient['account']['aggregate']>
        >,

        create: procedure
            .input($Schema.AccountInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.AccountInputSchema)['create'],
            ReturnType<PrismaClient['account']['create']>
        >,

        deleteMany: procedure
            .input($Schema.AccountInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.AccountInputSchema)['deleteMany'],
            ReturnType<PrismaClient['account']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.AccountInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.AccountInputSchema)['delete'],
            ReturnType<PrismaClient['account']['delete']>
        >,

        findFirst: procedure
            .input($Schema.AccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['findFirst'],
            ReturnType<PrismaClient['account']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.AccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['findFirst'],
            ReturnType<PrismaClient['account']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.AccountInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['findMany'],
            ReturnType<PrismaClient['account']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.AccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['findUnique'],
            ReturnType<PrismaClient['account']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.AccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['findUnique'],
            ReturnType<PrismaClient['account']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.AccountInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).account.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['groupBy'],
            ReturnType<PrismaClient['account']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.AccountInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.AccountInputSchema)['updateMany'],
            ReturnType<PrismaClient['account']['updateMany']>
        >,

        update: procedure
            .input($Schema.AccountInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.AccountInputSchema)['update'],
            ReturnType<PrismaClient['account']['update']>
        >,

        upsert: procedure
            .input($Schema.AccountInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.AccountInputSchema)['upsert'],
            ReturnType<PrismaClient['account']['upsert']>
        >,

        count: procedure
            .input($Schema.AccountInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).account.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.AccountInputSchema)['count'],
            ReturnType<PrismaClient['account']['count']>
        >,
    });
}
