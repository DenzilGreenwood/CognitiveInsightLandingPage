
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, User, Briefcase, Sparkles } from "lucide-react";
import { submitVolunteerForm, type VolunteerFormState } from "@/app/actions/volunteerActions";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Submit Interest
        </>
      )}
    </Button>
  );
}

export function GetInvolvedSection() {
  const initialState: VolunteerFormState = { message: "", isSuccess: false, errors: {} };
  const [state, formAction] = useActionState(submitVolunteerForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.message !== initialState.message) { // Check if message is new
      if (state.isSuccess) {
        toast({
          title: "Submission Received!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
         const errorDescription =
           state.errors?.name?.[0] ||
           state.errors?.email?.[0] ||
           state.errors?.roleSituation?.[0] ||
           state.errors?.interestReason?.[0] ||
           state.message;
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
      id="volunteer-cta-section" // Updated ID for scrolling
      className="py-16 md:py-24 bg-card shadow-sm"
      aria-labelledby="volunteer-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2
              id="volunteer-title"
              className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4"
            >
              🧠 Help Us Refine the Protocol
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              We’re seeking individuals or small teams navigating uncertainty, transition, or strategic reinvention to participate in a new round of real-time case studies using the Cognitive Edge Protocol™.
            </p>

            <form ref={formRef} action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="mb-2 flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" /> Name
                </Label>
                <Input type="text" name="name" id="name" placeholder="Your Name" required aria-describedby="name-error"/>
                {state?.errors?.name && <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" /> Email
                </Label>
                <Input type="email" name="email" id="email" placeholder="your.email@example.com" required aria-describedby="email-error"/>
                {state?.errors?.email && <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>

              <div>
                <Label htmlFor="roleSituation" className="mb-2 flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" /> Role / Situation
                </Label>
                <Textarea name="roleSituation" id="roleSituation" placeholder="e.g., Leader in transition, Team facing strategic shift..." required rows={3} aria-describedby="role-error"/>
                {state?.errors?.roleSituation && <p id="role-error" className="text-sm text-destructive mt-1">{state.errors.roleSituation[0]}</p>}
              </div>

              <div>
                <Label htmlFor="interestReason" className="mb-2 flex items-center">
                   <Sparkles className="mr-2 h-4 w-4 text-muted-foreground" /> Why you’re interested
                </Label>
                <Textarea name="interestReason" id="interestReason" placeholder="e.g., Seeking clarity on next steps, Looking to improve team cohesion..." required rows={3} aria-describedby="interest-error"/>
                {state?.errors?.interestReason && <p id="interest-error" className="text-sm text-destructive mt-1">{state.errors.interestReason[0]}</p>}
              </div>

              <SubmitButton />
            </form>
          </div>
           <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Illustration of collaboration or team refinement"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="collaboration team"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
