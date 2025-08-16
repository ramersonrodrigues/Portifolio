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
    // espaçamento base
    'w-full pb-20',
    // cores por tema
    isLight
      ? 'bg-[#eae8ec] text-[#030712]'
      : 'text-white',
    className,
  );

  const container = 'w-full mx-auto max-w-[1280px] px-10';
  const titleCls = cn(
    'text-4xl md:text-6xl font-semibold text-center justify-center p-20',
  );

  return (
    <section id={id} className={wrapper}>
      <div className={container}>
        {title ? <h2 className={titleCls}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
