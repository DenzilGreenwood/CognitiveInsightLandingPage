
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail } from "lucide-react"; // Added Mail icon
import Image from "next/image";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#case-study", label: "Case Study" }, // Assuming case study section exists on home
  { href: "/ethos", label: "Ethos" },
];

export function Header() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === "/";
    const targetUrl = sectionId.startsWith("/") ? sectionId : `/#${sectionId.replace("#", "")}`;

    if (isHomePage && sectionId.startsWith("#")) {
      const section = document.getElementById(sectionId.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = targetUrl;
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Optional: Add a small logo here */}
          {/* <Image src="/logo.png" alt="CognitiveInsight.ai Logo" width={32} height={32} /> */}
          <span className="font-bold sm:inline-block font-headline text-primary">
            CognitiveInsight.ai
          </span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => link.href.includes("#") && handleScrollToSection(e, link.href)}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild size="sm">
            {/* Replace # with your Calendly or booking link */}
            <Link href="mailto:denzil.james.greenwood@outlook.com?subject=Discovery%20Call%20Request"> 
              <Mail className="mr-2 h-4 w-4" /> Book a Discovery Call
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-6 flex items-center space-x-2">
                  <span className="font-bold font-headline text-primary">
                    CognitiveInsight.ai
                  </span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        link.href.includes("#") && handleScrollToSection(e, link.href);
                        // Consider closing the sheet here if Sheet component allows
                      }}
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-6">
                  <Link href="mailto:denzil.james.greenwood@outlook.com?subject=Discovery%20Call%20Request">
                     <Mail className="mr-2 h-4 w-4" /> Book a Discovery Call
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
