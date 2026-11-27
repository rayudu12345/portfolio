'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Smartphone,
  Users,
  Plug,
  Gauge,
  Blocks,
  ShieldCheck,
  Handshake,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { leadership } from '@/lib/portfolio-data';

const icons: Record<string, React.ElementType> = {
  Layers,
  Smartphone,
  Users,
  Plug,
  Gauge,
  Blocks,
  ShieldCheck,
  Handshake,
};

export function Leadership() {
  return (
    <section id="leadership" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute left-1/4 top-1/3 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-primary/8 blur-[80px] sm:blur-[120px]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Leadership & Expertise"
          title="What I Bring"
          description="Beyond writing code, I bring architectural thinking, team leadership and a quality-first mindset to every project."
        />

        <div className="grid w-full gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((item, idx) => {
            const Icon = icons[item.icon] ?? Layers;
            return (
              <Reveal key={item.title} delay={idx * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className="glass group h-full w-full rounded-2xl p-5 sm:p-6 transition-shadow hover:shadow-xl hover:shadow-accent/10"
                >
                  <span className="mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="mb-2 text-base font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
