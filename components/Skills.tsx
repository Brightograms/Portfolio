"use client";

import { useRef, useState } from "react";
import { skillGroups } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (i: number) =>
    setIndex(((i % skillGroups.length) + skillGroups.length) % skillGroups.length);

  // Swipe handling
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

  return (
    <Section id="skills" eyebrow="03. Skills" title="My technical skills">
      <div className="relative">
        {/* Coverflow stage (touch-swipeable) */}
        <div
          className="relative h-[340px] [perspective:1200px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {skillGroups.map((group, i) => {
            let offset = i - index;
            const n = skillGroups.length;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;
            const abs = Math.abs(offset);
            if (abs > 1) return null; // only show neighbors
            return (
              <button
                key={group.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${group.title}`}
                className="absolute inset-0 m-auto h-fit w-full max-w-md cursor-pointer transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${offset * 60}%) translateZ(${-abs * 140}px) rotateY(${-offset * 35}deg) scale(${1 - abs * 0.12})`,
                  zIndex: 10 - abs,
                  opacity: 1 - abs * 0.45,
                  pointerEvents: abs > 1 ? "none" : "auto",
                }}
              >
                <article className="rounded-xl border border-foreground/10 bg-background p-6 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] sm:p-8">
                  <div className="mb-6 flex items-baseline justify-between">
                    <h3 className="text-xl font-bold sm:text-2xl">
                      <span className="mr-3 font-mono text-sm text-accent">
                        0{i + 1}
                      </span>
                      {group.title}
                    </h3>
                    <span className="font-mono text-sm text-foreground/40">
                      {group.skills.length} skills
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 rounded-lg border border-foreground/10 px-4 py-3 text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </button>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous skill group"
          className="absolute -left-2 top-[170px] -translate-y-1/2 rounded-full border border-foreground/10 bg-background/80 p-2.5 text-foreground/60 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent sm:-left-4 sm:p-3"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next skill group"
          className="absolute -right-2 top-[170px] -translate-y-1/2 rounded-full border border-foreground/10 bg-background/80 p-2.5 text-foreground/60 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent sm:-right-4 sm:p-3"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {skillGroups.map((group, i) => (
            <button
              key={group.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to skill group ${i + 1}: ${group.title}`}
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
