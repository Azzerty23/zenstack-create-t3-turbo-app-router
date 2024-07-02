import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/app/_components/Logo";
import { Center, Overlay, Stack, Title } from "@mantine/core";

import { SignUpForm } from "../signup-form";

export default function Signup() {
  return (
    <Center className="relative h-screen">
      <Image src="/auth-bg.jpeg" fill className="object-cover" alt="" />
      <Overlay zIndex={0} color="#000" backgroundOpacity={0.55} />
      {/* Set "isolate" to create a new stacking context */}
      <Stack className="isolate">
        <Link
          href="/"
          className="mb-6 flex items-center justify-center space-x-4 text-white lg:mb-10"
        >
          <Logo width={42} height={42} />
          <Title className="text-5xl">Welcome to Todo</Title>
        </Link>
        <div className="space-y-8 rounded-lg bg-white p-6 shadow sm:p-8 md:mt-0 lg:max-w-screen-md lg:p-16">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Create a Free Account
          </h2>
          <SignUpForm />
        </div>
      </Stack>
    </Center>
  );
}
