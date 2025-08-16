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

export default function Skills() {
  const Card = ({ item }: { item: SkillItem }) => (
    <div className="rounded-xl bg-white text-gray-800 shadow-sm border border-gray-200 p-4 md:p-6 flex items-center gap-4">
      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gray-50 border border-gray-200">
        <img src={item.img} alt={item.label} className="w-10 h-10 md:w-12 md:h-12 object-contain" loading="lazy" />
      </div>
      <span className="text-lg md:text-xl font-semibold">{item.label}</span>
    </div>
  );

  return (
    <Section id="skills" title="Skills">
      <div className="w-full mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILLS.map((s, i) => (
            <Card key={`${i}-${s.label}`} item={s} />
          ))}
        </div>
      </div>
    </Section>
  );
}
