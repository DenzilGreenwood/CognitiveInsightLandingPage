
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Map, ListChecks, Users, Library, BarChart3 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import Image from "next/image";

const deliverables = [
  {
    icon: FileText,
    title: "Cognitive Edge Insight Report™",
    description: "A comprehensive PDF summary articulating your unique cognitive patterns, identified blockers, core strengths, and actionable next steps.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "report document"
  },
  {
    icon: Map,
    title: "Clarity Map™",
    description: "A visual representation of your (or your team's) current state, including core beliefs, emotional landscapes, identified blockers, and potential pathways forward.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "mind map"
  },
  {
    icon: ListChecks,
    title: "Legacy Lens Worksheet™",
    description: "A structured worksheet designed to help you frame decisions through a 10+ year vision, ensuring long-term alignment and impact.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "worksheet checklist"
  },
  {
    icon: Users,
    title: "Alignment Audit™ (For Teams)",
    description: "A detailed report for teams that tracks cognitive, emotional, and strategic drift, providing insights for improved cohesion and performance.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "team audit"
  },
  {
    icon: Library,
    title: "Pattern Library Access (Optional)",
    description: "Access to a library of reusable client insights, cognitive models, and strategic frameworks developed through the Cognitive Edge Protocol™.",
    image: "https://placehold.co/300x200.png",
    dataAiHint: "knowledge base"
  },
];

export function WhatYouReceiveSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-card shadow-sm" aria-labelledby="what-you-receive-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 id="what-you-receive-title" className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
            🛠️ What You Receive
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Tangible tools and frameworks designed to provide lasting clarity and strategic advantage.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {deliverables.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.title}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center">
                    <item.icon className="h-6 w-6 mr-3 text-accent" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-3 gap-4 items-center py-4">
                    <div className="md:col-span-1">
                       <Image 
                        src={item.image} 
                        alt={item.title} 
                        width={300} 
                        height={200} 
                        className="rounded-md shadow-md object-cover"
                        data-ai-hint={item.dataAiHint}
                        />
                    </div>
                    <p className="text-foreground/70 md:col-span-2">{item.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
}
