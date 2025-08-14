export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  techs: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'proj-analytics',
    title: 'Dashboard Analytics',
    subtitle: 'Eleve a experiência de decisões',
    description:
      'Plataforma de análise em tempo real com gráficos interativos, filtros dinâmicos e exportação. Foco em performance e UX.',
    image:
      'https://images.unsplash.com/photo-1551281044-8b89a367b972?q=80&w=1200&auto=format&fit=crop',
    techs: ['Next.js', 'TypeScript', 'Tailwind', 'Chart.js'],
    demoUrl: 'https://example.com/analytics',
    githubUrl: 'https://github.com/example/analytics',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'proj-ecommerce',
    title: 'E-commerce Headless',
    subtitle: 'Alta conversão e SEO',
    description:
      'Loja virtual headless com checkout otimizado, busca instantânea e CMS. Integração com pagamentos e analytics.',
    image:
      'https://images.unsplash.com/photo-1515165562835-c3b8c2e46112?q=80&w=1200&auto=format&fit=crop',
    techs: ['Next.js', 'Stripe', 'Algolia', 'Vercel'],
    demoUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 'proj-support',
    title: 'Service Desk X',
    subtitle: 'Eficiência e qualidade em ITSM',
    description:
      'Portal de suporte com catálogo de serviços, SLA, base de conhecimento e relatórios. Foco em escalabilidade e acessibilidade.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    techs: ['React', 'Node.js', 'MongoDB', 'Docker'],
    demoUrl: 'https://example.com/servicedesk',
    githubUrl: 'https://github.com/example/servicedesk',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
  {
    id: 'proj-landing',
    title: 'Landing Page SaaS',
    subtitle: 'Conversão e velocidade',
    description:
      'Landing moderna com seções modulares, A/B testing e SEO. Carregamento instantâneo e acessibilidade AA.',
    image:
      'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop',
    techs: ['Next.js', 'Tailwind', 'Framer Motion'],
    demoUrl: 'https://example.com/saas',
    githubUrl: 'https://github.com/example/saas-landing',
  },
  {
    id: 'proj-mobile',
    title: 'App Mobile Finance',
    subtitle: 'Controle financeiro pessoal',
    description:
      'Aplicativo para gestão de gastos com categorização, metas e gráficos. Sincronização em nuvem.',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1f?q=80&w=1200&auto=format&fit=crop',
    techs: ['React Native', 'Expo', 'Firebase'],
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    githubUrl: 'https://github.com/example/mobile-finance',
  },
  {
    id: 'proj-ai',
    title: 'Chatbot Assistente',
    subtitle: 'Atendimento com IA',
    description:
      'Assistente virtual com NLP, fallback humano e integração com CRM. Treinável por arquivos e URLs.',
    image:
      'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop',
    techs: ['Next.js', 'Python', 'FastAPI', 'Postgres'],
    demoUrl: 'https://example.com/ai-bot',
    githubUrl: 'https://github.com/example/ai-bot',
  },
];
