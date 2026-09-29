'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { profile } from '@/lib/portfolio-data';

export function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project or role in mind? I'm always open to discussing new opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col rounded-2xl p-8">
              <h3 className="mb-2 text-xl font-semibold">Get in Touch</h3>
              <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
                Feel free to reach out through any of the channels below. I
                typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactItem
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                  value={profile.linkedinHandle}
                  href={profile.linkedin}
                  external
                />
                <ContactItem
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                  value={profile.githubHandle}
                  href={profile.github}
                  external
                />
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Location"
                  value={profile.location}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass flex h-full flex-col rounded-2xl p-8"
            >
              <h3 className="mb-6 text-xl font-semibold">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="bg-secondary/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="bg-secondary/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell me about your project or role..."
                    rows={5}
                    className="bg-secondary/30 resize-none"
                  />
                </div>
              </div>

              {error && (
                <p className="mt-4 text-sm text-destructive">{error}</p>
              )}

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-green-500/15 px-4 py-3 text-sm text-green-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Your email client is opening with your message ready to send.
                </motion.div>
              )}

              <Button type="submit" size="lg" className="mt-6 w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center gap-4 rounded-xl border border-border/40 bg-secondary/20 p-4 transition-colors hover:border-primary/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}
