"use client";

import Section from "@/components/ui/section";
import { useEffect, useRef, useState } from "react";
import { StarIcon } from '@heroicons/react/24/solid';

type ReviewItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number; // 1..5
  quote: string;
};

const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    name: "Mariana Souza",
    role: "Tech Lead",
    company: "InovaTech",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    quote:
      "Profissional extremamente comprometido, comunicação clara e foco em entregar valor rápido.",
  },
  {
    id: "r2",
    name: "Carlos Almeida",
    role: "Product Manager",
    company: "RocketApps",
    avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    quote:
      "Transformou requisitos complexos em soluções simples e elegantes. Excelente parceria!",
  },
  {
    id: "r3",
    name: "Fernanda Lima",
    role: "Engenheira de Software",
    company: "Cloudify",
    avatar: "https://images.unsplash.com/photo-1541214113241-7f4bfaad5a3d?q=80&w=256&auto=format&fit=crop",
    rating: 4,
    quote:
      "Código limpo, testes bem escritos e atenção aos detalhes de acessibilidade.",
  },
  {
    id: "r4",
    name: "Ricardo Santos",
    role: "CTO",
    company: "DataPulse",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    quote:
      "Entrega consistente e proativa. Trouxe melhorias arquiteturais que reduziram custos.",
  },
  {
    id: "r5",
    name: "Ana Beatriz",
    role: "UX Designer",
    company: "PixelLab",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    quote:
      "Excelente colaboração com design. Implementou microinterações que elevaram a UX.",
  },
];

// URL do formulário para coletar depoimentos (substitua pelo seu Google Forms ou outro)
const REVIEW_FORM_URL = "https://forms.gle/xxxxxxxxxxxxxxxx8";

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const pausedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  // Auto-scroll contínuo em loop
  useEffect(() => {
    setMounted(true);
    const el = trackRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    const speed = 0.5; // px/frame
    let rafId: number;

    const step = () => {
      if (!pausedRef.current && !isDownRef.current) {
        el.scrollLeft += speed;
        const maxScroll = el.scrollWidth / 2; // metade (conteúdo duplicado)
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = el.scrollLeft - maxScroll;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Drag: mouse/touch
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
      const walk = (x - startXRef.current) * 1;
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

  const onMouseEnter = () => (pausedRef.current = true);
  const onMouseLeave = () => (pausedRef.current = false);

  const Stars = ({ n }: { n: number }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={i < n ? 'w-5 h-5 text-amber-400' : 'w-5 h-5 text-slate-400/80'}
        />
      ))}
    </div>
  );

  const Card = ({ item }: { item: ReviewItem }) => (
    <div className="shrink-0 w-[320px] md:w-[420px] h-[260px] rounded-[28px] border border-slate-200/30 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(15,23,42,0.35)] mx-2">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-purple-500/40 blur-2xl" />
          <img
            src={item.avatar}
            alt={item.name}
            className="relative w-14 h-14 rounded-full border border-white shadow-inner object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <div className="text-lg font-semibold text-slate-900">{item.name}</div>
          <div className="text-xs uppercase tracking-[0.4em] text-slate-400">
            {item.role} • {item.company}
          </div>
        </div>
      </div>
      <Stars n={item.rating} />
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        “{item.quote}”
      </p>
    </div>
  );

  const renderItems = () => (
    <>
      {REVIEWS.map((r) => (
        <Card key={`a-${r.id}`} item={r} />
      ))}
      {REVIEWS.map((r) => (
        <Card key={`b-${r.id}`} item={r} />
      ))}
    </>
  );

  return (
    <Section id="reviews" title="Depoimentos" theme="light">

      <div className="w-full relative">
        <div
          ref={trackRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="group cursor-grab overflow-x-auto hide-scrollbar"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex items-center py-2 pr-4">
            {renderItems()}
          </div>
        </div>
      </div>
      {/* Botão abaixo do carrossel, visível em todos os tamanhos */}
      <div className="mt-10 flex items-center justify-center">
        <a
          href={REVIEW_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
        >
          Deixar depoimento
        </a>
      </div>
    </Section>
  );
}