'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Props = { children: React.ReactNode };

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      themes={["light", "dark", "forest"]}
      value={{ light: 'light', dark: 'dark', forest: 'forest' }}
    >
      {children}
    </NextThemesProvider>
  );
}
