
"use client";

import { Handshake, Zap, ShieldCheck, HeartHandshake, Lightbulb, UserCircle } from "lucide-react";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const partnershipPrinciples = [
  "I help you ask better questions, not chase fast answers.",
  "I focus on meaning, not just metrics.",
  "I treat emotions as data, not distractions.",
  "I believe clarity is earned through structured reflection.",
  "I honor your privacy and autonomy at every step.",
];

const cognitiveInsightDefinition = "Cognitive insight refers to the ability to critically evaluate one's own thoughts, beliefs, and perceptions, and to recognize when they might be flawed or inaccurate. It involves self-reflectiveness, the capacity to examine one's own mental processes, and self-certainty, the tendency to over-rely on one's own conclusions. Individuals with strong cognitive insight can distance themselves from distorted beliefs, re-evaluate their interpretations, and potentially correct errors in thinking.";

const ethicalDisclosure = "All interactions respect your privacy. No data will be used without consent. The Cognitive Edge Protocol™ uses AI as a supportive partner where appropriate in my process, not a replacement for human insight.";

export function AboutSection() {
  return (
    <AnimatedSection className="py-12 md:py-16" aria-labelledby="about-denzil-title">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="text-center">
          <UserCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 id="about-denzil-title" className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-6">
            My Story & Guiding Ethos
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the journey behind CognitiveInsight.ai and the principles that drive my work.
          </p>
        </div>

        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 flex justify-center items-center p-6 bg-muted">
              <Image
                src="https://placehold.co/300x300.png" // Placeholder for Denzil's photo
                alt="Denzil Greenwood"
                width={250}
                height={250}
                className="rounded-lg shadow-md object-cover"
                data-ai-hint="profile Denzil"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="font-headline text-2xl sm:text-3xl text-primary">The "10,950 Days" Insight</CardTitle>
                <CardDescription className="text-lg text-foreground/70">My journey to the Cognitive Edge Protocol™.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-foreground/80">
                <p>
                  It began with a stark realization: “I’m 54. I have approximately 10,950 days left. I don’t want to spend them misaligned.” That single thought became a turning point. What felt like a personal breakdown was, in reality, the seed for a replicable protocol—and a new consulting practice built on legacy framing, emotional clarity, and system-based insight.
                </p>
                <p>
                  My mission is to help you avoid spending your precious days out of alignment, by transforming complexity into clarity and enabling you to act from a place of profound self-understanding and purpose.
                </p>
                 <p className="font-semibold text-primary">
                   I help mission-driven founders and leaders turn complexity into clarity using legacy-informed systems thinking.
                 </p>
              </CardContent>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Lightbulb className="mr-3 h-7 w-7" /> What is Cognitive Insight?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/80">
              {cognitiveInsightDefinition}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Handshake className="mr-3 h-7 w-7" /> My Partnership Principles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-lg text-foreground/80 list-disc list-inside pl-2">
              {partnershipPrinciples.map((principle, index) => (
                <li key={index}>{principle}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <ShieldCheck className="mr-3 h-7 w-7" /> Ethical & AI Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/80">
              {ethicalDisclosure}
            </p>
          </CardContent>
        </Card>

      </div>
    </AnimatedSection>
  );
}
