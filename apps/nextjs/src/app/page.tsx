import Link from "next/link";
import { redirect } from "next/navigation";
import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import { Button } from "@mantine/core";

import { auth, signOut } from "@acme/auth";
import { MyButton } from "@acme/ui";

export default async function Home() {
  const hello = await api.hello.query({ text: "from tRPC" });
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user.name}</span>}
            </p>
            <LoginOutButton />
            <MyButton className="w-full rounded-full" />
            <button className="w-full rounded-full bg-red-500">test</button>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await auth();
  if (!session?.user) return null;

  const latestPost = await api.getLatestPost.query();
  const countPosts = await api.post.count.query({});

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <p className="text-sm text-gray-400">
        You have {countPosts} posts in your database.
      </p>

      <CreatePost />
    </div>
  );
}

async function LoginOutButton() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server";
        session ? await signOut() : redirect("/login");
      }}
    >
      <Button type="submit">{session ? "Sign out" : "Sign in"}</Button>
    </form>
  );
}
