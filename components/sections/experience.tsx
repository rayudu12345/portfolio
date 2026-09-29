'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { experience } from '@/lib/portfolio-data';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          description="Over six years of building and leading frontend development across diverse domains."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {experience.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 0.15}>
              <div
                className={`relative flex gap-6 pb-12 sm:gap-0 ${
                  idx % 2 === 0
                    ? 'sm:flex-row-reverse sm:text-right'
                    : 'sm:flex-row'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 z-10 -translate-x-1/2 sm:left-1/2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 18, stiffness: 260 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg glow-primary"
                  >
                    <Briefcase className="h-4 w-4 text-white" />
                  </motion.span>
                  {exp.current && (
                    <span className="absolute -inset-1 rounded-full border-2 border-primary/40 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`ml-12 flex-1 sm:ml-0 sm:w-1/2 ${
                    idx % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="glass rounded-2xl p-6"
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        idx % 2 === 0 ? 'sm:justify-end' : ''
                      }`}
                    >
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-bold">{exp.company}</h3>
                    <p className="mt-1 font-medium text-primary">
                      {exp.role}
                    </p>
                    <div
                      className={`mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground ${
                        idx % 2 === 0 ? 'sm:justify-end' : ''
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        India
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
