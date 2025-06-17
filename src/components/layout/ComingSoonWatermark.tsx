// src/components/layout/ComingSoonWatermark.tsx
import type { FC } from 'react';

export const ComingSoonWatermark: FC = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true" 
    >
      <h1 className="font-headline text-8xl font-bold text-foreground/20 transform -rotate-12 opacity-75 md:text-9xl">
        Coming Soon!
      </h1>
    </div>
  );
};
