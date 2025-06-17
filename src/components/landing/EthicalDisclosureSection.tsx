
"use client";

import { ShieldCheck } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function EthicalDisclosureSection() {
  return (
    <AnimatedSection
      id="ethical-disclosure-section"
      className="py-12 md:py-16 bg-background" // Using background, can be card too
      aria-labelledby="ethical-disclosure-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center p-8 rounded-lg border border-border bg-card shadow-md">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2
            id="ethical-disclosure-title"
            className="font-headline text-2xl sm:text-3xl font-semibold text-primary mb-4"
          >
            Ethical & AI Disclosure
          </h2>
          <p className="text-md text-foreground/80">
            All interactions respect your privacy. No data will be used without consent. The Cognitive Edge Protocol uses AI as a supportive partner, not a replacement for human insight.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
