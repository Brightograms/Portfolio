import Image from "next/image";
import { about, profile } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01. About" title="A bit about me">
      <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-16">
        {/* Monogram card */}
        <div className="mx-auto w-full max-w-[280px]">
          <div className="group relative">
            <div className="absolute -inset-2 rounded-xl border border-accent transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/10 to-transparent">
              <Image
                src={profile.Dp}
                alt="Profile picture of Bright Kalu"
                width={280}
                height={280}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <p className="mt-6 text-center font-mono text-sm text-foreground/50">
            {profile.location}
          </p>
        </div>

        {/* Bio */}
        <div>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mb-5 leading-relaxed text-foreground/70 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-foreground/10 bg-foreground/5 p-4 text-center transition-colors hover:border-accent/50"
              >
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
