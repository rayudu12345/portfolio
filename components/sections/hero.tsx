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
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-grid opacity-20 sm:opacity-30" />
      <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary/15 blur-[100px] sm:blur-[140px] animate-pulse" />
      <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent/15 blur-[100px] sm:blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="glass border-primary/40 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm text-primary shadow-lg"
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
              className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary"
            >
              {profile.role}
            </motion.p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-none">
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
            className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
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
                className="glass px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-medium hover:bg-primary/10 transition-colors"
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
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            <Button asChild size="lg" className="group shadow-lg shadow-primary/20 text-sm sm:text-base">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass text-sm sm:text-base">
              <a href={profile.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-sm sm:text-base">
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
            className="mt-4 sm:mt-8 grid w-full grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4"
          >
            {heroStats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? Briefcase;
              return (
                <div
                  key={stat.label}
                  className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
                >
                  <Icon className="mb-2 sm:mb-3 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs md:text-sm text-muted-foreground">
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
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
