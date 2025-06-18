
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Brain, ChevronRight } from "lucide-react";

export function HeroSection() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <AnimatedSection
      id="start"
      as="section"
      className="py-16 md:py-24 bg-background" // Changed to background for contrast with cards
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content Column */}
          <div className="text-center md:text-left">
            <div className="mb-8 flex flex-col items-center md:items-start">
              <Image
                src="https://placehold.co/150x150.png" // Placeholder for Denzil's photo
                alt="Denzil Greenwood"
                width={150}
                height={150}
                className="rounded-full shadow-lg mb-4"
                data-ai-hint="profile Denzil"
              />
              <p className="text-lg text-foreground/80 mb-1 font-medium">
                Hi, I'm Denzil J. Greenwood.
              </p>
              <p className="text-md text-accent font-semibold mb-4">
                Cognitive Clarity Coach & Strategic Systems Thinker
              </p>
            </div>
            
            <h1
              id="hero-title"
              className="font-headline text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-primary leading-tight"
            >
              Clarity in Complexity:
              <span className="block text-foreground/90 text-3xl sm:text-4xl lg:text-4xl mt-2">Transforming chaos into mission-aligned action using the Cognitive Edge Protocol™.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80">
              I help mission-driven founders and leaders turn complexity into clarity using legacy-informed systems thinking.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                <Link href="mailto:denzil.james.greenwood@outlook.com?subject=Discovery%20Call%20Request">
                  <Mail className="mr-2 h-5 w-5" /> Book Discovery Call
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 hover:text-primary shadow-sm hover:shadow-md transition-shadow">
                <a href="/approach" onClick={(e) => { e.preventDefault(); window.location.href = '/approach'; }}>
                  <Brain className="mr-2 h-5 w-5" /> Explore My Approach
                </a>
              </Button>
            </div>
          </div>

          {/* Image/Visual Column - Kept for balance, can be repurposed or removed */}
          <div className="hidden md:flex justify-center items-center">
            <Image
              src="https://placehold.co/500x550.png" 
              alt="Abstract representation of clarity and strategic thinking"
              width={500}
              height={550}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="strategic mind insight"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
