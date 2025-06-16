
"use server";

import { z } from "zod";

const EmailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export interface NewsletterSignUpState {
  message: string;
  isSuccess: boolean;
  errors?: {
    email?: string[];
  };
}

export async function signUpForNewsletter(
  prevState: NewsletterSignUpState | undefined, // prevState can be undefined initially
  formData: FormData
): Promise<NewsletterSignUpState> {
  const validatedFields = EmailSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid input. Please correct the errors.",
      isSuccess: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // TODO: Implement actual newsletter signup logic 
  // (e.g., save to Firestore, call external API like Mailchimp/ConvertKit)
  console.log("New email signup attempt:", validatedFields.data.email);

  // Simulate success
  return {
    message: "Thank you for signing up! We'll keep you updated.",
    isSuccess: true,
  };
}
