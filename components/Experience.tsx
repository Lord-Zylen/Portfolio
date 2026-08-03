import Section from "@/components/Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="Where I've worked">
      <ol className="relative space-y-10 border-l border-white/10 pl-8">
        {experience.map((job) => (
          <li key={job.role + job.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-background"
            />
            <p className="font-mono text-sm text-zinc-500">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-100">
              {job.role}
              <span className="text-zinc-500"> · </span>
              <span className="text-emerald-400">{job.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {job.summary}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-500"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
