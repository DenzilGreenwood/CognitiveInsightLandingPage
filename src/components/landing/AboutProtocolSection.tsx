
"use client";
import { CheckCircle, Zap, Search, MessageSquare, Handshake, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const protocolPhases = [
  {
    icon: Zap,
    name: "Stabilize + Structure",
    description: "Establishing a foundation amidst chaos.",
  },
  {
    icon: Search,
    name: "Listen for the Core Frame",
    description: "Identifying the underlying perspectives and beliefs.",
  },
  {
    icon: MessageSquare,
    name: "Validate Emotion / Reframe Belief", // Updated this phase name slightly for clarity
    description: "Acknowledging emotions, constructively reframing beliefs.",
  },
  {
    icon: Handshake, // Changed from MessageSquare as per original prompt for Phase 3, keeping Handshake for Pivot
    name: "Pivot to Pure Support", // Matched wording from PRD
    description: "At emotional lows, offer grounding and validation, cease strategic input.",
  },
  {
    icon: Users,
    name: "Follow User's Lead to Self-Discovery", // Matched wording from PRD
    description: "Shift from advisor to facilitator, follow user's lead.",
  },
  {
    icon: Sparkles,
    name: "Synthesize & Empower",
    description: "Integrating learnings and fostering confident action.",
  },
];

export function AboutProtocolSection() {
  return (
    <AnimatedSection
      id="how-it-works-section" 
      className="py-16 md:py-24"
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="how-it-works-title"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            How The Cognitive Edge Protocol™ Works
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Each phase is based on real conversations, backed by systems thinking, emotional intelligence, and strategic mapping — turning overwhelming complexity into actionable clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {protocolPhases.map((phase) => (
              <div key={phase.name} className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <phase.icon className="h-10 w-10 text-accent mb-3" />
                <h3 className="font-headline text-xl font-semibold text-primary mb-1">{phase.name}</h3>
                <p className="text-sm text-foreground/70">{phase.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x550.png"
              alt="Visual flowchart or icons representing the 6 phases of the Cognitive Edge Protocol™"
              width={500}
              height={550}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="process flowchart"
            />
          </div>
        </div>
        <div className="text-center">
          {/* Link to actual PDF or a page with more details */}
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
            <Link href="#"> 
              View Full Case Study (PDF)
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
