
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export function CaseStudySection() {
  return (
    <AnimatedSection
      className="py-16 md:py-24 bg-card shadow-sm"
      aria-labelledby="case-study-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
             <Image
              src="https://placehold.co/500x400.png"
              alt="Visual metaphor for breakthrough"
              width={500}
              height={400}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="lightbulb idea"
            />
          </div>
          <div>
            <h2
              id="case-study-title"
              className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6"
            >
              From Breakdown to Breakthrough
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              In a documented case study, the protocol helped a burned-out technologist realign with his core strengths and build a new strategic consulting model—all through structured, emotionally intelligent conversation with an AI.
            </p>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
              <Link href="#"> 
                Read Full Case Study
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
