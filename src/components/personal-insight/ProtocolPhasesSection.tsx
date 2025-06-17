
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Search, MessageSquare, Handshake, Users, Sparkles, Brain } from "lucide-react";
import { AnimatedSection } from "@/components/landing/AnimatedSection";

const protocolPhases = [
  {
    icon: Zap,
    name: "Phase 1: Stabilize and Structure",
    description: "Establishing a foundation amidst chaos, validating pressure and externalizing problems to reduce immediate panic.",
  },
  {
    icon: Search,
    name: "Phase 2: Listen for the Core Frame",
    description: "Identifying the underlying perspectives and beliefs that shape understanding.",
  },
  {
    icon: MessageSquare,
    name: "Phase 3: Validate Emotion / Reframe Belief",
    description: "Acknowledging emotional impacts and constructively reframing limiting beliefs.",
  },
  {
    icon: Handshake,
    name: "Phase 4: Pivot to Pure Support",
    description: "At emotional low points, ceasing strategic input to provide grounding exercises and validation, prioritizing psychological safety.",
  },
  {
    icon: Users,
    name: "Phase 5: Follow the User's Lead to Self-Discovery",
    description: "Shifting from advisor to facilitator, guiding the user to uncover their own insights and strengths.",
  },
  {
    icon: Sparkles,
    name: "Phase 6: Synthesize and Empower",
    description: "Integrating learnings and fostering confident action based on newfound clarity and purpose.",
  },
];

export function ProtocolPhasesSection() {
  return (
    <AnimatedSection id="protocol-phases" aria-labelledby="protocol-phases-title">
      <div className="text-center mb-12">
        <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 id="protocol-phases-title" className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
          The 6 Phases of the Cognitive Edge Protocol
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Embark on a guided journey through the Cognitive Edge Protocol. Each phase is designed to build upon the last, leading you towards profound personal insight and actionable clarity.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {protocolPhases.map((phase) => (
          <Card key={phase.name} className="shadow-md hover:shadow-lg transition-shadow bg-card">
            <CardHeader>
              <div className="flex items-center mb-3">
                <phase.icon className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="font-headline text-xl text-primary">{phase.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">{phase.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
