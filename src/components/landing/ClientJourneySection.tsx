
"use client";

import { MapPin, MessageSquare, FileText, Users, Repeat, Award, Send, Search, Lightbulb } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const journeySteps = [
  {
    icon: Send,
    title: "Invitation & Discovery",
    description: "Begin with a discovery call or explore free resources to understand the potential fit.",
  },
  {
    icon: Search,
    title: "Diagnostic Phase",
    description: "Engage with the Cognitive Edge Protocol™ to uncover core patterns and insights.",
  },
  {
    icon: FileText,
    title: "Insight Report & Visuals",
    description: "Receive your personalized Insight Report™ and Clarity Map™ summarizing key findings.",
  },
  {
    icon: Lightbulb,
    title: "Co-Design Strategy",
    description: "Collaborate in strategy sessions to define actionable next steps based on your insights.",
  },
  {
    icon: Repeat,
    title: "Reflect & Empower",
    description: "Integrate learnings through follow-ups, ensuring sustainable change and empowerment.",
  },
  {
    icon: Award,
    title: "Long-Term Support",
    description: "Opt for ongoing strategic partnership for sustained growth and adaptive thinking.",
  },
];

export function ClientJourneySection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-card shadow-sm" aria-labelledby="client-journey-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 id="client-journey-title" className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
            📈 The Trusted Client Journey
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A structured and supportive path from complexity to clarity and confident action.
          </p>
        </div>
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center p-4 rounded-lg">
                <div className="relative mb-4">
                  {/* Desktop Circle connecting to line */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card z-10"></div>
                   {/* Mobile vertical connector (simplified) */}
                  {index < journeySteps.length -1 && <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border"></div>}

                  <div className="bg-primary/10 text-primary rounded-full p-4 inline-flex ring-4 ring-primary/20 mb-2 md:mb-0">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="font-headline text-lg font-semibold text-primary mb-1 mt-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
