import { educationCategories } from "../data/certifications";
import { AcademicCapIcon, DocumentCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import Section from "../components/ui/section";

const ICON_MAP = {
    academic: AcademicCapIcon,
    certificate: DocumentCheckIcon,
    wrench: WrenchScrewdriverIcon,
};

export default function Certifications() {
    return (
        <Section id="certifications" title="Formação Acadêmica" theme="light">
            <div className="space-y-6">
                <p className="mx-auto max-w-3xl text-center text-sm uppercase tracking-[0.4em] text-slate-500">
                    Educação contínua para garantir fundações sólidas em engenharia de software, dados e experiência do usuário.
                </p>
                <div className="grid gap-6 lg:grid-cols-3">
                    {educationCategories.map((category) => {
                        const Icon = ICON_MAP[category.icon];
                        return (
                            <article
                                key={category.id}
                                className="relative overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(15,23,42,0.25)]"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-indigo-50 opacity-60 blur-3xl" />
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-current"
                                            style={{ color: category.color, borderColor: category.color }}
                                        >
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{category.label}</p>
                                            <h3 className="text-xl font-bold text-slate-900">Linha do tempo</h3>
                                        </div>
                                    </div>

                                    <div className="relative pl-6">
                                        <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(${category.color}, transparent)` }} />
                                        <ul className="space-y-8">
                                            {category.courses.map((course) => (
                                                <li key={course.id} className="relative">
                                                    <div
                                                        className="absolute left-0 top-1.5 h-3 w-3 rounded-full"
                                                        style={{ backgroundColor: category.color }}
                                                    />
                                                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                                                        <div className="flex flex-col gap-2 text-sm text-slate-500">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">
                                                                    {course.period}
                                                                </span>
                                                                {course.duration && (
                                                                    <span className="rounded-full border border-slate-200 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-500">
                                                                        {course.duration}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <h4 className="text-lg font-semibold text-slate-900">{course.title}</h4>
                                                            {course.description.length > 0 && (
                                                                <p className="text-sm leading-relaxed text-slate-600">
                                                                    {course.description.join(' ')}
                                                                </p>
                                                            )}
                                                            <div className="mt-3 flex flex-wrap gap-2">
                                                                {course.skills.map((skill, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600"
                                                                        style={{ backgroundColor: `${category.color}10`, borderColor: `${category.color}30`, color: category.color }}
                                                                    >
                                                                        {skill}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <div className="mt-2 text-xs uppercase tracking-[0.4em] text-slate-400">
                                                                {course.institution}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}