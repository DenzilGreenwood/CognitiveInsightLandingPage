
"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile } from "lucide-react"; // Changed from MessageCircleQuote to Smile

const testimonials = [
  {
    quote: "This helped me realize why I was stuck in my career. The visual map was a game-changer.",
    author: "Valued Participant",
    role: "Tech Lead",
  },
  {
    quote: "I finally feel like my thinking is an asset, not a burden. The protocol provided structure I desperately needed.",
    author: "Insightful User",
    role: "Founder",
  },
  {
    quote: "The clarity I gained was truly transformative for my project and how our team communicates.",
    author: "Strategic Thinker",
    role: "Product Manager",
  },
   {
    quote: "Denzil's approach helped me connect dots I didn't even know existed. Highly recommended for anyone feeling misaligned.",
    author: "Inspired Professional",
    role: "Marketing Director",
  },
];
// Note: For future enhancement, these testimonials could be associated with specific services
// and displayed within the WorkWithMeSection or a more dynamic testimonials component.
// Also, consider adding visual proof like screenshots or actual client logos if available.

export function TestimonialsSection() {
  return (
    <AnimatedSection
      id="testimonials-section"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Smile className="h-12 w-12 text-primary mx-auto mb-4" /> {/* Changed from MessageCircleQuote to Smile */}
          <h2
            id="testimonials-title"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            Hear From Those Who Found Clarity
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Real experiences from individuals and teams who have benefited from the Cognitive Edge Protocol™. (Testimonials are illustrative)
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => ( // Displaying up to 4 for this layout
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-card flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-medium text-foreground/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto pt-2">
                <p className="text-sm text-right text-primary font-semibold">- {testimonial.author}</p>
                {testimonial.role && <p className="text-xs text-right text-muted-foreground">{testimonial.role}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
