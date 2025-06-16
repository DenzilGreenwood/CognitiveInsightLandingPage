
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <p className="text-sm">
          &copy; {currentYear} James Greenwood. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          The Cognitive Edge Protocol&trade; is a trademark of James Greenwood.
        </p>
        <nav className="mt-4 text-sm" aria-label="Footer navigation">
          <Link href="#" className="hover:text-primary transition-colors px-2">
            Privacy Policy
          </Link>
          <span className="text-foreground/50">|</span>
          <Link href="#" className="hover:text-primary transition-colors px-2">
            Terms of Service
          </Link>
          <span className="text-foreground/50">|</span>
          <Link href="#" className="hover:text-primary transition-colors px-2">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
