import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Twitter / X", href: profile.twitter, Icon: TwitterIcon },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-5xl px-6 py-20">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">
            Hi, my name is
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground/70 sm:text-5xl">
            {profile.tagline}
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-xl leading-relaxed text-foreground/60">
            {profile.role} based in {profile.location}. I specialize in
            building modern web applications from pixel-perfect interfaces
            to scalable backend systems.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-foreground/20 px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-12 flex items-center gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/50 transition-colors hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
