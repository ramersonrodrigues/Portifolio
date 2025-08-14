export default function Footer() {
    return (
        <footer className="bg-[#030712] text-gray-300">
            <div className="w-full mx-auto max-w-[1280px] px-5 md:px-10 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Sobre */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Sobre</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Desenvolvedor focado em entregar produtos com qualidade, performance e excelente
                            experiência do usuário. Apaixonado por boas práticas, DX e acessibilidade.
                        </p>
                    </div>

                    {/* Navegação */}
                    <nav>
                        <h3 className="text-white text-xl font-semibold mb-4">Navegação</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#experiences" className="hover:text-white transition">Experiências</a></li>
                            <li><a href="#certifications" className="hover:text-white transition">Formação</a></li>
                            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                            <li><a href="#projects" className="hover:text-white transition">Projetos</a></li>
                            <li><a href="#reviews" className="hover:text-white transition">Avaliações</a></li>
                        </ul>
                    </nav>

                    {/* Contato */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Contato</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="mailto:seuemail@exemplo.com" className="hover:text-white transition">
                                    seuemail@exemplo.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+550000000000" className="hover:text-white transition">
                                    +55 (00) 00000-0000
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <a
                                  href="https://www.linkedin.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-white transition"
                                >
                                  LinkedIn
                                </a>
                                <span className="text-gray-600">•</span>
                                <a
                                  href="https://github.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-white transition"
                                >
                                  GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-white/10">
                <div className="w-full mx-auto max-w-[1280px] px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm"> {new Date().getFullYear()} Râmerson Rodrigues. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-5">
                        {/* LinkedIn */}
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          title="LinkedIn"
                          className="text-gray-400 hover:text-white transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M4.983 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3.75 9h2.466v11H3.75V9Zm6.028 0h2.361v1.5h.034c.329-.624 1.134-1.279 2.335-1.279 2.498 0 2.96 1.643 2.96 3.777V20H15.01v-5.32c0-1.27-.023-2.904-1.77-2.904-1.772 0-2.044 1.385-2.044 2.812V20H9.778V9Z" />
                          </svg>
                        </a>

                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          title="GitHub"
                          className="text-gray-400 hover:text-white transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.97 5.26.97 11.54c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.06-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.67.08-.66.08-.66 1.1.08 1.67 1.12 1.67 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.12-2.95-.11-.28-.48-1.42.11-2.96 0 0 .93-.3 3.05 1.13.88-.25 1.83-.37 2.77-.37.94 0 1.89.12 2.77.37 2.12-1.43 3.05-1.13 3.05-1.13.59 1.54.22 2.68.11 2.96.69.77 1.12 1.75 1.12 2.95 0 4.22-2.58 5.14-5.03 5.41.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 0 .29.2.64.76.53 4.37-1.45 7.52-5.57 7.52-10.43C23.03 5.26 18.27.5 12 .5Z" />
                          </svg>
                        </a>

                        {/* X / Twitter */}
                        <a
                          href="https://x.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="X"
                          title="X"
                          className="text-gray-400 hover:text-white transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-4.77-6.223L4.8 22H2l7.03-8.033L2 2h6.914l4.326 5.77L18.244 2Zm-2.393 18h1.73L7.24 4h-1.8l10.41 16Z" />
                          </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}