'use client';

import { Code2, Phone, Mail, Linkedin, Github, ArrowUp, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { profile, heroTech, heroStats } from '@/lib/portfolio-data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand — consistent with hero */}
          <div className="md:col-span-5 text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 font-bold text-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20">
                <Code2 className="h-5 w-5" />
              </span>
              <span>
                Changalrayudu<span className="text-gradient">.D</span>
              </span>
            </a>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-primary">
              {profile.role}
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>

            {/* Tech tags — same as hero */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {heroTech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="glass px-2.5 py-0.5 text-xs font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Experience highlight + contact */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Experience
            </h3>

            <div className="glass liquid-glass-strong rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold tracking-tight">
                    {heroStats[0].value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {heroStats[0].label}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Specializing in React.js, Next.js, React Native & TypeScript —
                building enterprise web and mobile applications.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg glass border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg glass border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg glass border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg glass border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Changalrayudu D. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
