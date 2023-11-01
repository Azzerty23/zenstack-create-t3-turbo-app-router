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
            .input($Schema.SessionInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).session.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['aggregate'],
            ReturnType<PrismaClient['session']['aggregate']>
        >,

        create: procedure
            .input($Schema.SessionInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SessionInputSchema)['create'],
            ReturnType<PrismaClient['session']['create']>
        >,

        deleteMany: procedure
            .input($Schema.SessionInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SessionInputSchema)['deleteMany'],
            ReturnType<PrismaClient['session']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.SessionInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SessionInputSchema)['delete'],
            ReturnType<PrismaClient['session']['delete']>
        >,

        findFirst: procedure
            .input($Schema.SessionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['findFirst'],
            ReturnType<PrismaClient['session']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.SessionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['findFirst'],
            ReturnType<PrismaClient['session']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.SessionInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['findMany'],
            ReturnType<PrismaClient['session']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.SessionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['findUnique'],
            ReturnType<PrismaClient['session']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.SessionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).session.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['findUnique'],
            ReturnType<PrismaClient['session']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.SessionInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).session.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['groupBy'],
            ReturnType<PrismaClient['session']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.SessionInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SessionInputSchema)['updateMany'],
            ReturnType<PrismaClient['session']['updateMany']>
        >,

        update: procedure
            .input($Schema.SessionInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SessionInputSchema)['update'],
            ReturnType<PrismaClient['session']['update']>
        >,

        upsert: procedure
            .input($Schema.SessionInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SessionInputSchema)['upsert'],
            ReturnType<PrismaClient['session']['upsert']>
        >,

        count: procedure
            .input($Schema.SessionInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).session.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SessionInputSchema)['count'],
            ReturnType<PrismaClient['session']['count']>
        >,
    });
}
