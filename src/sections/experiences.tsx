"use client";

import { companies } from "../data/experiences";
import { BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Section from "../components/ui/section";

export default function Experiences() {
    return (
        <Section id="experiences" title="Experiências Profissionais" theme="dark" >
            {companies.map((company, index) => (
                <div key={company.id} className="mb-12">
                    {index > 0 && (
                        <div className="w-full border-t border-gray-800 mb-12"></div>
                    )}
                    {/* Layout com empresa à esquerda e cargos à direita */}
                    <div className="flex flex-col md:flex-row md:gap-8">
                        {/* Informações da empresa - LADO ESQUERDO */}
                        <div className="w-full md:w-1/6 mb-6 md:mb-0">
                            <div className="md:pr-8 md:sticky md:top-20">
                                <div className="flex flex-col items-center md:items-start">
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-opacity-20 border-2"
                                        style={{ backgroundColor: company.color + '20', borderColor: company.color }}
                                    >
                                        {company.icon === 'code' ? (
                                            <BriefcaseIcon aria-hidden="true" className="w-8 h-8" style={{ color: company.color }} />
                                        ) : (
                                            <PhoneIcon aria-hidden="true" className="w-8 h-8" style={{ color: company.color }} />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{company.name}</h3>
                                    <div className="flex items-start justify-between w-full text-gray-400 text-sm">
                                        {company.duration && (
                                            <span className="text-gray-500 whitespace-nowrap">{company.duration}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Espaço entre empresa e cargos removido em favor de gap do flex */}

                        {/* Cargos na empresa - LADO DIREITO */}
                        <div className="w-full md:w-5/6 relative">
                            {/* Lista de cargos com timeline lateral */}
                            <div className="relative">
                                {/* Lista de cargos */}
                                <ul className="list-none m-0 p-0">
                                    {company.positions.map((position, posIndex) => (
                                        <li key={position.id} className="relative mb-12 last:mb-0">
                                            <div className="flex">
                                                {/* Coluna da timeline (apenas bolinha; linha é do contêiner pai) */}
                                                <div className="relative w-6 mr-3 md:w-8 md:mr-4">
                                                    {/* Bolinha com anel para não encostar na linha */}
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-2 h-2 rounded-full bg-white/80 ring-6 ring-[#030712] z-10"></div>
                                                    {/* Segmento de linha somente se houver mais de um cargo e não for o último */}
                                                    {company.positions.length > 1 && posIndex < company.positions.length - 1 && (
                                                        <div className="absolute left-3 md:left-4 top-7 bottom-[-48px] w-px bg-white/30"></div>
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    {/* Título e período do cargo */}
                                                    <div className="mb-3">
                                                        <h4 className="text-xl font-semibold text-white mb-1">{position.title}</h4>
                                                        <div className="flex items-center justify-between w-full text-gray-400 text-sm">
                                                            <span>{position.period.replace(' - ', ' até ')}</span>
                                                            
                                                        </div>
                                                    </div>

                                                    {/* Descrição em texto único */}
                                                    {position.description.length > 0 && (
                                                        <p className="text-gray-300">
                                                            {position.description.join(' ')}
                                                        </p>
                                                    )}

                                                    {/* Skills/Competências */}
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {position.skills.map((skill, i) => (
                                                            <span
                                                                key={i}
                                                                className="mt-2 inline-flex items-center text-gray-300 px-3 py-1 rounded-full text-sm border transition-colors hover:bg-white/10"
                                                                style={{ borderColor: company.color + '60', backgroundColor: company.color + '20' }}
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Section >
    );
}