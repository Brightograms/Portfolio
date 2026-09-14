"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/portfolio";
import Section from "./Section";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const AUTOPLAY_MS = 4500;

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Swipe handling (mobile — arrows are hidden there)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return; // ignore small movements
    if (delta < 0) go(index + 1); // swiped left → next
    else go(index - 1); // swiped right → previous
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % projects.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
  }, [paused]);

  const go = (i: number) =>
    setIndex(((i % projects.length) + projects.length) % projects.length);

  return (
    <Section id="projects" eyebrow="02. Projects" title="Things I've built">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={project.title} className="w-full shrink-0 px-1">
                <article className="group mx-auto max-w-4xl overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_60px_-12px_rgba(52,211,153,0.3)]">
                  {/* Image banner */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay so links stay readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    {/* Floating index + links */}
                    <span className="absolute left-6 top-6 rounded-full border border-foreground/15 bg-background/70 px-3 py-1 font-mono text-xs text-accent backdrop-blur-sm">
                      0{i + 1}
                    </span>
                    <div className="absolute right-6 top-6 flex items-center gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="rounded-full border border-foreground/15 bg-background/70 p-2.5 text-foreground/70 backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        <GitHubIcon />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live site`}
                          className="rounded-full border border-foreground/15 bg-background/70 p-2.5 text-foreground/70 backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent"
                        >
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 sm:p-10">
                    <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl leading-relaxed text-foreground/60">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-foreground/10 px-3 py-1 font-mono text-xs text-foreground/60"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-foreground/10 bg-background/80 p-3 text-foreground/60 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent sm:-left-4 sm:flex"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next project"
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-foreground/10 bg-background/80 p-3 text-foreground/60 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent sm:-right-4 sm:flex"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to project ${i + 1}: ${project.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-accent"
                  : "w-2 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
