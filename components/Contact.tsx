"use client";

import { useState } from "react";
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

const inputClasses =
  "w-full rounded-lg border border-foreground/15 bg-foreground/5 px-4 py-3 text-left text-foreground placeholder:text-foreground/35 outline-none transition-colors focus:border-accent";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-28 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent">05. Contact</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-foreground/60">
             Whether you have a question, or just want
            to say hi — my inbox is always open.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={300}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-xl space-y-5 text-left"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-xs text-foreground/50"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-xs text-foreground/50"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className={inputClasses}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block font-mono text-xs text-foreground/50"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Bright, I saw your portfolio and…"
                className={`${inputClasses} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-accent px-8 py-4 text-center font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-14 flex items-center justify-center gap-6">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/50 transition-all hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={500}>
          <p className="mt-16 font-mono text-xs leading-relaxed text-foreground/40">
            Designed &amp; built by {profile.name}
            <br />
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
