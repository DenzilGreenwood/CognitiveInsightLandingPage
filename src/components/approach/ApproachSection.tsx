
"use client";

import { AboutProtocolSection } from "@/components/landing/AboutProtocolSection";
import { CaseStudySection } from "@/components/landing/CaseStudySection";
import { Separator } from "@/components/ui/separator";
import { Brain } from "lucide-react";

export function ApproachSection() {
  return (
    <div className="space-y-16 md:space-y-24">
      <div className="text-center pt-8">
        <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
          My Approach to Clarity
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Discover the Cognitive Edge Protocol™ — a structured path to insight — and see its impact through real-world application.
        </p>
      </div>
      
      {/* Ensure AboutProtocolSection is updated for better infographic style if possible */}
      <AboutProtocolSection />
      
      <Separator className="my-12 md:my-16" />
      
      <CaseStudySection />
    </div>
  );
}
