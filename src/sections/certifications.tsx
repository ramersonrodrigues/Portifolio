import { educationCategories } from "../data/certifications";
import { AcademicCapIcon, DocumentCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import Section from "../components/ui/section";

export default function Certifications() {
    return (
        <Section id="certifications" title="Formação Acadêmica" theme="light">
            {educationCategories.map((category, index) => (
                <div key={category.id} className="mb-12">
                    {index > 0 && (
                        <div className="w-full border-t border-gray-300 mb-12"></div>
                    )}
                    {/* Layout com instituição à esquerda e cursos/certificações à direita */}
                    <div className="flex flex-col md:flex-row md:gap-8 ">
                        {/* Informações da instituição - LADO ESQUERDO */}
                        <div className="w-full md:w-1/6 mb-6 md:mb-0 ">
                            <div className="md:pr-8 md:sticky md:top-20">
                                <div className="flex flex-col items-center md:items-start">
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-opacity-20 border-2"
                                        style={{ backgroundColor: category.color + '20', borderColor: category.color }}
                                    >
                                        {category.icon === 'academic' && (
                                            <AcademicCapIcon aria-hidden="true" aria-label={category.label} className="w-9 h-9 md:w-10 md:h-10" style={{ color: category.color }} />
                                        )}
                                        {category.icon === 'certificate' && (
                                            <DocumentCheckIcon aria-hidden="true" aria-label={category.label} className="w-9 h-9 md:w-10 md:h-10" style={{ color: category.color }} />
                                        )}
                                        {category.icon === 'wrench' && (
                                            <WrenchScrewdriverIcon aria-hidden="true" aria-label={category.label} className="w-9 h-9 md:w-10 md:h-10" style={{ color: category.color }} />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left">{category.label}</h3>
                                    {/* Categoria não possui período/duração globais */}
                                </div>
                            </div>
                        </div>

                        {/* Carga Acadêmica - LADO DIREITO */}
                        <div className="w-full md:w-5/6 relative">
                            {/* Lista de cursos/certificações com timeline lateral */}
                            <div className="relative">
                                {/* Lista */}
                                <ul className="list-none m-0 p-0">
                                    {category.courses.map((course, posIndex) => (
                                        <li key={course.id} className="relative mb-12 last:mb-0">
                                            <div className="flex">
                                                {/* Coluna da timeline */}
                                                <div className="relative w-6 mr-3 md:w-8 md:mr-4">
                                                    {/* Bolinha com anel para não encostar na linha */}
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-2 h-2 rounded-full bg-black/70 ring-6 ring-[#eae8ec] z-10"></div>
                                                    {/* Segmento de linha somente se houver mais de um item e não for o último */}
                                                    {category.courses.length > 1 && posIndex < category.courses.length - 1 && (
                                                        <div className="absolute left-3 md:left-4 top-7 bottom-[-48px] w-px bg-black/20"></div>
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    {/* Título e período */}
                                                    <div className="mb-3">
                                                        <h4 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h4>
                                                        <div className="flex items-center text-gray-600 text-sm">
                                                            <span>{course.period.replace(' - ', ' até ')}</span>
                                                            
                                                        </div>
                                                    </div>

                                                    {/* Descrição em texto único */}
                                                    {course.description.length > 0 && (
                                                        <p className="text-gray-700">
                                                            {course.description.join(' ')}
                                                        </p>
                                                    )}

                                                    {/* Disciplinas/Competências */}
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {course.skills.map((skill, i) => (
                                                            <span
                                                                key={i}
                                                                className="mt-2 inline-flex items-center text-gray-800 px-3 py-1 rounded-full text-sm border transition-colors hover:bg-black/5"
                                                                style={{ borderColor: category.color + '60', backgroundColor: category.color + '20' }}
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    {/* Instituição */}
                                                    <div className="mt-3 text-sm text-gray-600">
                                                        <span className="font-medium text-gray-800">Instituição: </span>
                                                        <span>{course.institution}</span>
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
        </Section>
    );
}