import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-12">
          {eyebrow && (
            <p className="mb-3 font-mono text-sm text-emerald-400">
              {"// "}
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
