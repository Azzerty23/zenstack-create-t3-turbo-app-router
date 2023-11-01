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
            .input($Schema.VerificationTokenInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['aggregate'],
            ReturnType<PrismaClient['verificationToken']['aggregate']>
        >,

        create: procedure
            .input($Schema.VerificationTokenInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['create'],
            ReturnType<PrismaClient['verificationToken']['create']>
        >,

        deleteMany: procedure
            .input($Schema.VerificationTokenInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['deleteMany'],
            ReturnType<PrismaClient['verificationToken']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.VerificationTokenInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['delete'],
            ReturnType<PrismaClient['verificationToken']['delete']>
        >,

        findFirst: procedure
            .input($Schema.VerificationTokenInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['findFirst'],
            ReturnType<PrismaClient['verificationToken']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.VerificationTokenInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).verificationToken.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['findFirst'],
            ReturnType<PrismaClient['verificationToken']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.VerificationTokenInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['findMany'],
            ReturnType<PrismaClient['verificationToken']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.VerificationTokenInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['findUnique'],
            ReturnType<PrismaClient['verificationToken']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.VerificationTokenInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).verificationToken.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['findUnique'],
            ReturnType<PrismaClient['verificationToken']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.VerificationTokenInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['groupBy'],
            ReturnType<PrismaClient['verificationToken']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.VerificationTokenInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['updateMany'],
            ReturnType<PrismaClient['verificationToken']['updateMany']>
        >,

        update: procedure
            .input($Schema.VerificationTokenInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['update'],
            ReturnType<PrismaClient['verificationToken']['update']>
        >,

        upsert: procedure
            .input($Schema.VerificationTokenInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).verificationToken.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['upsert'],
            ReturnType<PrismaClient['verificationToken']['upsert']>
        >,

        count: procedure
            .input($Schema.VerificationTokenInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).verificationToken.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.VerificationTokenInputSchema)['count'],
            ReturnType<PrismaClient['verificationToken']['count']>
        >,
    });
}
