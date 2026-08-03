import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-zinc-600 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-emerald-400">Next.js</span> +{" "}
          <span className="text-emerald-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
