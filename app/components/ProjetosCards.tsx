'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from "next/image";

interface DataProjetos {
    image: StaticImageData | string;
    title: string;
    tag: string;
    stacks: string[];
    description: string;
    appUrl: string;
    codeUrl: string;
}

export default function ProjetosCards({ dados }: { dados: DataProjetos[] }) {
    return (
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {dados.map((projeto, item) => (
                <div 
                    key={item} 
                    className="bg-[#151515] p-4 rounded-xl group border border-white/5 hover:border-cyan-500/50 transition flex flex-col h-full"
                >
                    {/* Imagem */}
                    <div className="h-64 bg-neutral-800 rounded-lg mb-4 overflow-hidden shrink-0">
                        <Image
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src={projeto.image}
                            alt={`Projeto ${projeto.title}`}
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col flex-grow space-y-4">
                        {/* Titulo */}
                        <div className="shrink-0">
                            <h3 className="text-white text-2xl font-bold truncate">
                                {projeto.title}
                            </h3>
                        </div>

                        {/* Stacks */}
                        <div className="flex flex-wrap gap-2 h-14 overflow-hidden items-start shrink-0">
                            {projeto.stacks.map((stack, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded-sm text-xs text-cyan-400 border border-cyan-500/50 bg-cyan-500/10"
                                >
                                    {stack}
                                </span>
                            ))}
                        </div>

                        {/* Descrição */}
                        <div className="flex-grow">
                            <p className="text-md text-gray-400 italic line-clamp-3 leading-relaxed">
                                {projeto.description}
                            </p>
                        </div>

                        {/* Ícones */}
                        <div className="flex justify-center md:justify-start gap-6 pt-4 text-3xl text-cyan-400 shrink-0">
                            <a href={projeto.codeUrl} target='_blank' rel="noopener noreferrer" className="hover:scale-110 transition">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href={projeto.appUrl} target='_blank' rel="noopener noreferrer" className="hover:scale-110 transition">
                                <FontAwesomeIcon icon={faRocket} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}