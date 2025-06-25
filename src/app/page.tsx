
import { FullScreenHeroSection } from "@/components/landing/FullScreenHeroSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { WorkWithMeSection } from "@/components/landing/WorkWithMeSection";
import { WhatYouReceiveSection } from "@/components/landing/WhatYouReceiveSection";
import { WhatClientsGainSection } from "@/components/landing/WhatClientsGainSection";
import { ClientJourneySection } from "@/components/landing/ClientJourneySection";
import { LeadMagnetSection } from "@/components/landing/LeadMagnetSection";
// import { TestimonialsSection } from "@/components/landing/TestimonialsSection";


export default function CognitiveEdgeLandingPage() {
  return (
    <>
      <FullScreenHeroSection />
      <HeroSection /> {/* This section will have id="start" */}
      <WorkWithMeSection /> {/* id="services" is inside this component */}
      <WhatYouReceiveSection />
      <WhatClientsGainSection />
      <ClientJourneySection />
      <LeadMagnetSection />
      {/* <TestimonialsSection /> */}
      {/* AboutProtocolSection and CaseStudySection moved to /approach page */}
    </>
  );
}
