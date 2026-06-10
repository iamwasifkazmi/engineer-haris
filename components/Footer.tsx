import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--nav-border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-subtle">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
