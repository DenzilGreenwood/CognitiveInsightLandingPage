
"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Star, MessageSquare, DollarSign, Send } from "lucide-react";
import { type FeedbackFormState, submitFeedbackForm } from "@/app/actions/feedbackActions";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { useState } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting Feedback...
        </>
      ) : (
        <>
         <Send className="mr-2 h-4 w-4" />
          Submit Feedback
        </>
      )}
    </Button>
  );
}

export function FeedbackSection() {
  const initialState: FeedbackFormState = { message: "", isSuccess: false, errors: {} };
  const [state, formAction] = useActionState(submitFeedbackForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [valueAddedOption, setValueAddedOption] = useState<string>("10"); // Default to $10
  const [showOtherPriceInput, setShowOtherPriceInput] = useState(false);

  useEffect(() => {
    if (state?.message && state.message !== initialState.message) {
      if (state.isSuccess) {
        toast({
          title: "Feedback Submitted!",
          description: state.message,
        });
        formRef.current?.reset();
        setValueAddedOption("10"); // Reset radio group
        setShowOtherPriceInput(false); // Hide other input
      } else {
        const errorDescription = 
          state.errors?.starRating?.[0] ||
          state.errors?.valueAdded?.[0] ||
          state.errors?.otherPrice?.[0] ||
          state.errors?.comments?.[0] ||
          state.message;
        toast({
          title: "Submission Error",
          description: errorDescription,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, initialState.message]);

  const handleValueAddedChange = (value: string) => {
    setValueAddedOption(value);
    if (value === "other") {
      setShowOtherPriceInput(true);
    } else {
      setShowOtherPriceInput(false);
    }
  };

  return (
    <AnimatedSection id="feedback-section" aria-labelledby="feedback-title">
      <Card className="shadow-lg max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Star className="h-12 w-12 text-primary mx-auto mb-3" />
          <CardTitle id="feedback-title" className="font-headline text-2xl text-primary">
            Share Your Experience
          </CardTitle>
          <CardDescription>
            Your feedback is invaluable in helping us refine the Cognitive Edge Protocol.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="starRating" className="flex items-center text-lg font-semibold">
                <Star className="mr-2 h-5 w-5 text-muted-foreground" /> Overall Satisfaction
              </Label>
              <Select name="starRating" defaultValue="5" required>
                <SelectTrigger id="starRating" className="w-full" aria-describedby="starRating-error">
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  {[5, 4, 3, 2, 1].map(rating => (
                    <SelectItem key={rating} value={String(rating)}>
                      {rating} Star{rating > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state?.errors?.starRating && <p id="starRating-error" className="text-sm text-destructive mt-1">{state.errors.starRating[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center text-lg font-semibold">
                <DollarSign className="mr-2 h-5 w-5 text-muted-foreground" /> Perceived Value
              </Label>
              <RadioGroup
                name="valueAdded"
                defaultValue={valueAddedOption}
                onValueChange={handleValueAddedChange}
                className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
                aria-describedby="valueAdded-error"
              >
                {["10", "20", "50", "100"].map(value => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={`value-${value}`} />
                    <Label htmlFor={`value-${value}`}>${value}</Label>
                  </div>
                ))}
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="value-other" />
                  <Label htmlFor="value-other">Other</Label>
                </div>
              </RadioGroup>
              {state?.errors?.valueAdded && <p id="valueAdded-error" className="text-sm text-destructive mt-1">{state.errors.valueAdded[0]}</p>}
              
              {showOtherPriceInput && (
                <div className="mt-2 space-y-1">
                  <Label htmlFor="otherPrice">Specify Other Amount ($)</Label>
                  <Input 
                    type="number" 
                    name="otherPrice" 
                    id="otherPrice" 
                    placeholder="e.g., 75" 
                    min="0" 
                    step="1"
                    aria-describedby="otherPrice-error"
                  />
                  {state?.errors?.otherPrice && <p id="otherPrice-error" className="text-sm text-destructive mt-1">{state.errors.otherPrice[0]}</p>}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments" className="flex items-center text-lg font-semibold">
                <MessageSquare className="mr-2 h-5 w-5 text-muted-foreground" /> Other Comments
              </Label>
              <Textarea
                name="comments"
                id="comments"
                placeholder="Share any additional thoughts, suggestions, or aspects of your experience..."
                rows={5}
                className="resize-none"
                aria-describedby="comments-error"
              />
              {state?.errors?.comments && <p id="comments-error" className="text-sm text-destructive mt-1">{state.errors.comments[0]}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </AnimatedSection>
  );
}
