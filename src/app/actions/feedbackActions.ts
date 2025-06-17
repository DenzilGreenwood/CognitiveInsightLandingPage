
"use server";

import { z } from "zod";

const FeedbackFormSchema = z.object({
  starRating: z.string().refine(val => !isNaN(parseInt(val)) && parseInt(val) >= 1 && parseInt(val) <= 5, {
    message: "Please select a valid star rating.",
  }),
  valueAdded: z.string({ required_error: "Please select a value option."}),
  otherPrice: z.string().optional().refine(val => val === undefined || val === "" || (!isNaN(parseFloat(val)) && parseFloat(val) >= 0), {
    message: "If specified, 'Other' price must be a valid number.",
  }),
  comments: z.string().optional(),
}).refine(data => {
    if (data.valueAdded === "other" && (data.otherPrice === undefined || data.otherPrice.trim() === "")) {
        return false; // Invalid: "other" selected but no price given
    }
    return true;
}, {
    message: "Please specify an amount if you select 'Other' for value.",
    path: ["otherPrice"], // This error will be associated with otherPrice field
});


export type FeedbackFormInput = z.infer<typeof FeedbackFormSchema>;

export interface FeedbackFormState {
  message: string;
  isSuccess: boolean;
  errors?: {
    starRating?: string[];
    valueAdded?: string[];
    otherPrice?: string[];
    comments?: string[];
    _form?: string[]; // For general form errors
  };
}

export async function submitFeedbackForm(
  prevState: FeedbackFormState | undefined,
  formData: FormData
): Promise<FeedbackFormState> {
  const rawData = {
    starRating: formData.get("starRating"),
    valueAdded: formData.get("valueAdded"),
    otherPrice: formData.get("otherPrice"),
    comments: formData.get("comments"),
  };
  
  const validatedFields = FeedbackFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: "Invalid input. Please correct the errors.",
      isSuccess: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { starRating, valueAdded, otherPrice, comments } = validatedFields.data;

  const feedbackDataToStore = {
    timestamp: new Date().toISOString(),
    // userId: "TODO: Get from session if user is logged in", // Placeholder
    starRating: parseInt(starRating),
    valueAdded: valueAdded === "other" ? (otherPrice ? parseFloat(otherPrice) : null) : parseInt(valueAdded),
    valueAddedRaw: valueAdded, // Store the raw radio selection
    otherPriceRaw: otherPrice, // Store the raw otherPrice input
    comments: comments || "",
  };

  // TODO: Implement Google Workspace Integration
  // This is where you would send `feedbackDataToStore` to a Google Sheet.
  // Example:
  // try {
  //   await appendToGoogleSheet(feedbackDataToStore);
  // } catch (error) {
  //   console.error("Failed to send feedback to Google Sheet:", error);
  //   return {
  //     message: "Your feedback was received, but there was an issue sending it to our records. Please contact support.",
  //     isSuccess: false, // Or true, depending on how critical this step is
  //   };
  // }
  console.log("New feedback submission:", JSON.stringify(feedbackDataToStore, null, 2));

  return {
    message: "Thank you for your valuable feedback! It has been successfully submitted.",
    isSuccess: true,
  };
}

// Placeholder for Google Sheets integration function
// async function appendToGoogleSheet(data: any) {
//   // This function would use the Google Sheets API
//   // Ensure appropriate authentication and error handling
//   console.log("Mock sending data to Google Sheet:", data);
//   // For example, using googleapis library
// }
