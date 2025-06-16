
"use server";

import { summarizeSelfDiscovery, type SummarizeSelfDiscoveryInput, type SummarizeSelfDiscoveryOutput } from "@/ai/flows/summarize-self-discovery";

export interface SummarizeActionResult {
  success: boolean;
  data?: SummarizeSelfDiscoveryOutput;
  error?: string;
}

export async function handleSummarize(input: SummarizeSelfDiscoveryInput): Promise<SummarizeActionResult> {
  try {
    // Validate input with Zod schema if not already done by the flow or if extra validation is needed here.
    // For now, assume input is correctly typed as SummarizeSelfDiscoveryInput.
    const result = await summarizeSelfDiscovery(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error summarizing self-discovery:", error);
    // It's good practice to not expose raw error messages to the client.
    // Log the actual error on the server and return a generic message.
    let errorMessage = "Failed to generate summary due to an unexpected error.";
    if (error instanceof Error) {
      // You might want to customize this based on error types
      // errorMessage = `Failed to generate summary: ${error.message}`; // Example if you want to pass more specific (but safe) messages
    }
    return { success: false, error: errorMessage };
  }
}
