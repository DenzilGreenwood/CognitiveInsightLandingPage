
// This file is no longer in use as the YourEdgeProfileSection has been removed.
// It can be deleted or kept for future reference. For now, its content is cleared.
// 'use server';
// /**
//  * @fileOverview A flow to summarize the user's self-discovery summary and highlight their unique strengths.
//  *
//  * - summarizeSelfDiscovery - A function that handles the summarization process.
//  * - SummarizeSelfDiscoveryInput - The input type for the summarizeSelfDiscovery function.
//  * - SummarizeSelfDiscoveryOutput - The return type for the summarizeSelfDiscovery function.
//  */
// import {ai} from '@/ai/genkit';
// import {z} from 'genkit';

// const SummarizeSelfDiscoveryInputSchema = z.object({
//   selfDiscoverySummary: z
//     .string()
//     .describe(
//       'The user provided self-discovery summary to be summarized into key strengths.'
//     ),
// });
// export type SummarizeSelfDiscoveryInput = z.infer<typeof SummarizeSelfDiscoveryInputSchema>;

// const SummarizeSelfDiscoveryOutputSchema = z.object({
//   strengthsSummary: z
//     .string()
//     .describe('A summarized snippet of the user\u0027s unique strengths.'),
// });
// export type SummarizeSelfDiscoveryOutput = z.infer<typeof SummarizeSelfDiscoveryOutputSchema>;

// export async function summarizeSelfDiscovery(
//   input: SummarizeSelfDiscoveryInput
// ): Promise<SummarizeSelfDiscoveryOutput> {
//   return summarizeSelfDiscoveryFlow(input);
// }

// const summarizeSelfDiscoveryPrompt = ai.definePrompt({
//   name: 'summarizeSelfDiscoveryPrompt',
//   input: {schema: SummarizeSelfDiscoveryInputSchema},
//   output: {schema: SummarizeSelfDiscoveryOutputSchema},
//   prompt: `Summarize the following self-discovery summary, highlighting the user's unique strengths:

// {{{selfDiscoverySummary}}}`,
// });

// const summarizeSelfDiscoveryFlow = ai.defineFlow(
//   {name: 'summarizeSelfDiscoveryFlow', inputSchema: SummarizeSelfDiscoveryInputSchema, outputSchema: SummarizeSelfDiscoveryOutputSchema},
//   async input => {
//     const {output} = await summarizeSelfDiscoveryPrompt(input);
//     return output!;
//   }
// );
