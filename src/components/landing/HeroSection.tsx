
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Keep Link for potential direct navigation
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatedSection
      as="section"
      className="py-20 md:py-32 bg-card shadow-sm"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1
              id="hero-title"
              className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary"
            >
              Clarity in Complexity — A Protocol for Life and Work Transitions.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80">
              CognitiveInsight.ai helps individuals, teams, and organizations transform crisis into clarity using the Cognitive Edge Protocol™ — a six-phase framework developed by Denzil J. Greenwood.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                <a href="#volunteer-cta-section" onClick={(e) => handleScrollToSection(e, 'volunteer-cta-section')}>
                  Join the Case Study
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#how-it-works-section" onClick={(e) => handleScrollToSection(e, 'how-it-works-section')}>
                  How It Works
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Abstract representation of cognitive insight and clarity"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="abstract brain"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
