"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in with credentials
export const signInWithCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Sign in successful" };
  } catch (err) {
    console.error(err);
    if (isRedirectError(err)) {
      throw err;
    }

    return { success: false, message: "Invalid email or password" };
  }
};

export const signOutUser = async () => {
  await signOut();
};
