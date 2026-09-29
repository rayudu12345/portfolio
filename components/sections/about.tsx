'use client';

import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { aboutText, domains, profile } from '@/lib/portfolio-data';

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title="Get to know me"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Bio */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="glass h-full rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <User className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold">Professional Summary</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {aboutText.map((para, i) => (
                  <p key={i} className="text-base sm:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick facts + domains */}
          <Reveal className="lg:col-span-2" delay={0.2}>
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="mb-6 text-lg font-semibold">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <span className="text-sm font-medium">{profile.name}</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="text-sm text-muted-foreground">Role</span>
                  <span className="text-sm font-medium">{profile.role}</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="text-sm text-muted-foreground">
                    Experience
                  </span>
                  <span className="text-sm font-medium">
                    {profile.yearsExperience} Years
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="text-sm text-muted-foreground">
                    Platforms
                  </span>
                  <span className="text-sm font-medium">
                    {profile.platforms}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Location
                  </span>
                  <span className="text-sm font-medium">{profile.location}</span>
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-lg font-semibold">Domains</h3>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain, i) => (
                  <motion.span
                    key={domain}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/60 px-3 py-1.5 text-xs font-medium"
                  >
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                    {domain}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
