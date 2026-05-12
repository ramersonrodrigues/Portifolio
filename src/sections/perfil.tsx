"use client";

import { ArrowDownTrayIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
    "https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png",
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
];

const FULL_TEXT = "Olá, eu sou o Râmerson";

export default function Perfil() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let direction: 1 | -1 = 1;
        let current = 0;
        let timeoutId: ReturnType<typeof setTimeout>;

        const tick = () => {
            setTypedText(FULL_TEXT.slice(0, current));

            const atEnd = current === FULL_TEXT.length && direction === 1;
            const atStart = current === 0 && direction === -1;
            if (atEnd || atStart) {
                timeoutId = setTimeout(() => {
                    direction = atEnd ? -1 : 1;
                    current += direction;
                    tick();
                }, 500);
                return;
            }

            current += direction;
            timeoutId = setTimeout(tick, 120);
        };

        current += direction;
        tick();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section
            id="perfil"
            className="min-h-[calc(100vh-90px)] relative overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-5 top-16 h-72 w-72 rounded-full bg-slate-200/20 blur-[140px]" />
                <div className="absolute left-0 top-0 h-[420px] w-full bg-gradient-to-b from-slate-900/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(94,234,212,0.25),_transparent_55%)] blur-[80px] opacity-80 animate-[pulse_12s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.15),rgba(14,165,233,0.05),rgba(244,114,182,0.1))] animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,_rgba(236,72,153,0.35),_transparent_45%)] blur-[160px] opacity-70 animate-[drift_22s_linear_infinite]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.15),transparent,rgba(255,255,255,0.05))] opacity-0 transition-opacity animate-[scan_6s_linear_infinite]" />
            </div>
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] w-full max-w-[1280px] items-center gap-12 px-6 py-10">
                <div className="flex flex-1 flex-col gap-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.5em] text-slate-300">Developer Portfolio</p>
                    <div className="space-y-1">
                        <h1 className="text-3xl font-semibold leading-tight text-white/90 sm:text-4xl md:text-6xl lg:text-7xl">
                            <span className="text-slate-100">{typedText}</span>
                        </h1>
                        <p className="text-2xl font-light text-white/80 sm:text-3xl md:text-4xl lg:text-5xl">Desenvolvedor Frontend centrado em produtos digitais memoráveis.</p>
                    </div>
                    <p className="max-w-2xl text-sm text-slate-300/90 sm:text-base md:text-lg">
                        Transformo ideias complexas em experiências fluidas com Next.js, Tailwind e uma abordagem centrada em desempenho e acessibilidade.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="rounded-3xl border border-white/20 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.4em] text-white/80">
                            Empatia
                        </div>
                        <div className="rounded-3xl border border-white/20 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.4em] text-white/80">
                            Performance
                        </div>
                        <div className="rounded-3xl border border-white/20 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.4em] text-white/80">
                            Escalabilidade
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm font-semibold text-white">
                        <a
                            href="/cv.pdf"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-rose-500 to-orange-400 px-6 py-3 shadow-lg shadow-indigo-500/40 transition hover:translate-y-0.5"
                        >
                            <ArrowDownTrayIcon className="h-5 w-5" />
                            Download CV
                        </a>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
                        >
                            <PlayIcon className="h-5 w-5" />
                            Assistir vídeo
                        </button>
                    </div>
                </div>
                <div className="relative flex-1 rounded-[32px] shadow-[0_40px_80px_rgba(2,6,23,0.7)]">
                    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] bg-slate-900/90">
                        {CAROUSEL_IMAGES.map((image, index) => (
                            <img
                                key={image + index}
                                src={image}
                                alt="Retrato do Râmerson"
                                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                                    index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                }`}
                                loading="lazy"
                                style={{ animation: index === activeIndex ? "shimmer 4s ease-in-out infinite" : undefined }}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                        <div className="absolute left-6 bottom-6 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                            UX Aberto • Next.js
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}