
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Briefcase, Zap, Map, CheckCircle, MessageCircle, DollarSign, CalendarDays } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";
import Image from "next/image"; // Added Image import

const services = [
  {
    icon: User,
    title: "1:1 Cognitive Clarity Session",
    description: "90-min intensive to get actionable clarity in your career/life using a visual map + strategic report. Ideal for professionals in transition or misalignment.",
    includes: [
      "90-min intensive session",
      "Visual Clarity Map™",
      "PDF Insight Report™",
      "1-week email follow-up",
    ],
    price: "$250 – $400",
    ctaText: "Book Clarity Session",
    ctaLink: "mailto:denzil.james.greenwood@outlook.com?subject=1:1 Cognitive Clarity Session Inquiry",
    imagePlaceholder: "https://placehold.co/400x250.png",
    dataAiHint: "individual coaching focused",
  },
  {
    icon: Users,
    title: "Team Insight Workshop",
    description: "2–3 hrs to align, reflect, and energize your team. Designed for teams facing drift, strategic change, or burnout, aiming to enhance alignment and collective efficacy.",
    includes: [
      "Pre-workshop Discovery Call",
      "2–3hr guided workshop",
      "Team Alignment Report™",
      "Optional leadership coaching",
    ],
    price: "$1,500 – $3,000",
    ctaText: "Request Team Workshop",
    ctaLink: "mailto:denzil.james.greenwood@outlook.com?subject=Team Insight Workshop Inquiry",
    imagePlaceholder: "https://placehold.co/400x250.png",
    dataAiHint: "team workshop collaboration",
  },
  {
    icon: Briefcase,
    title: "Ongoing Strategic Partnership",
    description: "Sustained strategic thinking support for founders, leaders, and mission-driven organizations.",
    includes: [
      "Biweekly or monthly calls",
      "Strategic mapping + models",
      "Long-term legacy thinking",
      "Decision-making support",
    ],
    price: "$1,000 – $2,500/month",
    ctaText: "Discuss Partnership",
    ctaLink: "mailto:denzil.james.greenwood@outlook.com?subject=Strategic Partnership Inquiry",
    imagePlaceholder: "https://placehold.co/400x250.png",
    dataAiHint: "strategic partnership growth",
  },
];

export function WorkWithMeSection() {
  return (
    <AnimatedSection id="services" className="py-16 md:py-24 bg-background" aria-labelledby="work-with-me-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="work-with-me-title" className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
            🧩 How I Can Help You
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Leverage the Cognitive Edge Protocol™ through tailored engagements designed to unlock clarity and drive impactful decisions for yourself, your team, or your organization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <Image 
                src={service.imagePlaceholder} 
                alt={service.title} 
                width={400} 
                height={250} // Adjusted height
                className="w-full h-48 object-cover" // Ensure consistent image height
                data-ai-hint={service.dataAiHint}
              />
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <service.icon className="h-8 w-8 text-accent mr-3" />
                  <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-foreground/70 min-h-[60px]">{service.description}</CardDescription> 
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2 text-foreground/90">Includes:</h4>
                <ul className="space-y-1.5 text-sm text-foreground/70">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-6 bg-muted/50 mt-auto">
                <div className="flex items-center text-lg font-semibold text-primary mb-4">
                    <DollarSign className="h-5 w-5 mr-1" /> Price: {service.price}
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={service.ctaLink}>
                    <CalendarDays className="mr-2 h-4 w-4" /> {service.ctaText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Note for future: Consider adding a section/sidebar for "Trusted by" logos or short client feedback snippets here */}
      </div>
    </AnimatedSection>
  );
}
