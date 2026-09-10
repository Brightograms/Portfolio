import { experience, profile } from "@/data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04. Experience" title="Where I've been">
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div
          className="absolute bottom-2 left-[7px] top-2 w-px bg-foreground/15"
          aria-hidden
        />

        <ol className="space-y-12">
          {experience.map((job) => (
            <li key={`${job.role}-${job.company}`} className="relative pl-10">
              {/* Timeline dot */}
              <span
                className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background"
                aria-hidden
              />

              <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-6 transition-colors hover:border-accent/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">
                    {job.role}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-foreground/50">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/65"
                    >
                      <span className="mt-2 h-1 w-3 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Resume CTA */}
        <div className="mt-12 pl-10">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            View full résumé
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
