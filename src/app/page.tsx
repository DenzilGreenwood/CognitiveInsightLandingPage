
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutProtocolSection } from "@/components/landing/AboutProtocolSection";
import { CaseStudySection } from "@/components/landing/CaseStudySection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"; // Added import
import { GetInvolvedSection } from "@/components/landing/GetInvolvedSection";
import { EthicalDisclosureSection } from "@/components/landing/EthicalDisclosureSection";
import { Footer } from "@/components/landing/Footer";

export default function CognitiveEdgeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <HeroSection />
        <AboutProtocolSection /> {/* This is "How It Works" */}
        <CaseStudySection /> {/* This is "The Story Behind It" */}
        <TestimonialsSection /> {/* Added Testimonials Section */}
        <GetInvolvedSection /> {/* This is "Volunteer Call to Action" */}
        <EthicalDisclosureSection />
      </main>
      <Footer />
    </div>
  );
}
