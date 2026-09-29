'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  LayoutDashboard,
  ArrowRightLeft,
  Smartphone,
  ArrowRight,
  Download,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedText } from '@/components/animated-text';
import { profile, heroStats, heroTech } from '@/lib/portfolio-data';

const statIcons: Record<string, React.ElementType> = {
  Briefcase,
  LayoutDashboard,
  ArrowRightLeft,
  Smartphone,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="flex flex-col items-start gap-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="glass border-primary/30 px-4 py-1.5 text-sm text-primary"
            >
              <span className="mr-2 flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Name */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Frontend Developer
            </motion.p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <AnimatedText text="CHANGALRAYUDU" delay={0.15} />
              <br />
              <span className="text-gradient">
                <AnimatedText text="D" delay={0.6} />
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
          >
            &ldquo;{profile.tagline}&rdquo;
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap gap-2"
          >
            {heroTech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="glass px-3 py-1.5 text-sm font-medium"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-6 grid w-full grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {heroStats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? Briefcase;
              return (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 sm:p-5 transition-transform hover:scale-[1.03]"
                >
                  <Icon className="mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
