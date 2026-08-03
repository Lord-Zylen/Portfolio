import Section from "@/components/Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Skills & technologies">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
          >
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-emerald-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
