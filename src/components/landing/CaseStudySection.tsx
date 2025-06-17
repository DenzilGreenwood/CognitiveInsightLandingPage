
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export function CaseStudySection() {
  return (
    <AnimatedSection
      id="story-behind-it-section"
      className="py-16 md:py-24 bg-card shadow-sm"
      aria-labelledby="story-behind-it-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-1 md:order-2">
             <Image
              src="https://placehold.co/500x450.png"
              alt="Visual metaphor for personal insight and journey"
              width={500}
              height={450}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="personal journey"
            />
          </div>
          <div className="order-2 md:order-1">
            <h2
              id="story-behind-it-title"
              className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6"
            >
              The Story Behind It
            </h2>
            <blockquote className="text-xl text-foreground/80 mb-6 border-l-4 border-accent pl-6 italic">
              “I’m 54. I have 10,950 days left. I don’t want to spend them misaligned.”
            </blockquote>
            <p className="text-lg text-foreground/80 mb-8">
              That insight changed everything. What began as a personal breakdown became the seed for a replicable protocol — and a new consulting practice built on legacy framing, emotional clarity, and system-based insight.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#"> 
                  Read My Self-Discovery Summary
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#"> 
                  View My Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
