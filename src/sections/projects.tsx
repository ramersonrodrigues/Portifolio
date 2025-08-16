import { ArrowTopRightOnSquareIcon, CodeBracketIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { projects } from "../data/projects";
import Section from "../components/ui/section";

export default function Projects() {
  return (
    <Section id="projects" title="Projetos" theme="dark">
      <div className="flex gap-10 flex-col">
        {projects.map((p, idx) => (
          <article
            key={p.id}
            className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Imagem em blob (clip-path) */}
              <div className="md:w-[44%] p-6 md:p-8 flex items-center justify-center">
                <div
                  className="w-full max-w-[520px] aspect-square bg-gray-100 overflow-hidden"
                  style={{
                    WebkitClipPath:
                      "path('M74.5,2.2c18.6,2.9,34.7,13,47.3,26.2c12.6,13.2,21.7,29.6,24.4,48.2c2.7,18.6-1,39.4-12.7,54.7c-11.7,15.3-31.4,25-52.2,27.9c-20.8,3-42.7-0.1-59.8-10.6C4.5,138.2-7,121.1-12,102.7C-17,84.3-15.7,64.5-6.6,48.6C2.5,32.7,20.4,20.6,38.9,12.6C57.4,4.7,75.9-0.7,94.5,1.5Z')",
                    clipPath:
                      "path('M74.5,2.2c18.6,2.9,34.7,13,47.3,26.2c12.6,13.2,21.7,29.6,24.4,48.2c2.7,18.6-1,39.4-12.7,54.7c-11.7,15.3-31.4,25-52.2,27.9c-20.8,3-42.7-0.1-59.8-10.6C4.5,138.2-7,121.1-12,102.7C-17,84.3-15.7,64.5-6.6,48.6C2.5,32.7,20.4,20.6,38.9,12.6C57.4,4.7,75.9-0.7,94.5,1.5Z')",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto e CTAs */}
              <div className="md:w-[56%] px-6 md:px-8 py-6 md:py-10 flex flex-col">
                {p.subtitle && (
                  <p className="text-sm font-semibold text-[#0ea5e9] tracking-wide mb-2">
                    {p.subtitle}
                  </p>
                )}
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-700 mb-4 md:mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-gray-200 bg-gray-50 text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {p.videoUrl && (
                    <a
                      href={p.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
                    >
                      <PlayCircleIcon className="w-5 h-5" aria-hidden="true" />
                      Ver vídeo
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
                    >
                      <CodeBracketIcon className="w-5 h-5" aria-hidden="true" />
                      Código (GitHub)
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" aria-hidden="true" />
                      Preview
                    </a>
                  )}
                </div>
              </div>
            </div>


          </article>

        ))}
      </div>
    </Section >
  );
}