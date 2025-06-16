
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutProtocolSection } from "@/components/landing/AboutProtocolSection";
import { CaseStudySection } from "@/components/landing/CaseStudySection";
import { YourEdgeProfileSection } from "@/components/landing/YourEdgeProfileSection";
import { GetInvolvedSection } from "@/components/landing/GetInvolvedSection";
import { Footer } from "@/components/landing/Footer";

export default function CognitiveEdgeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <HeroSection />
        <AboutProtocolSection />
        <CaseStudySection />
        <YourEdgeProfileSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
}
