'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Component,
  Palette,
  Server,
  Database,
  Wrench,
  ChartNoAxesCombined,
  BadgeCheck,
  ShieldCheck,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { skillCategories } from '@/lib/portfolio-data';

const icons: Record<string, React.ElementType> = {
  Code2,
  Component,
  Palette,
  Server,
  Database,
  Wrench,
  ChartNoAxesCombined,
  BadgeCheck,
  ShieldCheck,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Expertise"
          description="The tools and technologies I use to build production-grade web and mobile applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className="glass group h-full rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="rounded-lg border border-border/60 bg-secondary/40 px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/10"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
