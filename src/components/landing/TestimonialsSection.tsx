
"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile }_MOD_ <!-- Replaced MessageCircleQuote with Smile -->_MOD_
from "lucide-react";

const testimonials = [
  {
    quote: "This helped me realize why I was stuck in my career.",
    author: "Valued Participant",
  },
  {
    quote: "I finally feel like my thinking is an asset, not a burden.",
    author: "Insightful User",
  },
  {
    quote: "The clarity I gained was truly transformative for my project.",
    author: "Strategic Thinker",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection
      id="testimonials-section"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Smile className="h-12 w-12 text-primary mx-auto mb-4" />_MOD_ <!-- Replaced MessageCircleQuote with Smile -->_MOD_
          <h2
            id="testimonials-title"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            Hear From Those Who Found Clarity
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how the Cognitive Edge Protocol™ has impacted others. (Testimonials are illustrative)
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-foreground/80 italic">
                  "{testimonial.quote}"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-right text-primary font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
