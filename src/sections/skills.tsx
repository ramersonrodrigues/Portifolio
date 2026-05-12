"use client";

import Section from "@/components/ui/section";

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

const Card = ({ item, index }: { item: SkillItem; index: number }) => {
  const proficiency = Math.min(96, 72 + (index % 4) * 6 + (index % 3) * 3);

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.25)]">
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-sky-500/30 to-purple-500/40 blur-[80px]" />
      </div>
      <div className="relative flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-inner">
          <img src={item.img} alt={item.label} loading="lazy" className="h-12 w-12 object-contain" />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">{item.label}</p>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Stack</p>
        </div>
      </div>
      <div className="relative mt-6">
        <div className="flex items-center justify-between text-[0.625rem] uppercase tracking-[0.55em] text-slate-400">
          <span>Dominância</span>
          <span>{proficiency}%</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-slate-200/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 transition-all duration-500"
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        <p className="mx-auto max-w-3xl text-center text-base text-slate-600">
          Uma curadoria de tecnologias com as quais eu entrego produtos digitais escaláveis, focando em performance,
          experiência do usuário e engenharia sólida.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <Card key={`${skill.label}-${index}`} item={skill} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
