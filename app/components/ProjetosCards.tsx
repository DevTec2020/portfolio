'use client';
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface DataProjetos {
    image: StaticImageData | string;
    title: string
    tag: string
    stacks: string[]
    description: string
    appUrl: string
    codeUrl: string
}

export default function ProjetosCards({dados}: {dados: DataProjetos[]}){
    return(
        <div className="grid md:grid-cols-3 gap-8 mb-12">
            {dados.map((projeto, item) => (
                <div key={item} className="bg-[#151515] p-1 rounded-xl group overflow-hidden border border-white/5 hover:border-cyan-500/50 transition">
                    <div className="h-48 bg-neutral-800 rounded-t-lg mb-4 flex items-center justify-center italic text-gray-500">
                        <Image 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        src={projeto.image} 
                        alt={`Projeto ${projeto.title}`}
                        loading="lazy"
                        />
                    
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-sm text-gray-400 mb-4 italic">
                            {projeto.description}
                        </p>
                        
                        <button className="px-6 py-2 rounded-lg text-cyan-400 font-bold border border-cyan-500/50 
                                            bg-cyan-500/10 backdrop-blur-md 
                                            hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400
                                            transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] 
                                            hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                            Ver Projeto
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}