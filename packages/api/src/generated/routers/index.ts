/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createPostRouter from "./Post.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import createVerificationTokenRouter from "./VerificationToken.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PostClientType } from "./Post.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as VerificationTokenClientType } from "./VerificationToken.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        post: createPostRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        verificationToken: createVerificationTokenRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    post: PostClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    verificationToken: VerificationTokenClientType<AppRouter>;
}
