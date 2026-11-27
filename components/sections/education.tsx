'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { education } from '@/lib/portfolio-data';

export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Education & Background"
          title="Qualifications"
        />

        <div className="grid w-full gap-5 sm:gap-6">
          {education.map((edu, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="glass w-full rounded-2xl p-5 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold">{edu.degree}</h3>
                    <p className="mt-1 text-sm sm:text-base font-medium text-primary">
                      {edu.institution}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.period}
                    </div>
                    <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
