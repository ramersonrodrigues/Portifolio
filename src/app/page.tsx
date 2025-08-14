import { ThemeToggle } from '@/components/ui/theme-toggle';
import Experiences from '@/sections/experiences';
import Menu from '@/sections/menu';
import Perfil from '@/sections/perfil';
import Projects from '@/sections/projects';
import Reviews from '@/sections/reviews';
import Certifications from '@/sections/certifications';
import Skills from '@/sections/skills';

export default function Home() {
  return (
    <>
      <Perfil /> 
      <Certifications />
      <Experiences />
      <Skills />
      <Projects />
      <Reviews />
    </>
  );
}
