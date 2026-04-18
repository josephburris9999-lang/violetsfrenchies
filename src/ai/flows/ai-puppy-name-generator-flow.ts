'use server';
/**
 * @fileOverview An AI-powered tool to generate creative and unique name suggestions for French Bulldog puppies.
 *
 * - generatePuppyNames - A function that handles the puppy name generation process.
 * - PuppyNameGeneratorInput - The input type for the generatePuppyNames function.
 * - PuppyNameGeneratorOutput - The return type for the generatePuppyNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PuppyNameGeneratorInputSchema = z.object({
  theme: z
    .string()
    .optional()
    .describe(
      'An optional theme or category for the names (e.g., "vintage", "nature", "food").'
    ),
  preferences: z
    .string()
    .optional()
    .describe(
      'Any specific preferences or characteristics for the names (e.g., "short and cute", "strong and elegant", "unisex").'
    ),
});
export type PuppyNameGeneratorInput = z.infer<typeof PuppyNameGeneratorInputSchema>;

const PuppyNameGeneratorOutputSchema = z.object({
  names: z
    .array(z.string())
    .describe(
      'A list of creative and unique name suggestions for a French Bulldog puppy.'
    ),
});
export type PuppyNameGeneratorOutput = z.infer<typeof PuppyNameGeneratorOutputSchema>;

export async function generatePuppyNames(
  input: PuppyNameGeneratorInput
): Promise<PuppyNameGeneratorOutput> {
  return puppyNameGeneratorFlow(input);
}

const puppyNameGeneratorPrompt = ai.definePrompt({
  name: 'puppyNameGeneratorPrompt',
  input: {schema: PuppyNameGeneratorInputSchema},
  output: {schema: PuppyNameGeneratorOutputSchema},
  prompt: `You are an AI assistant specialized in generating creative and unique names for French Bulldog puppies.
      The user is looking for name suggestions.

      {{#if theme}}
      Consider the following theme: {{{theme}}}
      {{/if}}

      {{#if preferences}}
      Also, keep these preferences in mind: {{{preferences}}}
      {{/if}}

      Generate a list of 5 to 10 names. Ensure the names are suitable for French Bulldogs.
      Provide the names in a JSON object format with a 'names' key containing an array of strings, as specified by the output schema.
      `,
});

const puppyNameGeneratorFlow = ai.defineFlow(
  {
    name: 'puppyNameGeneratorFlow',
    inputSchema: PuppyNameGeneratorInputSchema,
    outputSchema: PuppyNameGeneratorOutputSchema,
  },
  async input => {
    const {output} = await puppyNameGeneratorPrompt(input);
    return output!;
  }
);
