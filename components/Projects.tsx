import Section from "@/components/Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition-colors hover:border-emerald-400/30"
          >
            <div
              aria-hidden
              className={`h-40 bg-gradient-to-br ${project.accent}`}
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-emerald-400">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-4 font-mono text-sm">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors hover:text-emerald-400"
                  >
                    Live demo ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-emerald-400"
                >
                  Source ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
