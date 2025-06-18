
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Download, Mail, FileText } from "lucide-react";
import { signUpForNewsletter, type NewsletterSignUpState } from "@/app/actions/newsletterActions"; // Reusing for simplicity
import { AnimatedSection } from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Get Your Free Guide
        </>
      )}
    </Button>
  );
}

export function LeadMagnetSection() {
  const initialState: NewsletterSignUpState = { message: "", isSuccess: false, errors: {} };
  // Reusing NewsletterSignUpState and signUpForNewsletter action for this lead magnet
  // In a real scenario, this might be a different action/state if the handling is different.
  const [state, formAction] = useActionState(signUpForNewsletter, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.message !== initialState.message) { 
      if (state.isSuccess) {
        toast({
          title: "Guide on its way!",
          description: "Check your email for the download link. (This is a simulation)",
        });
        formRef.current?.reset();
        // TODO: Potentially trigger a download or redirect to a thank you page with the PDF
        // For now, we'll just log:
        console.log("Lead magnet PDF download initiated for:", state); 
      } else {
         const errorDescription = state.errors?.email?.[0] || state.message;
        toast({
          title: "Submission Error",
          description: errorDescription,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, initialState.message]);


  return (
    <AnimatedSection
      id="free-resource-opt-in"
      className="py-16 md:py-24 bg-muted/50"
      aria-labelledby="lead-magnet-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-8 order-2 md:order-1">
              <CardHeader className="p-0 mb-4">
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle id="lead-magnet-title" className="font-headline text-2xl sm:text-3xl text-primary">
                  Unlock Cognitive Clarity
                </CardTitle>
                <CardDescription className="text-md text-foreground/70 mt-1">
                  Download my free guide: "5 Patterns of Cognitive Clarity" to start transforming complexity into actionable insight today.
                </CardDescription>
              </CardHeader>
              <form ref={formRef} action={formAction} className="space-y-6">
                <CardContent className="p-0 space-y-4">
                  <div>
                    <Label htmlFor="lead-email" className="mb-1 flex items-center text-sm font-medium text-foreground/80">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" /> Your Email Address
                    </Label>
                    <Input 
                      type="email" 
                      name="email" 
                      id="lead-email" 
                      placeholder="you@example.com" 
                      required 
                      aria-describedby="lead-email-error"
                      className="bg-background"
                    />
                    {state?.errors?.email && <p id="lead-email-error" className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                  </div>
                </CardContent>
                <CardFooter className="p-0 flex-col items-start space-y-3">
                  <SubmitButton />
                  <p className="text-xs text-muted-foreground">
                    You'll receive the guide and occasional insights. No spam, unsubscribe anytime.
                  </p>
                </CardFooter>
              </form>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-full">
              <Image
                src="https://placehold.co/600x400.png" 
                alt="Cover of the 5 Patterns of Cognitive Clarity Guide"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="ebook cover guide"
              />
            </div>
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
}
