'use client';

import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className }: Props) {
  return (
    <Reveal className={cn('mb-10 sm:mb-12 text-center', className)}>
      <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground px-2">
          {description}
        </p>
      )}
    </Reveal>
  );
}
