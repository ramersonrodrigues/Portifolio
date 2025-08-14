"use client";

import { useEffect, useRef, useState } from "react";

type SkillItem = { label: string; img: string };
const SKILLS: SkillItem[] = [
  { label: "JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { label: "TypeScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { label: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { label: "Next.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { label: "Node.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { label: "Tailwind CSS", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" },
  { label: "Banco de Dados", img: "https://img.icons8.com/ios-filled/100/database.png" },
  { label: "PostgreSQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { label: "MySQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { label: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { label: "Docker", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { label: "Git", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { label: "CI/CD", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg" },
  { label: "Arquitetura de Software", img: "https://img.icons8.com/ios-filled/100/flow-chart.png" },
  { label: "Testes", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" },
  { label: "REST", img: "https://img.icons8.com/ios-filled/100/api-settings.png" },
  { label: "GraphQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" },
  { label: "DevOps", img: "https://img.icons8.com/ios-filled/100/infinity.png" },
];

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const pausedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  // Auto-scroll contínuo com loop
  useEffect(() => {
    setMounted(true);
    const el = trackRef.current;
    if (!el) return;

    // Duplicar conteúdo para looping suave
    // (renderizamos 2 vezes via JSX; aqui garantimos posição inicial)
    const init = () => {
      // Posicionar no início
      el.scrollLeft = 0;
    };
    init();

    const speed = 0.6; // px por frame
    let rafId: number;

    const step = () => {
      if (!pausedRef.current && !isDownRef.current) {
        el.scrollLeft += speed;
        // Loop: quando chegar perto do fim da primeira cópia, volta ao começo da primeira
        const maxScroll = el.scrollWidth / 2; // metade (porque duplicado)
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = el.scrollLeft - maxScroll;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Handlers de drag (mouse/touch)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDownRef.current = true;
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
      el.classList.add("cursor-grabbing");
      pausedRef.current = true;
    };
    const onMouseLeave = () => {
      isDownRef.current = false;
      el.classList.remove("cursor-grabbing");
      pausedRef.current = false;
    };
    const onMouseUp = () => {
      isDownRef.current = false;
      el.classList.remove("cursor-grabbing");
      pausedRef.current = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDownRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1; // velocidade de arrasto
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    const onTouchStart = (e: TouchEvent) => {
      isDownRef.current = true;
      startXRef.current = e.touches[0].pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
      pausedRef.current = true;
    };
    const onTouchEnd = () => {
      isDownRef.current = false;
      pausedRef.current = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDownRef.current) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1;
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    el.addEventListener("mousedown", onMouseDown as any);
    el.addEventListener("mouseleave", onMouseLeave as any);
    el.addEventListener("mouseup", onMouseUp as any);
    el.addEventListener("mousemove", onMouseMove as any);
    el.addEventListener("touchstart", onTouchStart as any, { passive: true });
    el.addEventListener("touchend", onTouchEnd as any);
    el.addEventListener("touchmove", onTouchMove as any, { passive: true });

    return () => {
      el.removeEventListener("mousedown", onMouseDown as any);
      el.removeEventListener("mouseleave", onMouseLeave as any);
      el.removeEventListener("mouseup", onMouseUp as any);
      el.removeEventListener("mousemove", onMouseMove as any);
      el.removeEventListener("touchstart", onTouchStart as any);
      el.removeEventListener("touchend", onTouchEnd as any);
      el.removeEventListener("touchmove", onTouchMove as any);
    };
  }, [mounted]);

  const onMouseEnter = () => {
    pausedRef.current = true;
  };
  const onMouseLeave = () => {
    pausedRef.current = false;
  };

  const Card = ({ item }: { item: SkillItem }) => (
    <div className="shrink-0 w-60 md:w-72 h-40 md:h-48 rounded-xl bg-white text-gray-800 shadow-sm border border-gray-200 flex items-center gap-4 md:gap-5 px-4 md:px-6 mx-2 md:mx-3 select-none">
      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gray-50 border border-gray-200">
        <img src={item.img} alt={item.label} className="w-10 h-10 md:w-12 md:h-12 object-contain" loading="lazy" />
      </div>
      <span className="text-lg md:text-xl font-semibold">{item.label}</span>
    </div>
  );

  // Conteúdo duplicado para loop infinito suave
  const renderItems = () => (
    <>
      {SKILLS.map((s, i) => (
        <Card key={`a-${i}-${s.label}`} item={s} />
      ))}
      {SKILLS.map((s, i) => (
        <Card key={`b-${i}-${s.label}`} item={s} />
      ))}
    </>
  );

  return (
    <section id="skills" className="bg-[#eae8ec] rounded-t-[28px] py-16">
      <div className="w-full mx-auto max-w-[1280px] p-5 px-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Skills</h2>

        <div className="w-full relative">
          <div
            ref={trackRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="group cursor-grab overflow-x-auto hide-scrollbar"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "auto",
              msOverflowStyle: "none", // IE e Edge
              scrollbarWidth: "none", // Firefox
            }}
          >
            <div className="flex items-center py-2 pr-4">
              {renderItems()}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
