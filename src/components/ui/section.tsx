import React from 'react';

export type SectionProps = {
  children: React.ReactNode;
  title?: string;
  theme?: 'dark' | 'light';
  id?: string;
  className?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export default function Section({
  children,
  title,
  theme = 'light',
  id,
  className,
}: SectionProps) {
  const isLight = theme === 'light';

  const wrapper = cn(
    'relative overflow-hidden w-full pt-10 pb-24',
    isLight
      ? 'bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-900'
      : 'bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white',
    className,
  );

  const container = 'relative z-10 w-full mx-auto max-w-[1280px] px-6 sm:px-10';
  const titleCls = cn(
    'mx-auto mb-10 w-full text-center max-w-3xl',
    'text-4xl md:text-5xl font-semibold leading-tight tracking-tight',
    isLight
      ? 'bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 text-transparent bg-clip-text'
      : 'bg-gradient-to-r from-white to-slate-200 text-transparent bg-clip-text',
  );

  return (
    <section id={id} className={wrapper}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-6 top-8 h-48 w-48 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute -bottom-24 right-16 h-56 w-56 rounded-full bg-sky-500/30 blur-[90px]" />
      </div>
      <div className={container}>
        {title ? <h2 className={titleCls}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
