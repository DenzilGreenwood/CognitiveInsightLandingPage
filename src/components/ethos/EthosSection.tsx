
"use client";

import { Handshake, Zap, ShieldCheck, HeartHandshake } from "lucide-react";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const partnershipPrinciples = [
  "I help you ask better questions, not chase fast answers.",
  "I focus on meaning, not just metrics.",
  "I treat emotions as data, not distractions.",
  "I believe clarity is earned through structured reflection.",
  "I honor your privacy and autonomy at every step.",
];

const ethicalDisclosure = "All interactions respect your privacy. No data will be used without consent. The Cognitive Edge Protocol™ uses AI as a supportive partner, not a replacement for human insight where AI tools are optionally employed in our process.";

export function EthosSection() {
  return (
    <AnimatedSection className="py-12 md:py-16" aria-labelledby="consulting-ethos-title">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <HeartHandshake className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 id="consulting-ethos-title" className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
            🤝 Consulting Ethos
          </h1>
          <p className="text-xl text-foreground/80">
            My commitment to a partnership built on trust, depth, and actionable insight.
          </p>
        </div>

        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Handshake className="mr-3 h-7 w-7" /> Our Partnership Principles
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
