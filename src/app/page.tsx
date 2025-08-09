import { ThemeToggle } from '@/components/ui/theme-toggle';
import Experiences from '@/sections/experiences';
import Menu from '@/sections/menu';
import Perfil from '@/sections/perfil';
import Projects from '@/sections/projects';
import Reviews from '@/sections/reviews';

export default function Home() {
  return (
    <>
      <Perfil />
      <Experiences />
      <Projects />
      <Reviews />
    </>
  );
}
