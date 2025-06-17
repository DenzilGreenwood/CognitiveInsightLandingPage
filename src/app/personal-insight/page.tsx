
import { StoryTeaserSection } from "@/components/personal-insight/StoryTeaserSection";
import { LeadCaptureSection } from "@/components/personal-insight/LeadCaptureSection";
import { ProtocolPhasesSection } from "@/components/personal-insight/ProtocolPhasesSection";
import { ChatInteractionSection } from "@/components/personal-insight/ChatInteractionSection";
import { InsightReportSection } from "@/components/personal-insight/InsightReportSection";
import { FeedbackSection } from "@/components/personal-insight/FeedbackSection";
import { Separator } from "@/components/ui/separator";

export default function PersonalInsightPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <StoryTeaserSection />
        <LeadCaptureSection />
        <Separator />
        <ProtocolPhasesSection />
        <ChatInteractionSection />
        <Separator />
        <InsightReportSection />
        <FeedbackSection />
      </main>
    </div>
  );
}
