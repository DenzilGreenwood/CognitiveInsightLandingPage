
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Lightbulb, Brain, TrendingUp, Handshake } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const gains = [
  {
    icon: Lightbulb,
    title: "Clarity from Complexity",
    description: "Transform overwhelm into clear, actionable insights.",
  },
  {
    icon: Target,
    title: "Identity-Aligned Decisions",
    description: "Make choices rooted in your core values and strengths.",
  },
  {
    icon: Brain,
    title: "Strategic Self-Awareness",
    description: "Understand your cognitive patterns and leverage them.",
  },
  {
    icon: Zap,
    title: "Emotional Insight as Data",
    description: "Utilize emotions as valuable information for better judgment.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term, High-Agency Thinking",
    description: "Develop a proactive, future-focused mindset.",
  },
  {
    icon: Handshake,
    title: "Enhanced Team Cohesion (For Teams)",
    description: "Foster greater understanding and collaboration within teams."
  }
];

export function WhatClientsGainSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-background" aria-labelledby="what-clients-gain-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 id="what-clients-gain-title" className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
            🧠 What Clients Gain
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Experience profound shifts in perspective and capability through the Cognitive Edge Protocol™.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gains.map((gain) => (
            <Card key={gain.title} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-card p-6">
              <CardHeader className="items-center pb-4">
                <gain.icon className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-headline text-xl text-primary">{gain.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">{gain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
