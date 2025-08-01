
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/landing/Footer';
import { ComingSoonWatermark } from '@/components/layout/ComingSoonWatermark';

export const metadata: Metadata = {
  title: 'Cognitive Insight AI | Clarity in Complexity with Denzil Greenwood',
  description: 'I help mission-driven founders and leaders turn complexity into clarity using the Cognitive Edge Protocol™ for legacy-informed systems thinking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <ComingSoonWatermark />
      </body>
    </html>
  );
}

