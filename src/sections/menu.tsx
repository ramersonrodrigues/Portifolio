"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const mobileMenuRef = useRef<HTMLElement | null>(null);

    // Fecha ao clicar fora do menu (apenas quando aberto)
    useEffect(() => {
        if (!open) return;

        const handleOutside = (e: MouseEvent | TouchEvent) => {
            const target = e.target as Node | null;
            if (!target) return;
            const clickedOutsideMenu = mobileMenuRef.current && !mobileMenuRef.current.contains(target);
            const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(target);
            if (clickedOutsideMenu && clickedOutsideButton) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside, { passive: true });
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, [open]);

    return (
        <>
            <section id="menu" className="fixed left-0 top-0 z-50 w-full h-[90px] border-b border-[#292c36] bg-[var(--background)]">
                <div className="h-full flex justify-between items-center w-full mx-auto max-w-[1280px] px-10">
                    <label className="text-2xl font-bold">
                        Râmerson Rodrigues
                    </label>
                    {/* Botão hambúrguer (somente mobile) */}
                    <button
                        type="button"
                        aria-label="Abrir menu"
                        className="md:hidden p-2 rounded hover:bg-white/5 transition"
                        onClick={() => setOpen((v) => !v)}
                        ref={buttonRef}
                    >
                        <Bars3Icon className="w-7 h-7" />
                    </button>

                    {/* Navegação desktop */}
                    <nav className="hidden md:block text-[#84868a]">
                        <ul className="flex items-center gap-6">
                            <li>
                                <a className="hover:text-primary transition" href="#perfil">Perfil</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition" href="#certifications">Certificações</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition" href="#experiences">Experiências</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition" href="#skills">Skills</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition" href="#projects">Projetos</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition" href="#reviews">Reviews</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Menu mobile drop-down */}
                {open && (
                    <nav ref={mobileMenuRef} className="md:hidden absolute top-[90px] left-0 w-full border-b border-[#292c36] bg-[var(--background)]">
                        <ul className="flex flex-col gap-2 px-10 py-4 text-[#84868a]">
                            <li>
                                <a onClick={() => setOpen(false)} className="block py-2 hover:text-primary transition" href="#perfil">Perfil</a>
                            </li>
                            <li>
                                <a onClick={() => setOpen(false)} className="block py-2 hover:text-primary transition" href="#experiences">Experiências</a>
                            </li>
                            <li>
                                <a onClick={() => setOpen(false)} className="block py-2 hover:text-primary transition" href="#certifications">Certificações</a>
                            </li>
                            <li>
                                <a onClick={() => setOpen(false)} className="block py-2 hover:text-primary transition" href="#skills">Skills</a>
                            </li>
                            <li>
                                <a onClick={() => setOpen(false)} className="block py-2 hover:text-primary transition" href="#projects">Projetos</a>
                            </li>
                            <li>
                                <a onClick={() => setOpen(false)} className="block py-2 hover:text-primary transition" href="#reviews">Reviews</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </section>
            {/* Espaçador para compensar a altura do header fixo */}
            <div aria-hidden className="h-[90px]"></div>
        </>
    );
}