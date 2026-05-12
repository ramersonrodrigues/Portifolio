"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const LINKS = [
    { label: "Perfil", href: "#perfil" },
    { label: "Certificações", href: "#certifications" },
    { label: "Experiências", href: "#experiences" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
];

export default function Menu() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(LINKS[0].href);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

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
            <section
                id="menu"
                className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-md"
            >
                <div className="relative mx-auto flex h-[90px] w-full max-w-[1280px] items-center justify-between px-6">
                    <div>
                        <p className="text-base font-semibold tracking-[0.2em] text-white/70">Râmerson Rodrigues</p>
                        <p className="text-sm tracking-[0.15em] text-white/50">Lead Front-end • Next.js Specialist</p>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActive(link.href)}
                                className={`relative text-lg font-semibold tracking-[0.2em] text-white/80 transition ${
                                    active === link.href
                                        ? "text-white"
                                        : "hover:text-white/90"
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute left-0 right-0 -bottom-2 h-0.5 bg-white transition-all ${
                                        active === link.href ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        aria-label="Abrir menu"
                        className="md:hidden rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                        onClick={() => setOpen((v) => !v)}
                        ref={buttonRef}
                    >
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                </div>
                {/* mobile overlay */}
                {open && (
                    <div
                        ref={mobileMenuRef}
                        className="absolute inset-x-0 top-[90px] z-50 border-t border-white/10 bg-slate-900/95 py-6 backdrop-blur-xl"
                    >
                        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-3">
                            {LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    onClick={() => setOpen(false)}
                                    href={link.href}
                                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </section>
            <div aria-hidden className="h-[90px]"></div>
        </>
    );
}