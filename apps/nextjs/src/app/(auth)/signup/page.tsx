/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";

import { SignUpForm } from "../signup-form";

export default function Signup() {
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
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
