/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '../../../../../node_modules/.prisma/client';
import type {
    UseTRPCMutationOptions,
    UseTRPCMutationResult,
    UseTRPCQueryOptions,
    UseTRPCQueryResult,
    UseTRPCInfiniteQueryOptions,
    UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

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

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.VerificationTokenAggregateArgs>(
            input: Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetVerificationTokenAggregateType<T>,
                Prisma.GetVerificationTokenAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetVerificationTokenAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.VerificationTokenAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetVerificationTokenAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetVerificationTokenAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    create: {
        useMutation: <T extends Prisma.VerificationTokenCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.VerificationTokenCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.VerificationTokenGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.VerificationTokenGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.VerificationTokenCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.VerificationTokenGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.VerificationTokenGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.VerificationTokenDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.VerificationTokenDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.VerificationTokenGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.VerificationTokenDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.VerificationTokenDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.VerificationTokenDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.VerificationTokenGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.VerificationTokenGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.VerificationTokenDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.VerificationTokenGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.VerificationTokenGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.VerificationTokenFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.VerificationTokenGetPayload<T>,
                Prisma.VerificationTokenGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.VerificationTokenFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VerificationTokenGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.VerificationTokenFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.VerificationTokenGetPayload<T>,
                Prisma.VerificationTokenGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.VerificationTokenFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VerificationTokenGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.VerificationTokenFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.VerificationTokenGetPayload<T>>,
                Array<Prisma.VerificationTokenGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.VerificationTokenGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.VerificationTokenFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.VerificationTokenGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.VerificationTokenGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.VerificationTokenFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.VerificationTokenGetPayload<T>,
                Prisma.VerificationTokenGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.VerificationTokenFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VerificationTokenGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.VerificationTokenFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.VerificationTokenGetPayload<T>,
                Prisma.VerificationTokenGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.VerificationTokenFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VerificationTokenGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.VerificationTokenGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.VerificationTokenGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
                ? `Error: "by" must not be empty.`
                : HavingValid extends Prisma.False
                ? {
                      [P in HavingFields]: P extends ByFields
                          ? never
                          : P extends string
                          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.VerificationTokenGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
                ? `Error: "by" must not be empty.`
                : HavingValid extends Prisma.False
                ? {
                      [P in HavingFields]: P extends ByFields
                          ? never
                          : P extends string
                          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Omit<
                Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors,
                'cursor'
            >,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.VerificationTokenUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.VerificationTokenUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.VerificationTokenGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.VerificationTokenUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.VerificationTokenUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.VerificationTokenUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.VerificationTokenGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.VerificationTokenGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.VerificationTokenUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.VerificationTokenGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.VerificationTokenGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.VerificationTokenUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.VerificationTokenUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.VerificationTokenGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.VerificationTokenGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.VerificationTokenUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.VerificationTokenGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.VerificationTokenGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.VerificationTokenCountArgs>(
            input: Prisma.Subset<T, Prisma.VerificationTokenCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VerificationTokenCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.VerificationTokenCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
