"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-emerald-400/60";

  return (
    <Section id="contact" eyebrow="contact" title="Let's work together">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-zinc-400">
          <p>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Based in Ghana, available
            for remote work.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <a
                href={`mailto:${profile.links.email}`}
                className="text-emerald-400 hover:text-emerald-300"
              >
                {profile.links.email}
              </a>
            </li>
            <li className="text-zinc-500">{profile.links.phone}</li>
            <li className="text-zinc-500">{profile.links.location}</li>
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400"
              >
                github.com/Lord-Zylen
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className={inputClasses}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={`${inputClasses} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300 sm:w-auto"
          >
            Send message
          </button>
          {status === "sent" && (
            <p className="font-mono text-sm text-emerald-400">
              Opening your email client...
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
