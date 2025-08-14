export interface Position {
  id: number;
  title: string;
  period: string;
  duration?: string; // Duração formatada (ex: "1 ano 3 meses")
  description: string[];
  skills: string[];
}

export interface Company {
  id: number;
  name: string;
  period: string; // Período total na empresa
  duration?: string; // Duração total na empresa
  icon: string; // Ícone da empresa
  logo?: string; // URL do logo da empresa
  color: string;
  positions: Position[];
}

export const companies: Company[] = [
  {
    id: 1,
    name: "Empreender | Soluções para ecommerce",
    period: "set de 2021 - o momento",
    duration: "4 anos",
    icon: "code",
    logo: "/images/logos/empreender.png",
    color: "#8A2BE2", // Roxo
    positions: [
      {
        id: 1,
        title: "Desenvolvedor full stack",
        period: "set de 2021 - o momento",
        duration: "4 anos",
        description: [
          "Desenvolvi o frontend completo do app Lily Reviews usando React, Next.js e Tailwind CSS"
        ],
        skills: ["React.js", "Next.js", "mais 3 competências"]
      }
    ]
  },
  {
    id: 2,
    name: "Central IT - Tecnologia em Negócios",
    period: "dez de 2013 - set de 2016",
    duration: "2 anos 10 meses",
    icon: "support",
    logo: "/images/logos/centralit.png",
    color: "#00BFFF", // Azul claro
    positions: [
      {
        id: 1,
        title: "Supervisor técnico",
        period: "jul de 2015 - set de 2016",
        duration: "1 ano 3 meses",
        description: [
          "Liderei equipe de suporte técnico remoto N1 em contratos com MPOG, MDA e PREV/C"
        ],
        skills: ["Liderança técnica", "Gestão de SLA", "mais 3 competências"]
      },
      {
        id: 2,
        title: "Técnico de suporte",
        period: "dez de 2013 - jul de 2015",
        duration: "1 ano 8 meses",
        description: [
          "Realizei suporte remoto a órgãos como MPOG, SEDF e MDA com alto índice de satisfação"
        ],
        skills: ["Atendimento Técnico", "Solução de problemas técnicos", "mais 3 competências"]
      }
    ]
  }
];
