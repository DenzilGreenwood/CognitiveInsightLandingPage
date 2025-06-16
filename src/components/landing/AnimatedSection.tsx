
"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  delay?: string; // e.g., "delay-200"
}

export function AnimatedSection({
  children,
  className,
  as: Tag = "section",
  delay,
  ...props
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Tag
      ref={sectionRef}
      className={cn(
        "opacity-0 transform transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "translate-y-10",
        delay,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
