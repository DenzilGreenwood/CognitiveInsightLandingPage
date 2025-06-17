
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/landing/AnimatedSection";

// Placeholder data for the report
const exampleReportData = {
  title: "Your Personalized Cognitive Edge Insights™",
  summary: "This report summarizes the key insights and strengths uncovered during your journey through the Cognitive Edge Protocol™. It's designed to provide clarity, purpose, and a foundation for actionable strategies.",
  keyStrengths: [
    "Legacy Framing™: A strong ability to consider long-term implications and build for the future.",
    "Pattern Recognition: Adept at identifying underlying connections and trends in complex situations.",
    "Reflective Depth: Capacity for profound introspection and learning from experiences.",
    "Clarity Architect™: Skilled in structuring ambiguous information and creating clear pathways.",
    "High-Agency Thinking: Proactive in reframing challenges and taking initiative.",
  ],
  nextSteps: "Consider how these identified strengths can be leveraged in your current challenges or future goals. What small, actionable step can you take today based on this newfound clarity?"
};

export function InsightReportSection() {
  const handleDownloadPdf = () => {
    // TODO: Implement actual PDF generation and download logic.
    // This would likely involve calling a server action that generates a PDF.
    alert("PDF download functionality is not yet implemented. This would generate and download your personalized report.");
    console.log("Simulating PDF Download with data:", exampleReportData);
  };

  return (
    <AnimatedSection id="insight-report" aria-labelledby="insight-report-title">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
          <CardTitle id="insight-report-title" className="font-headline text-2xl text-primary">
            Your Personal Insight Report™
          </CardTitle>
          <CardDescription>
            Review your synthesized insights and identified cognitive strengths from the Cognitive Edge Protocol™.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 border rounded-lg bg-background">
            <h3 className="font-headline text-xl text-primary mb-3 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-accent" /> {exampleReportData.title}
            </h3>
            <p className="text-foreground/80 mb-4">{exampleReportData.summary}</p>

            <h4 className="font-semibold text-primary mb-2">Key Cognitive Strengths Identified:</h4>
            <ul className="list-disc list-inside space-y-1 text-foreground/70 mb-4">
              {exampleReportData.keyStrengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>

            <h4 className="font-semibold text-primary mb-2">Next Steps & Reflection:</h4>
            <p className="text-foreground/70">{exampleReportData.nextSteps}</p>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            The content above is a sample. Your actual report will be personalized based on your interaction with the Cognitive Edge Protocol™.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleDownloadPdf} size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download PDF Report™
          </Button>
        </CardFooter>
      </Card>
    </AnimatedSection>
  );
}
