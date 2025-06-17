
"use client";

import { AnimatedSection } from "@/components/landing/AnimatedSection";

export function StoryTeaserSection() {
  return (
    <AnimatedSection id="story-teaser" aria-labelledby="story-teaser-title">
      <div className="max-w-3xl mx-auto">
        <h2 id="story-teaser-title" className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
          The Journey to Cognitive Edge
        </h2>
        <div className="space-y-4 text-lg text-foreground/80">
          <p>
            It began with a period of intense professional and personal challenge. A career that once felt aligned, now seemed disconnected from a deeper sense of purpose. This wasn't just about a job; it was about identity, about the core of who I was and what I was meant to contribute. The path forward felt shrouded in uncertainty, a familiar landscape suddenly turned foreign.
          </p>
          <p>
            This crisis, however, became a catalyst. It forced a retreat inward, a deep dive into the patterns of thought, the emotional undercurrents, and the foundational beliefs that shaped my reality. It was a journey of dismantling and rebuilding, of listening intently to the subtle signals often drowned out by the noise of daily life. What emerged was not just a coping mechanism, but a structured approach to navigating complexity – the Cognitive Edge Protocol™.
          </p>
          <p>
            This protocol became a way to systematically uncover core cognitive strengths, those innate ways of thinking and processing information that define our unique edge. It was about recognizing the power of 'Legacy Framing' – understanding the long-term impact of our actions; 'Pattern Recognition' – seeing the connections that others might miss; and 'Reflective Depth' – the ability to derive profound insights from experience. This journey transformed overwhelm into clarity, and a crisis into the seed of a new professional path, one rooted in authenticity and actionable insight.
          </p>
          {/* This is approximately half the story, to be expanded or refined as needed */}
        </div>
      </div>
    </AnimatedSection>
  );
}
