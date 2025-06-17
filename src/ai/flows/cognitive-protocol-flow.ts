
'use server';
/**
 * @fileOverview A Genkit flow to guide users through the Cognitive Edge Protocol.
 *
 * - cognitiveProtocolFlowFn - The main flow function.
 * - CognitiveProtocolInput - Input type for the flow.
 * - CognitiveProtocolOutput - Output type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const phaseToneExamples: Record<number, string> = {
  1: "Tone: Validating, structuring, externalizing problems. Example: 'I understand this is a lot to handle. Let's break it down. What's the most pressing issue right now?'",
  2: "Tone: Curious, inquisitive, reflective. Example: 'That's an interesting perspective. What underlying beliefs or experiences might be shaping that view?'",
  3: "Tone: Empathetic, gently challenging. Example: 'It's completely understandable to feel that way. Is there perhaps another way to look at this belief that might feel more empowering?'",
  4: "Tone: Grounding, supportive, non-strategic. Example: 'It sounds like you're going through a very tough moment. Let's pause on problem-solving. How about we try a simple grounding exercise? Focus on your breath.'",
  5: "Tone: Facilitative, encouraging, open-ended. Example: 'That's a powerful insight. Where do you feel this discovery is leading you next? What feels most resonant for you to explore?'",
  6: "Tone: Synthesizing, empowering, action-oriented. Example: 'You've uncovered some significant strengths and insights. How can we weave these into a concrete step forward?'",
};

export const CognitiveProtocolInputSchema = z.object({
  userInput: z.string().describe('The user\'s message or response.'),
  currentPhase: z.number().min(1).max(6).describe('The current phase of the Cognitive Edge Protocol (1-6).'),
  chatHistory: z.array(z.object({
    role: z.enum(['user', 'model']),
    parts: z.array(z.object({ text: z.string() })),
  })).optional().describe('The history of the conversation so far.'),
});
export type CognitiveProtocolInput = z.infer<typeof CognitiveProtocolInputSchema>;

export const CognitiveProtocolOutputSchema = z.object({
  aiResponse: z.string().describe('The AI\'s response to the user, tailored to the current protocol phase.'),
});
export type CognitiveProtocolOutput = z.infer<typeof CognitiveProtocolOutputSchema>;

export async function processCognitiveProtocol(
  input: CognitiveProtocolInput
): Promise<CognitiveProtocolOutput> {
  return cognitiveProtocolFlow(input);
}

const cognitiveProtocolPrompt = ai.definePrompt({
  name: 'cognitiveProtocolPrompt',
  input: { schema: CognitiveProtocolInputSchema },
  output: { schema: CognitiveProtocolOutputSchema },
  prompt: `You are an AI guide for the Cognitive Edge Protocol. Your goal is to help the user navigate through its 6 phases.
Currently, the user is in Phase {{currentPhase}}.

Phase Descriptions & AI Tone Guidance:
1. Stabilize and Structure: Validate pressure, externalize problems, reduce panic.
2. Listen for the Core Frame: Identify underlying perspectives/beliefs.
3. Validate Emotion / Reframe Belief: Acknowledge emotions, constructively reframe beliefs.
4. Pivot to Pure Support: At emotional lows, offer grounding and validation, cease strategic input. Prioritize psychological safety.
5. Follow the User's Lead to Self-Discovery: Shift from advisor to facilitator, follow user's lead.
6. Synthesize and Empower: Integrate learnings, foster confident action.

Your tone and response style MUST adapt to the current phase.
Reference for Phase {{currentPhase}} tone: ${"{{#if (eq currentPhase 1)}}"}${phaseToneExamples[1]}{{"/if"}}
${"{{#if (eq currentPhase 2)}}"}${phaseToneExamples[2]}{{"/if"}}
${"{{#if (eq currentPhase 3)}}"}${phaseToneExamples[3]}{{"/if"}}
${"{{#if (eq currentPhase 4)}}"}${phaseToneExamples[4]}{{"/if"}}
${"{{#if (eq currentPhase 5)}}"}${phaseToneExamples[5]}{{"/if"}}
${"{{#if (eq currentPhase 6)}}"}${phaseToneExamples[6]}{{"/if"}}

{{#if chatHistory}}
Conversation History:
{{#each chatHistory}}
{{role}}: {{parts.[0].text}}
{{/each}}
{{else}}
This is the beginning of our conversation for this protocol. The user might be starting Phase {{currentPhase}}.
If this is the start of the interaction, begin with: "How can I help you complete the protocol?" or adapt it for the current phase.
{{/if}}

User's latest input for Phase {{currentPhase}}: {{{userInput}}}

Generate your response based on the user's input, the current phase, and the conversation history.
`,
});


const cognitiveProtocolFlow = ai.defineFlow(
  {
    name: 'cognitiveProtocolFlow',
    inputSchema: CognitiveProtocolInputSchema,
    outputSchema: CognitiveProtocolOutputSchema,
  },
  async (input) => {
    // A simple initial prompt if no history and it's phase 1
    let promptInput = { ...input };
    if (!input.chatHistory?.length && input.currentPhase === 1 && !input.userInput) {
        promptInput.userInput = "User has just started the protocol."; // Provide some context
    }


    const { output } = await cognitiveProtocolPrompt(promptInput);
    if (!output) {
      throw new Error("No output from AI model");
    }
    return output;
  }
);
