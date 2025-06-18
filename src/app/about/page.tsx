
import { AboutSection } from "@/components/about/AboutSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Denzil Greenwood | My Story & Consulting Ethos | Cognitive Insight AI',
  description: 'Learn about Denzil Greenwood, the Cognitive Edge Protocol™, and the ethos behind this clarity-focused consulting practice.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <AboutSection />
    </div>
  );
}
