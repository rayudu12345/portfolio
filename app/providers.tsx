'use client';

import * as React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { LiquidGlassFilter } from '@/components/liquid-glass-filter';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LiquidGlassFilter />
      {children}
    </ThemeProvider>
  );
}
