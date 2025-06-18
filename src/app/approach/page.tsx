
import { ApproachSection } from "@/components/approach/ApproachSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Approach | Cognitive Edge Protocol & Case Studies | Cognitive Insight AI',
  description: 'Explore the 6-phase Cognitive Edge Protocol™ and see how it delivers clarity through real-world case studies and strategic systems mapping.',
};

export default function ApproachPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <ApproachSection />
    </div>
  );
}
