
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { handleSummarize, type SummarizeActionResult } from "@/app/actions/summarizeActions";
import { Loader2, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  selfDiscoverySummary: z.string().min(50, {
    message: "Please provide a summary of at least 50 characters.",
  }).max(5000, {
    message: "Summary must not exceed 5000 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const exampleStrengths = [
  "Long-term vision (“Legacy Frame”)",
  "Pattern recognition",
  "Reflective depth",
  "High-agency problem reframing"
];

export function YourEdgeProfileSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [summaryResult, setSummaryResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selfDiscoverySummary: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSummaryResult(null);

    const result: SummarizeActionResult = await handleSummarize(data);

    if (result.success && result.data) {
      setSummaryResult(result.data.strengthsSummary);
      toast({
        title: "Summary Generated!",
        description: "Your unique strengths profile has been created.",
      });
    } else {
      const errorMessage = result.error || "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <AnimatedSection
      className="py-16 md:py-24"
      aria-labelledby="edge-profile-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              id="edge-profile-title"
              className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6"
            >
              What Makes Your Mind Unique?
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              Our protocol helps you identify and leverage core strengths such as:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-foreground/70">
              {exampleStrengths.map(strength => <li key={strength}>{strength}</li>)}
            </ul>
             <p className="text-lg text-foreground/80 mb-6">
              Enter a brief self-discovery summary below, and our AI will help craft a personalized snippet highlighting your unique cognitive assets.
            </p>
             <Image
              src="https://placehold.co/500x300.png"
              alt="Compass guiding towards personal strengths"
              width={500}
              height={300}
              className="rounded-lg shadow-xl object-cover mt-8"
              data-ai-hint="compass direction"
            />
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Sparkles className="h-6 w-6 text-accent" />
                Generate Your Strengths Snippet
              </CardTitle>
              <CardDescription>
                Describe your recent reflections, challenges, or insights.
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="selfDiscoverySummary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="selfDiscoverySummary">Your Self-Discovery Summary</FormLabel>
                        <FormControl>
                          <Textarea
                            id="selfDiscoverySummary"
                            placeholder="e.g., I've been reflecting on my tendency to see connections others miss, especially in complex projects..."
                            rows={8}
                            className="resize-none"
                            {...field}
                            aria-describedby="summary-constraints summary-error"
                          />
                        </FormControl>
                        <FormMessage id="summary-error" />
                        <p id="summary-constraints" className="text-sm text-muted-foreground">
                          Min 50 characters, Max 5000 characters.
                        </p>
                      </FormItem>
                    )}
                  />

                  {summaryResult && !isLoading && (
                    <Alert variant="default" className="bg-primary/5 border-primary/20">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <AlertTitle className="font-headline text-primary">Your Strengths Summary</AlertTitle>
                      <AlertDescription className="text-foreground/90">
                        {summaryResult}
                      </AlertDescription>
                    </Alert>
                  )}
                  {error && !isLoading && (
                     <Alert variant="destructive">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 items-center">
                  <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Summarize My Strengths"
                    )}
                  </Button>
                  <Button variant="outline" type="button" className="w-full sm:w-auto" disabled={isLoading}>
                    Start Full Assessment (Soon)
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
