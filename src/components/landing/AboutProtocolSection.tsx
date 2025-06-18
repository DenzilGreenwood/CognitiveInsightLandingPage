
"use client";
import { Zap, Search, MessageSquare, Handshake, Users, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const protocolPhases = [
  {
    icon: Zap,
    name: "Phase 1: Stabilize + Structure",
    description: "Validate pressure, externalize problems, reduce panic.",
  },
  {
    icon: Search,
    name: "Phase 2: Listen for the Core Frame",
    description: "Identify underlying perspectives/beliefs.",
  },
  {
    icon: MessageSquare,
    name: "Phase 3: Validate Emotion / Reframe Belief",
    description: "Acknowledge emotions, constructively reframe beliefs.",
  },
  {
    icon: Handshake, 
    name: "Phase 4: Pivot to Pure Support",
    description: "At emotional lows, offer grounding and validation, cease strategic input.",
  },
  {
    icon: Users,
    name: "Phase 5: Follow User's Lead to Self-Discovery",
    description: "Shift from advisor to facilitator, follow user's lead.",
  },
  {
    icon: Sparkles,
    name: "Phase 6: Synthesize & Empower",
    description: "Integrate learnings and foster confident action.",
  },
];

export function AboutProtocolSection() {
  return (
    <AnimatedSection
      id="how-it-works-section" 
      className="py-16 md:py-20" // Reduced py for approach page
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="how-it-works-title"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            The Cognitive Edge Protocol™: A 6-Phase Journey
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            A structured yet flexible framework designed to turn overwhelming complexity into actionable clarity. Each phase builds on the last, moving from chaos to confident, mission-aligned action.
          </p>
        </div>

        {/* Infographic/Flowchart - currently represented by cards */}
        {/* For a true infographic, an SVG or complex div structure would be needed. */}
        {/* This card layout serves as a clear textual representation. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {protocolPhases.map((phase, index) => (
            <Card key={phase.name} className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="flex-row items-center space-x-4 pb-3">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <phase.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phase {index + 1}</p>
                  <CardTitle className="font-headline text-lg font-semibold text-primary">{phase.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/70">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
            <Link href="#"> 
              Download Protocol Overview (PDF)
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
