
"use server";

import { z } from "zod";

const VolunteerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  roleSituation: z.string().min(10, { message: "Please describe your role/situation briefly (min 10 characters)." }),
  interestReason: z.string().min(10, { message: "Please explain your interest briefly (min 10 characters)." }),
});

export type VolunteerFormInput = z.infer<typeof VolunteerFormSchema>;

export interface VolunteerFormState {
  message: string;
  isSuccess: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    roleSituation?: string[];
    interestReason?: string[];
  };
}

export async function submitVolunteerForm(
  prevState: VolunteerFormState | undefined,
  formData: FormData
): Promise<VolunteerFormState> {
  const validatedFields = VolunteerFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    roleSituation: formData.get("roleSituation"),
    interestReason: formData.get("interestReason"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid input. Please correct the errors.",
      isSuccess: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // TODO: Implement actual submission logic (e.g., save to Firestore)
  // For now, just log the data to the console.
  console.log("New volunteer form submission:", validatedFields.data);

  // Simulate success
  return {
    message: "Thank you for your interest! We've received your submission and will be in touch if there's a good fit.",
    isSuccess: true,
  };
}
