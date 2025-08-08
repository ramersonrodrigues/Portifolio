import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-0px)] bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Temas com Tailwind + next-themes</h1>
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto p-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg p-4 bg-[var(--surface)] border border-black/10 dark:border-white/10">
          <h2 className="font-semibold mb-2">Cores do tema</h2>
          <div className="flex gap-2">
            <span className="inline-block w-6 h-6 rounded bg-[var(--background)] border" title="background" />
            <span className="inline-block w-6 h-6 rounded bg-[var(--surface)] border" title="surface" />
            <span className="inline-block w-6 h-6 rounded bg-[var(--primary)]" title="primary" />
            <span className="inline-block w-6 h-6 rounded bg-[var(--secondary)]" title="secondary" />
            <span className="inline-block w-6 h-6 rounded bg-[var(--accent)]" title="accent" />
          </div>
        </div>

        <div className="rounded-lg p-4 bg-[var(--surface)] border border-black/10 dark:border-white/10">
          <h2 className="font-semibold mb-2">Botões</h2>
          <div className="flex gap-3">
            <button className="px-3 py-2 rounded bg-[var(--primary)] text-white">Primário</button>
            <button className="px-3 py-2 rounded bg-[var(--secondary)] text-black/90">Secundário</button>
            <button className="px-3 py-2 rounded bg-[var(--accent)] text-white">Acento</button>
          </div>
        </div>

        <div className="rounded-lg p-4 bg-[var(--surface)] border border-black/10 dark:border-white/10">
          <h2 className="font-semibold mb-2">Texto </h2>
          <p className="text-[var(--foreground)]/80">Este texto muda conforme o tema selecionado (light, dark, forest).</p>
        </div>
      </div>
    </div>
  );
}
