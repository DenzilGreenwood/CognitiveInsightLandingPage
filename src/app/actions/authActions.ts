
"use server";

import { z } from "zod";

const AuthFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export type AuthFormInput = z.infer<typeof AuthFormSchema>;

export interface AuthFormState {
  message: string;
  isSuccess: boolean;
  errors?: {
    email?: string[];
    password?: string[];
  };
}

export async function submitAuthForm(
  prevState: AuthFormState | undefined,
  formData: FormData
): Promise<AuthFormState> {
  const validatedFields = AuthFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid input. Please correct the errors.",
      isSuccess: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // TODO: Implement actual user creation/authentication logic (e.g., Firebase Auth)
  console.log("New user signup attempt:", validatedFields.data.email);

  // Simulate success for now
  return {
    message: "Credentials received! You can now proceed to the protocol interaction.",
    isSuccess: true,
  };
}
