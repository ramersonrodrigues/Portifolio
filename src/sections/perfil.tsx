import { ArrowDownIcon, ArrowDownTrayIcon, PlayIcon } from "@heroicons/react/24/solid";

export default function Perfil() {
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
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold leading-tight text-white/90 sm:text-4xl md:text-6xl lg:text-7xl">
                            Olá, eu sou o <span className="text-slate-100">Râmerson</span>
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
                <div className="relative flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-[0_40px_80px_rgba(2,6,23,0.7)]">
                    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] bg-slate-900">
                        <img
                            src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png"
                            alt="Retrato do Râmerson"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            style={{ animation: 'float 12s ease-in-out infinite, shimmer 8s ease-in-out infinite' }}
                        />
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