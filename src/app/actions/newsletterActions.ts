
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
  prevState: NewsletterSignUpState | undefined, 
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

  // TODO: Implement actual newsletter signup logic OR lead magnet delivery
  // (e.g., save to Firestore, call external API like Mailchimp/ConvertKit, send email with PDF)
  console.log("Email submission received:", validatedFields.data.email);

  // Simulate success
  // The success message can be more generic if this action is used for multiple forms.
  // Specific success messages are usually handled in the component via toast based on context.
  return {
    message: "Thank you! Your email has been received.", 
    isSuccess: true,
  };
}
