
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="mailto:denzil.james.greenwood@outlook.com"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="Email Denzil James Greenwood"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="#" // Replace with actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="Denzil James Greenwood on LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Denzil J. Greenwood. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          The Cognitive Edge Protocol&trade; is a proprietary framework created by Denzil J. Greenwood.
        </p>
        <nav className="mt-4 text-sm space-x-1 sm:space-x-2" aria-label="Footer navigation">
          <Link href="/about" className="hover:text-primary transition-colors px-1">
            About
          </Link>
          <span className="text-foreground/50">|</span>
          <Link href="#" className="hover:text-primary transition-colors px-1">
            Privacy Policy
          </Link>
          <span className="text-foreground/50">|</span>
          <Link href="#" className="hover:text-primary transition-colors px-1">
            Terms of Service
          </Link>
          <span className="text-foreground/50">|</span>
           <Link href="mailto:denzil.james.greenwood@outlook.com" className="hover:text-primary transition-colors px-1">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
