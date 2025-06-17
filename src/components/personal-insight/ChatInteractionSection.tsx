
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Added import

// Placeholder for actual chat messages if we build a simple UI here
interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

export function ChatInteractionSection() {
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [currentPhase, setCurrentPhase] = useState(1); // Example: start with phase 1

  const handleStartChat = () => {
    setChatActive(true);
    // TODO: Initialize chat with Genkit flow, passing currentPhase
    // For now, add a welcome message.
    setMessages([{ sender: "ai", text: "Welcome! How can I help you complete the protocol?" }]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: ChatMessage = { sender: "user", text: userInput };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput("");

    // TODO: Send userInput and currentPhase to Genkit flow
    // const aiResponse = await callCognitiveProtocolFlow({ userInput, phase: currentPhase });
    // For now, simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "ai", text: `This is a simulated AI response for phase ${currentPhase} regarding: "${newUserMessage.text}"` }]);
    }, 1000);
  };


  return (
    <AnimatedSection id="chat-interaction" aria-labelledby="chat-interaction-title">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-3" />
          <CardTitle id="chat-interaction-title" className="font-headline text-2xl text-primary">
            Engage with the Protocol
          </CardTitle>
          <CardDescription>
            Interact with our AI guide to work through each phase of the Cognitive Edge Protocol.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          {!chatActive ? (
            <Button onClick={handleStartChat} size="lg" className="bg-accent hover:bg-accent/90">
              Begin Protocol Interaction
            </Button>
          ) : (
            <div className="w-full max-w-2xl p-4 border rounded-lg bg-background">
              <div className="h-96 overflow-y-auto mb-4 p-2 space-y-3 border rounded-md">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit">Send</Button>
              </form>
               {/* Placeholder for phase selection or progression */}
              <div className="mt-4 text-sm text-muted-foreground">
                Current Phase: {currentPhase} (Controls for phase progression will be added)
              </div>
            </div>
          )}
          <p className="mt-6 text-sm text-muted-foreground">
            The AI's tone and guidance will adapt based on the current phase of the protocol you are working through.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

// TODO: Define and import callCognitiveProtocolFlow from a server action that uses the Genkit flow.
// async function callCognitiveProtocolFlow(input: { userInput: string; phase: number }): Promise<string> {
//   // Placeholder. This would call the Genkit flow.
//   return `AI response for phase ${input.phase} to "${input.userInput}"`;
// }
