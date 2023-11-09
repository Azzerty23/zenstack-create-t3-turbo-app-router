"use client";

import { api } from "@/trpc/react";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { IconAlertCircle, IconArrowRight } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

interface FormValues {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

export function SignUpForm() {
  const {
    mutateAsync: createUser,
    isLoading,
    error,
  } = api.user.create.useMutation();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },

    validate: {
      email: isEmail("Invalid email"),
    },
  });

  const handleSubmit = async (formValues: FormValues) => {
    const { name, email, password } = formValues;
    const newUser = createUser({ data: { name, email, password } });
    console.log("newUser :", newUser);
    try {
      await signIn("credentials", { email, password, callbackUrl: "/" });
    } catch (error) {
      if ((error as Error).message.includes("CredentialsSignin")) {
        return form.setFieldError("email", "Invalid email or password");
      }
    }
  };

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={form.onSubmit(handleSubmit)}
      className="mt-8 flex flex-col gap-4"
    >
      <TextInput {...form.getInputProps("name")} label="Your name" required />
      <TextInput
        {...form.getInputProps("email")}
        label="Your email"
        type="email"
        required
      />
      <PasswordInput
        {...form.getInputProps("password")}
        label="Your password"
        required
      />
      <Checkbox
        {...form.getInputProps("terms")}
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
      <Button
        loading={isLoading}
        type="submit"
        className="mt-4 w-full"
        aria-disabled={isLoading}
      >
        Create account{" "}
        <IconArrowRight className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      <div className="flex h-8 items-end space-x-1">
        {Object.keys(form.errors).length > 0 && (
          <>
            <IconAlertCircle className="h-5 w-5 text-red-500" />
            <p aria-live="polite" className="text-sm text-red-500">
              {JSON.stringify(form.errors)}
            </p>
          </>
        )}
        {error?.message && (
          <>
            <IconAlertCircle className="h-5 w-5 text-red-500" />
            <p aria-live="polite" className="text-sm text-red-500">
              {JSON.stringify(error.data?.code)}
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
