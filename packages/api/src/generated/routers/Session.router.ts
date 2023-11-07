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

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.SessionAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SessionAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetSessionAggregateType<T>,
                Prisma.GetSessionAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetSessionAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SessionAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SessionAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetSessionAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetSessionAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    create: {
        useMutation: <T extends Prisma.SessionCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SessionCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SessionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SessionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SessionCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SessionCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>,
            ) => Promise<Prisma.SessionGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.SessionDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SessionDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SessionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SessionDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.SessionDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SessionDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SessionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SessionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SessionDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>,
            ) => Promise<Prisma.SessionGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.SessionFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SessionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.SessionFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SessionFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.SessionFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.SessionGetPayload<T>>,
                Array<Prisma.SessionGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.SessionGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SessionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SessionGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.SessionGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.SessionFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SessionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.SessionFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SessionFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.SessionGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SessionGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SessionGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.SessionGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SessionGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SessionGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.SessionUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SessionUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SessionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SessionUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.SessionUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SessionUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SessionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SessionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SessionUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>,
            ) => Promise<Prisma.SessionGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.SessionUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SessionUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SessionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SessionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SessionUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>,
            ) => Promise<Prisma.SessionGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.SessionCountArgs>(
            input: Prisma.Subset<T, Prisma.SessionCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SessionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
