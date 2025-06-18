
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail, Briefcase, Users, Brain, UserCircle, BookOpen } from "lucide-react"; // Added relevant icons

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" }, // Scrolls to services section on home
  { href: "/approach", label: "Approach" }, // New page for Protocol + Case Study
  { href: "/about", label: "About" }, // Formerly Ethos
];

export function Header() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === "/";
    const targetId = sectionId.startsWith("/#") ? sectionId.substring(2) : sectionId;
    const targetUrl = sectionId.startsWith("/") && !sectionId.startsWith("/#") ? sectionId : `/#${targetId}`;


    if (isHomePage && sectionId.startsWith("/#")) {
      const sectionElement = document.getElementById(targetId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = targetUrl;
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center"> {/* Increased height for better spacing */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold sm:inline-block font-headline text-primary text-lg">
            CognitiveInsight.ai
          </span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => link.href.includes("#") && handleScrollToSection(e, link.href)}
              className="transition-colors hover:text-primary text-foreground/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="mailto:denzil.james.greenwood@outlook.com?subject=Discovery%20Call%20Request"> 
              <Mail className="mr-2 h-4 w-4" /> Book Discovery Call
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold font-headline text-primary text-lg">
                      CognitiveInsight.ai
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-1 p-4 flex-grow">
                  {navLinks.map((link) => {
                    let IconComponent;
                    switch(link.label) {
                      case "Home": IconComponent = UserCircle; break;
                      case "Services": IconComponent = Briefcase; break;
                      case "Approach": IconComponent = Brain; break;
                      case "About": IconComponent = BookOpen; break;
                      default: IconComponent = Users; 
                    }
                    return (
                      <Button
                        key={link.label}
                        variant="ghost"
                        className="w-full justify-start text-md font-medium text-foreground/80 hover:text-primary hover:bg-muted"
                        asChild
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.href.includes("#")) handleScrollToSection(e, link.href);
                            // Find a way to close sheet, e.g. by controlling 'open' state via context or prop
                          }}
                        >
                          <IconComponent className="mr-3 h-5 w-5 text-muted-foreground" />
                          {link.label}
                        </Link>
                      </Button>
                    );
                  })}
                </nav>
                <div className="p-4 border-t border-border mt-auto">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="mailto:denzil.james.greenwood@outlook.com?subject=Discovery%20Call%20Request">
                       <Mail className="mr-2 h-4 w-4" /> Book Discovery Call
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
