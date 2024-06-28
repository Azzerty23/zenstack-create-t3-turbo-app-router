/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.AccountInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).account.aggregate(input as any))),

        createMany: procedure.input($Schema.AccountInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.createMany(input as any))),

        create: procedure.input($Schema.AccountInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.create(input as any))),

        deleteMany: procedure.input($Schema.AccountInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.deleteMany(input as any))),

        delete: procedure.input($Schema.AccountInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.delete(input as any))),

        findFirst: procedure.input($Schema.AccountInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).account.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.AccountInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).account.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.AccountInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).account.findMany(input as any))),

        findUnique: procedure.input($Schema.AccountInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).account.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.AccountInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).account.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.AccountInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).account.groupBy(input as any))),

        updateMany: procedure.input($Schema.AccountInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.updateMany(input as any))),

        update: procedure.input($Schema.AccountInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.update(input as any))),

        upsert: procedure.input($Schema.AccountInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.upsert(input as any))),

        count: procedure.input($Schema.AccountInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).account.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.AccountAggregateArgs, TData = Prisma.GetAccountAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.AccountAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetAccountAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.AccountAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetAccountAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetAccountAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.AccountCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AccountCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AccountDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AccountDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AccountFindFirstArgs, TData = Prisma.AccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.AccountFindFirstOrThrowArgs, TData = Prisma.AccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AccountFindManyArgs, TData = Array<Prisma.AccountGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AccountGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AccountGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AccountGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AccountFindUniqueArgs, TData = Prisma.AccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.AccountFindUniqueOrThrowArgs, TData = Prisma.AccountGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AccountGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AccountFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AccountFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AccountGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AccountGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.AccountGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.AccountGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.AccountGroupByArgs['orderBy'] },
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
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AccountGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.AccountGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.AccountGroupByArgs['orderBy'] },
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
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AccountUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AccountUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.AccountUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AccountUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AccountGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AccountUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AccountGetPayload<T>, Context>) => Promise<Prisma.AccountGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AccountCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.AccountCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AccountCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.AccountCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
