
"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const protocolBenefits = [
  {
    text: "Developed by James Greenwood, combining AI, reflection, and systems thinking.",
  },
  {
    text: "Moves users from crisis to clarity using a 6-phase conversational process.",
  },
  {
    text: "Designed for leaders, creatives, and problem-solvers in transition.",
  },
];

export function AboutProtocolSection() {
  return (
    <AnimatedSection
      id="protocol-section"
      className="py-16 md:py-24"
      aria-labelledby="about-protocol-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2
              id="about-protocol-title"
              className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-8"
            >
              The Cognitive Edge Protocol
            </h2>
            <ul className="space-y-4">
              {protocolBenefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-foreground/80 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Illustration of a structured thought process"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="systems thinking"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
