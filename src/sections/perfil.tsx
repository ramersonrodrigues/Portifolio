import { ArrowDownIcon, ArrowDownTrayIcon, PlayIcon } from "@heroicons/react/24/solid";

export default function Perfil() {
    return (
        <section id="perfil" className="min-h-[calc(100vh-90px)] flex justify-between items-center">
            <div className=" min-h-[300px] md:h-[calc(100vh-90px)] overflow-hidden flex justify-between items-center w-full mx-auto max-w-[1280px] p-5 px-10 text-gray-500">
                <div className="flex flex-col">
                    <label className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium text-white">OLÁ, EU SOU O <span className="text-[#8340ee]">RÂMERSON</span></label>
                    <label className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium text-white">DESENVOLVEDOR</label>
                    <label className="my-5 text-[#84868a] max-w-[500px] text-[16px] md:text-[18px]">
                        Sou desenvolvedor Frontend com especialização em React.js, Next.js e Tailwind CSS, apaixonado por transformar ideias em interfaces performáticas, responsivas e com foco na experiência do usuário. Com base sólida em JavaScript moderno (ES6+), tenho facilidade em implementação de soluções visuais escaláveis, com atenção a acessibilidade, usabilidade, responsividade e desempenho.
                    </label>
                    <div className="flex flex-col sm:flex-row gap-5 col">
                        <button className="w-fit sm:w-auto inline-flex cursor-pointer bg-primary text-white px-5 py-5 rounded hover:bg-white/5 transition bg-red-500 items-center gap-2">
                            Download CV
                            <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
                        </button>
                        <button className="w-fit sm:w-auto inline-flex cursor-pointer bg-primary text-white px-5 py-5 rounded hover:bg-white/5 transition bg-blue-500 items-center gap-2">
                            Assistir ao video
                            <PlayIcon className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
                <img className="hidden lg:block h-full object-cover object-top" src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="Retrato do Râmerson" />
            </div>
        </section>
    );
}