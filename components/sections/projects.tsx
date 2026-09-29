'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  Monitor,
  Smartphone,
  ArrowRight,
  X,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { projects, type Project } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export function Projects() {
  const [selected, setSelected] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          description="A selection of production applications I've built and led across web and mobile platforms."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08}>
              <ProjectCard
                project={project}
                onViewDetails={() => setSelected(project)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: () => void;
}) {
  const PlatformIcon = project.platform === 'Web' ? Monitor : Smartphone;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="glass group flex h-full flex-col rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
            <PlatformIcon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold leading-tight">{project.name}</h3>
            <p className="text-xs text-muted-foreground">{project.domain}</p>
          </div>
        </div>
        <Badge variant="outline" className="shrink-0">
          {project.platform}
        </Badge>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      {/* Tech badges */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="mb-5 grid grid-cols-3 gap-3 border-t border-border/50 pt-4 text-xs">
        <div>
          <p className="text-muted-foreground">Role</p>
          <p className="mt-0.5 font-medium">{project.role}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Team</p>
          <p className="mt-0.5 font-medium">{project.team} members</p>
        </div>
        <div>
          <p className="text-muted-foreground">Duration</p>
          <p className="mt-0.5 font-medium">{project.duration}</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <Button
          variant="outline"
          className="w-full group/btn"
          onClick={onViewDetails}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const PlatformIcon = project.platform === 'Web' ? Monitor : Smartphone;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 flex items-start gap-4 pr-12">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
            <PlatformIcon className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.domain} &middot; {project.platform}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Details grid */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <DetailItem
            icon={<Users className="h-4 w-4" />}
            label="Team Size"
            value={`${project.team} members`}
          />
          <DetailItem
            icon={<Calendar className="h-4 w-4" />}
            label="Duration"
            value={project.duration}
          />
          <DetailItem
            icon={<PlatformIcon className="h-4 w-4" />}
            label="Role"
            value={project.role}
          />
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key contribution */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Key Contribution
          </h4>
          <p className="text-sm leading-relaxed">{project.keyContribution}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-secondary/40 p-4">
      <div className="mb-1.5 flex items-center gap-2 text-primary">
        {icon}
      </div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm font-medium">{value}</p>
    </div>
  );
}
