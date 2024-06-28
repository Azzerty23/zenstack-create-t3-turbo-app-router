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

        aggregate: procedure.input($Schema.SessionInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).session.aggregate(input as any))),

        createMany: procedure.input($Schema.SessionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.createMany(input as any))),

        create: procedure.input($Schema.SessionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.create(input as any))),

        deleteMany: procedure.input($Schema.SessionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.deleteMany(input as any))),

        delete: procedure.input($Schema.SessionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.delete(input as any))),

        findFirst: procedure.input($Schema.SessionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).session.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.SessionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).session.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.SessionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).session.findMany(input as any))),

        findUnique: procedure.input($Schema.SessionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).session.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.SessionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).session.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.SessionInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).session.groupBy(input as any))),

        updateMany: procedure.input($Schema.SessionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.updateMany(input as any))),

        update: procedure.input($Schema.SessionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.update(input as any))),

        upsert: procedure.input($Schema.SessionInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).session.upsert(input as any))),

        count: procedure.input($Schema.SessionInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).session.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.SessionAggregateArgs, TData = Prisma.GetSessionAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.SessionAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetSessionAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SessionAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetSessionAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetSessionAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.SessionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SessionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>) => Promise<Prisma.SessionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SessionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SessionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>) => Promise<Prisma.SessionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SessionFindFirstArgs, TData = Prisma.SessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.SessionFindFirstOrThrowArgs, TData = Prisma.SessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SessionFindManyArgs, TData = Array<Prisma.SessionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SessionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SessionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SessionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SessionFindUniqueArgs, TData = Prisma.SessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.SessionFindUniqueOrThrowArgs, TData = Prisma.SessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SessionFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SessionFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SessionFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.SessionGroupByArgs,
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
            , TData = {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SessionGroupByArgs,
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SessionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SessionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>) => Promise<Prisma.SessionGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.SessionUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SessionUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SessionUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SessionGetPayload<T>, Context>) => Promise<Prisma.SessionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SessionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.SessionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SessionCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SessionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                : number, Error>
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
