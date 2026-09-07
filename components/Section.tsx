import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-10">
      <Reveal>
        <div className="mb-6">
          {eyebrow && (
            <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <div className="mt-2 h-px w-16 bg-accent" />
        </div>
      </Reveal>
      <Reveal delay={100}>{children}</Reveal>
    </section>
  );
}
