
"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, KeyRound, Mail } from "lucide-react";
import { type AuthFormState, submitAuthForm } from "@/app/actions/authActions";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/landing/AnimatedSection";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "🔓 Unlock My Insight"
      )}
    </Button>
  );
}

export function LeadCaptureSection() {
  const initialState: AuthFormState = { message: "", isSuccess: false, errors: {} };
  const [state, formAction] = useActionState(submitAuthForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.message !== initialState.message) {
      if (state.isSuccess) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        const errorDescription = state.errors?.email?.[0] || state.errors?.password?.[0] || state.message;
        toast({
          title: "Submission Error",
          description: errorDescription,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, initialState.message]);

  return (
    <AnimatedSection id="lead-capture" aria-labelledby="lead-capture-title">
      <div className="max-w-md mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle id="lead-capture-title" className="font-headline text-2xl text-primary">
              📥 Enter your email and create a secure password to begin your personalized journey.
            </CardTitle>
            {/* CardDescription removed as per new prompt */}
          </CardHeader>
          <form ref={formRef} action={formAction}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" /> Email Address
                </Label>
                <Input type="email" name="email" id="email" placeholder="you@example.com" required aria-describedby="email-error"/>
                {state?.errors?.email && <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center">
                  <KeyRound className="mr-2 h-4 w-4 text-muted-foreground" /> Create a Password
                </Label>
                <Input type="password" name="password" id="password" placeholder="Create a password" required aria-describedby="password-error"/>
                {state?.errors?.password && <p id="password-error" className="text-sm text-destructive mt-1">{state.errors.password[0]}</p>}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <SubmitButton />
              <p className="mt-4 text-xs text-muted-foreground text-center">
                We’ll never sell your data. Your insight is private.
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </AnimatedSection>
  );
}
