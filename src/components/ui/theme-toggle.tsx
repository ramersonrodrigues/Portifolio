'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const THEMES = ['light', 'dark', 'forest'] as const;

type ThemeName = typeof THEMES[number];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = (theme ?? resolvedTheme ?? 'light') as ThemeName;
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];

  const cycle = () => setTheme(next);

  const icon = current === 'light' ? '🌙' : current === 'dark' ? '🌲' : '☀️';

  return (
    <button
      onClick={cycle}
      className="px-3 py-2 rounded bg-[var(--surface)] text-[var(--foreground)] hover:opacity-90 transition"
      title={`Trocar para ${next}`}
      aria-label="Alternar tema"
    >
      <span className="mr-2">{icon}</span>
      {current}
    </button>
  );
}
