"use client";

import { companies } from "../data/experiences";
import Section from "../components/ui/section";

export default function Experiences() {
    return (
        <Section id="experiences" title="Experiências Profissionais" theme="dark">
            <div className="space-y-8">
                <p className="mx-auto max-w-3xl text-center text-sm uppercase tracking-[0.4em] text-white/60">
                    Atuei em ambientes de alta complexidade, levando visão estratégica para código com foco em serviço ao usuário final.
                </p>
                <div className="grid gap-6">
                    {companies.map((company) => (
                        <article
                            key={company.id}
                            className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-950 to-black/60 p-6 shadow-[0_25px_60px_rgba(2,6,23,0.7)]"
                        >
                            <div className="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl font-semibold text-white" style={{ borderColor: company.color, borderWidth: 1 }}>
                                        <span className="text-sm uppercase tracking-[0.3em] text-white">{company.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.4em] text-slate-300">{company.name}</p>
                                        <p className="text-sm font-semibold text-white/80">{company.duration}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-400">
                                    <span className="rounded-full border border-white/20 px-3 py-1">{company.period || 'Experiência contínua'}</span>
                                </div>
                            </div>

                            <div className="relative pl-6">
                                <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-white/70 to-transparent" />
                                <ul className="space-y-8">
                                    {company.positions.map((position, index) => (
                                        <li key={position.id} className="relative">
                                            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white" />
                                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_15px_45px_rgba(2,6,23,0.65)]">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h4 className="text-xl font-semibold text-white">{position.title}</h4>
                                                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                                                            {position.period}
                                                        </span>
                                                    </div>
                                                    {position.description.length > 0 && (
                                                        <p className="text-sm leading-relaxed text-slate-300">
                                                            {position.description.join(' ')}
                                                        </p>
                                                    )}
                                                    <div className="mt-3 flex flex-wrap gap-2">
                                                        {position.skills.map((skill, idx) => (
                                                            <span
                                                                key={`${position.id}-${idx}`}
                                                                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    );
}