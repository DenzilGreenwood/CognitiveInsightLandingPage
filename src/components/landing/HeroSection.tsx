
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  const handleScrollToProtocol = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const protocolSection = document.getElementById("protocol-section");
    if (protocolSection) {
      protocolSection.scrollIntoView({ behavior: "smooth" });
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
              Discover Your Cognitive Edge
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80">
              Turn overwhelm into clarity, and identity into action.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#protocol-section" onClick={handleScrollToProtocol}>
                  Start Your Journey
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Abstract representation of cognitive insight"
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
