export type Course = {
  id: string;
  institution: string; // Nome da instituição
  title: string; // Nome do curso
  period: string; // Ex: 2018 - 2022
  duration?: string; // Ex: 4 anos / Integral
  description: string[]; // Pontos que serão unidos em texto
  skills: string[]; // Disciplinas/competências principais
};

export type EducationCategory = {
  id: string;
  label: 'Graduação' | 'Pós-graduação' | 'Técnico';
  color: string; // Cor principal da categoria
  icon: 'academic' | 'certificate' | 'wrench';
  courses: Course[];
};

export const educationCategories: EducationCategory[] = [
  {
    id: 'cat-graduacao',
    label: 'Pós-graduação',
    color: '#2563eb',
    icon: 'academic',
    courses: [
      {
        id: 'grad-cc',
        institution: 'Universidade Exemplo',
        title: 'Administração de Bancos de Dados',
        period: '2018 — 2022',
        duration: 'Integral',
        description: [
          'Administração de bancos de dados e gerenciamento de dados.',
          'Participação em projetos de pesquisa e extensão.'
        ],
        skills: ['Algoritmos', 'Estruturas de Dados', 'Banco de Dados', 'Redes']
      },
      {
        id: 'grad-monitoria',
        institution: 'Universidade Exemplo',
        title: 'Engenharia de Software',
        period: '2020 — 2021',
        description: [
          'Engenharia de Software e gerenciamento de projetos.'
        ],
        skills: ['Mentoria', 'Liderança', 'Comunicação']
      }
    ]
  },
  {
    id: 'cat-pos',
    label: 'Graduação',
    color: '#16a34a',
    icon: 'certificate',
    courses: [
      {
        id: 'pos-engsoft',
        institution: 'Universidade Exemplo',
        title: 'Analise e Desenvolvimento de Sistemas',
        period: '2023 — 2024',
        description: [
          'Analise e Desenvolvimento de Sistemas.'
        ],
        skills: ['Arquitetura', 'DevOps', 'CI/CD']
      }
    ]
  },
  {
    id: 'cat-tecnico',
    label: 'Técnico',
    color: '#f59e0b',
    icon: 'wrench',
    courses: [
      {
        id: 'tec-engsoft',
        institution: 'Instituto Federal de Educação, Ciência e Tecnologia',
        title: 'Desenvolvimento de Sistemas',
        period: '2023 — 2024',
        description: [
          'Desenvolvimento de Sistemas.'
        ],
        skills: ['Desenvolvimento de Sistemas', 'Desenvolvimento Web', 'Desenvolvimento Mobile']  
      }
    ]
  }
];
