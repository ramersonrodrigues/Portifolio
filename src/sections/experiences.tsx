"use client";

import { companies } from "../data/experiences";
import { BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Experiences() {
    return (
        <section id="experiences" className="py-16 bg-[#030712]">
            <div className="w-full mx-auto max-w-[1280px] p-5 px-10">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Experiências Profissionais</h2>

                <div className="w-full relative">
                    {companies.map((company, index) => (
                        <div key={company.id} className="mb-12">
                            {index > 0 && (
                                <div className="w-full border-t border-gray-800 mb-12"></div>
                            )}
                            {/* Layout com empresa à esquerda e cargos à direita */}
                            <div className="flex flex-col md:flex-row">
                                {/* Informações da empresa - LADO ESQUERDO */}
                                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                    <div className="md:pr-8 md:sticky md:top-20">
                                        <div className="flex flex-col items-center md:items-start">
                                            <div
                                                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-opacity-20 border-2"
                                                style={{ backgroundColor: company.color + '20', borderColor: company.color }}
                                            >
                                                {company.icon === 'code' ? (
                                                    <BriefcaseIcon className="w-8 h-8" style={{ color: company.color }} />
                                                ) : (
                                                    <PhoneIcon className="w-8 h-8" style={{ color: company.color }} />
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{company.name}</h3>
                                            <div className="flex items-center text-gray-400 text-sm">
                                                <span>{company.period}</span>
                                                {company.duration && (
                                                    <span className="ml-2 text-gray-500">· {company.duration}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Espaço entre empresa e cargos */}
                                <div className="hidden md:block w-8"></div>

                                {/* Cargos na empresa - LADO DIREITO */}
                                <div className="w-full md:w-2/3 relative">
                                    {/* Espaço para alinhamento dos cargos */}

                                    {/* Lista de cargos */}
                                    <ul className="list-none m-0 p-0">
                                        {company.positions.map((position, posIndex) => (
                                            <li key={position.id} className={`relative ${posIndex < company.positions.length - 1 ? 'mb-12' : ''}`}>
                                                <div className="flex">

                                                    <div className="flex-1">
                                                        {/* Título e período do cargo */}
                                                        <div className="mb-3">
                                                            <h4 className="text-xl font-semibold text-white mb-1">{position.title}</h4>
                                                            <div className="flex items-center text-gray-400 text-sm">
                                                                <span>{position.period}</span>
                                                                {position.duration && (
                                                                    <span className="ml-2 text-gray-500">· {position.duration}</span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Lista de descrições */}
                                                        {position.description.map((desc, i) => (
                                                            <label key={i}>{desc}</label>
                                                        ))}


                                                        {/* Skills/Competências */}
                                                        <div className="flex flex-wrap gap-2">
                                                            {position.skills.map((skill, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="mt-2 inline-flex items-center text-gray-300 px-3 py-1 rounded-full text-sm border"
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
                    ))}
                </div>
            </div>
        </section>
    );
}