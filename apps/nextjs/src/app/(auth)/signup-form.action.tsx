"use client";

import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAlertCircle, IconArrowRight } from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";

import { signUp } from "./actions";

export function SignUpForm() {
  const [code, action] = useFormState(signUp, undefined);

  return (
    <form className="mt-8 flex flex-col gap-4" action={action}>
      <TextInput name="name" label="Your name" required />
      <TextInput name="email" label="Your email" type="email" required />
      <PasswordInput name="password" label="Your password" required />
      <Checkbox
        name="terms"
        label={
          <>
            I accept the{" "}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-primary-700 hover:underline">
              Terms and Conditions
            </a>
          </>
        }
        required
      />
      <SignUpButton />
      <div className="flex h-8 items-end space-x-1">
        {code && (
          <>
            <IconAlertCircle className="h-5 w-5 text-red-500" />
            <p aria-live="polite" className="text-sm text-red-500">
              {code}
            </p>
          </>
        )}
      </div>
      {/* <div
      onClick={() => void signIn()}
      className="mt-4 text-sm font-medium text-gray-500 hover:cursor-pointer"
    >
      Already have an account?{" "}
      <span className="text-primary-700">Login here</span>
    </div> */}
    </form>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      loading={pending}
      type="submit"
      className="mt-4 w-full"
      aria-disabled={pending}
    >
      Create account <IconArrowRight className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
