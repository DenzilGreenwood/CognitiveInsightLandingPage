
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Brain } from "lucide-react";

export function HeroSection() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback for sections not on the current page or if ID is wrong
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <AnimatedSection
      id="start" // Added ID to be the scroll target for FullScreenHeroSection
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
              Clarity in Complexity — Strategic Thinking for Life, Work, and Leadership.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80">
              Through the Cognitive Edge Protocol™, I help people make meaning out of chaos and act from identity, not reaction.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                <Link href="mailto:denzil.james.greenwood@outlook.com?subject=Discovery%20Call%20Request">
                  <Mail className="mr-2 h-5 w-5" /> Book a Discovery Call
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#how-it-works-section" onClick={(e) => handleScrollToSection(e, 'how-it-works-section')}>
                  <Brain className="mr-2 h-5 w-5" /> Explore the Protocol
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Abstract representation of strategic thinking and clarity"
              width={600}
              height={450}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="strategic mind clarity"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

