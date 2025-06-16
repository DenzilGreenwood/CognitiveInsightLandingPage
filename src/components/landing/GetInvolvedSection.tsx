
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { signUpForNewsletter, type NewsletterSignUpState } from "@/app/actions/newsletterActions";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Subscribing...
        </>
      ) : (
        "Subscribe"
      )}
    </Button>
  );
}

export function GetInvolvedSection() {
  const initialState: NewsletterSignUpState = { message: "", isSuccess: false };
  const [state, formAction] = useFormState(signUpForNewsletter, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      if (state.isSuccess) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset(); // Reset form on success
      } else if (state.errors?.email || state.message !== initialState.message) {
         toast({
          title: "Oops!",
          description: state.errors?.email?.[0] || state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, initialState.message]);


  return (
    <AnimatedSection
      className="py-16 md:py-24 bg-card shadow-sm"
      aria-labelledby="get-involved-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2
              id="get-involved-title"
              className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6"
            >
              Get Involved
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Explore opportunities for personal and professional growth through Cognitive Edge:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-foreground/70">
              <li>Personalized Coaching</li>
              <li>Interactive Workshops</li>
              <li>Keynote Speaking Engagements</li>
            </ul>
            <h3 className="font-headline text-2xl font-semibold text-primary mb-4">
              Stay Updated
            </h3>
            <p className="text-foreground/80 mb-6">
              Subscribe to our newsletter for the latest insights, updates on the protocol, and upcoming events.
            </p>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                   <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                    className="pl-10"
                    aria-label="Email address for newsletter"
                  />
                </div>
                <SubmitButton />
              </div>
               {state?.errors?.email && (
                <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
              )}
            </form>
          </div>
           <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Community and connection illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="community connection"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
