
import { FullScreenHeroSection } from "@/components/landing/FullScreenHeroSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutProtocolSection } from "@/components/landing/AboutProtocolSection";
import { CaseStudySection } from "@/components/landing/CaseStudySection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { WorkWithMeSection } from "@/components/landing/WorkWithMeSection";
import { WhatYouReceiveSection } from "@/components/landing/WhatYouReceiveSection";
import { WhatClientsGainSection } from "@/components/landing/WhatClientsGainSection";
import { ClientJourneySection } from "@/components/landing/ClientJourneySection";


export default function CognitiveEdgeLandingPage() {
  return (
    <>
      <FullScreenHeroSection />
      <HeroSection /> {/* This section will have id="start" */}
      <WorkWithMeSection /> {/* id="services" is inside this component */}
      <WhatYouReceiveSection />
      <WhatClientsGainSection />
      <ClientJourneySection />
      <AboutProtocolSection /> {/* id="how-it-works-section" is inside, used for "Explore the Protocol" */}
      <CaseStudySection /> {/* id="case-study" is inside, used for "Case Study" nav */}
      <TestimonialsSection />
    </>
  );
}
