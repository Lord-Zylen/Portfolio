import Section from "@/components/Section";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-zinc-400">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="grid grid-cols-3 gap-6 self-start">
          {profile.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center"
            >
              <dt className="order-2 mt-2 block text-xs text-zinc-500">
                {highlight.label}
              </dt>
              <dd className="order-1 font-mono text-3xl font-bold text-emerald-400">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
