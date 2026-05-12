import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { projects } from "../data/projects";
import Section from "../components/ui/section";

const CTA = ({ href, label, icon }: { href: string; label: string; icon: React.ComponentType<{ className?: string }> }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/50 hover:bg-white/20"
  >
    {React.createElement(icon, { className: 'w-4 h-4' })}
    {label}
  </a>
);

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <article className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.7)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(2,6,23,0.85)]">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-70 blur-3xl" />
    <div className="relative space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-1">
        <div className="overflow-hidden rounded-[26px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-60 w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="space-y-2">
        {project.subtitle && (
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300/80">{project.subtitle}</p>
        )}
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-base text-slate-200 leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.videoUrl && <CTA href={project.videoUrl} label="Vídeo" icon={PlayCircleIcon} />}
        {project.githubUrl && <CTA href={project.githubUrl} label="Código" icon={CodeBracketIcon} />}
        {project.demoUrl && <CTA href={project.demoUrl} label="Preview" icon={ArrowTopRightOnSquareIcon} />}
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <Section id="projects" title="Projetos" theme="dark">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}