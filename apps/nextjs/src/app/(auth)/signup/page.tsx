/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";

import { signIn } from "@acme/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync: signup } = api.user.create.useMutation();

  const router = useRouter();

  async function onSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signup({ data: { name, email, password } });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      if (err.info?.prisma && err.info?.code === "P2002") {
        // P2002 is Prisma's error code for unique constraint violations
        alert("User alread exists");
      } else {
        alert("An unknown error occurred");
      }
      return;
    }

    // signin to create a session
    const signInResult = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (signInResult?.ok) {
      void router.push("/");
    } else {
      console.error("Signin failed:", signInResult?.error);
    }
  }

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center bg-[url('/auth-bg.jpg')] bg-cover px-6 pt-4 lg:pt-8">
      <Link href="/">
        <div className="mb-6 flex items-center space-x-4 lg:mb-10">
          <Image
            src="/favicon.ico"
            className="rounded-full border border-gray-600"
            width={42}
            height={42}
            alt="logo"
          />
          <h1 className="text-4xl text-white">Welcome to Todo</h1>
        </div>
      </Link>
      <div className="w-full items-center justify-center rounded-lg bg-white shadow md:mt-0 lg:flex lg:max-w-screen-md xl:p-0">
        <div className="w-full space-y-8 p-6 sm:p-8 lg:p-16">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Create a Free Account
          </h2>
          <form className="mt-8" action="#" onSubmit={(e) => void onSignup(e)}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border-gray-300 bg-gray-50"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  I accept the{" "}
                  <a href="#" className="text-primary-700 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button className="btn btn-primary mt-4" type="submit">
              Create account
            </button>
            <div
              onClick={() => void signIn()}
              className="mt-4 text-sm font-medium text-gray-500 hover:cursor-pointer"
            >
              Already have an account?{" "}
              <span className="text-primary-700">Login here</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
