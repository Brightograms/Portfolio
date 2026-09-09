"use client";

import { useState } from "react";
import { skillGroups } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  const [index, setIndex] = useState(0);

  const go = (i: number) =>
    setIndex(((i % skillGroups.length) + skillGroups.length) % skillGroups.length);

  return (
    <Section id="skills" eyebrow="03. Skills" title="My technical skills">
      <div className="relative">
        {/* Coverflow stage */}
        <div className="relative h-[340px] [perspective:1200px]">
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
                <article className="rounded-xl border border-foreground/10 bg-background p-8 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                  <div className="mb-6 flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">
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
