

import SiteNote from "../assets/Projetos/SiteNote.webp"
import PetValley from "../assets/Projetos/PetValley.webp"
import DevBurguer from "../assets/Projetos/DevBurguer.webp"
import CadMetas from "../assets/Projetos/CadMetas.webp"
import FormNasa from "../assets/Projetos/FormNasa.webp"
import FormFusion from "../assets/Projetos/FormFusion.webp"
import GaleriaDev from "../assets/Projetos/GaleriaDev.webp"
import Supermarket from "../assets/Projetos/Supermarket.webp"
import Despesas from "../assets/Projetos/Reembolso.webp"
import Todolist from "../assets/Projetos/To-do-list.webp"
import gdr from "../assets/Projetos/gdr.webp"
import Loki from "../assets/Projetos/Loki.webp"
import Emive from "../assets/Projetos/Emive.webp"
import AirTek from "../assets/Projetos/Airtek.webp"
import Cascar from "../assets/Projetos/Cascar.webp"

const PROJETO = [
                {
                    image: Cascar,
                    title: "Site Cascar",
                    tag: "Site Institucional",
                    stacks: ["React", "Tailwind", "Javascript", "Zod", "EmailJS"],
                    description: "Site institucional desenvolvido para a Cascar Engenharia. Com validação de formulário via Zod e envio de e-mail via EmailJS.",
                    appUrl: "https://landing-page-air-tek.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/LandingPage-AirTek"                    
                },
                {
                    image: AirTek,
                    title: "Site Air-tek",
                    tag: "Site Institucional",
                    stacks: ["React", "Tailwind", "Javascript", "Zod", "EmailJS"],
                    description: "Site institucional desenvolvido para a Air-tek, revendedora de compressores de ar. Com validação de formulário via Zod e envio de e-mail via EmailJS.",
                    appUrl: "https://landing-page-air-tek.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/LandingPage-AirTek"                    
                },{
                    image: Emive,
                    title: "Franqueado Emive",
                    tag: "Landing Page",
                    stacks: ["React", "Tailwind", "Javascript"],
                    description: "Landing Page moderna e responsiva projetada para um franqueado Emive.",
                    appUrl: "https://landing-page-vinicius-nine.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/LandingPage-Emive"                    
                },{
                    image: Loki,
                    title: "Loki",
                    tag: "Automação",
                    stacks: ["Python", "Tkinter"],
                    description: "Sistema que automatiza a criação de ambientes nuvem para a Fortes.",
                    appUrl: null,
                    codeUrl: "https://github.com/DevTec2020/Loki-V2"                    
                },{
                    image: SiteNote,
                    title: "SiteNote",
                    tag: "Sistema Web",
                    stacks: ["HTML", "CSS", "Javascript"],
                    description: "Aplicação web projetada para ajudar a criar, editar, deletar notas e listas de tarefas de forma eficiente e intuitiva.",
                    appUrl: "https://devtec2020.github.io/SiteNotes/",
                    codeUrl: "https://github.com/DevTec2020/SiteNotes"                    
                },{
                    image: PetValley,
                    title: "PetValley",
                    tag: "Landing Page",
                    stacks: ["HTML", "CSS", "Bulma"],
                    description: "Site para clínica veterinária, com foco em usabilidade e design responsivo.",
                    appUrl: "https://pet-valley.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/Pet-Valley"
                }, {
                    image: DevBurguer,
                    title: "DevBurguer",
                    tag: "Sistema web",
                    stacks: ["HTML", "Tailwind", "JavaScript"],
                    description: "Cardápio Online com envio de pedidos diretamente para o WhatsApp.",
                    appUrl: "https://dev-burguer-jade.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/DevBurguer"
                }, {
                    image: CadMetas,
                    title: "CadMetas",
                    tag: "Sistema Back-end",
                    stacks: ["JavaScript", "NodeJs", "Json"],
                    description: "Gerencia metas via linha de comando, permitindo cadastro, marcação, visualização, exclusão e persistência em JSON.",
                    appUrl: null,
                    codeUrl: "https://github.com/DevTec2020/CadMetas"
                }, {
                    image: FormNasa,
                    title: "FormNasa",
                    tag: "Sistema Web",
                    stacks: ["HTML", "SASS", "Bootstrap"],
                    description: "Formulário minimalista, onde estudei Bootstrap, focado na simplicidade e eficiência.",
                    appUrl: "https://devtec2020.github.io/FormNasa/",
                    codeUrl: "https://github.com/DevTec2020/FormNasa"
                }, {
                    image: FormFusion,
                    title: "FormFusion",
                    tag: "Sistema Web",
                    stacks: ["React", "Tailwind", "TypeScript", "Zod"],
                    description: "Formulário para cadastro de membros da comunidade com persistência em localstorage.",
                    appUrl: "https://formulario-dev-fusion.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/FormularioDevFusion"
                }, {
                    image: GaleriaDev,
                    title: "GaleriaDev",
                    tag: "Sistema Web",
                    stacks: ["React", "Tailwind", "TypeScript", "API"],
                    description: "Galeria dinâmica que busca imagens via API, permitindo salvar favoritas com persistência em localStorage.",
                    appUrl: "https://galeriadev.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/GaleriaDev"                    
                }, {
                    image: Supermarket,
                    title: "Supermarket",
                    tag: "Sistema Web",
                    stacks: ["HTML", "JavaScript", "CSS"],
                    description: "Aplicação web simples e eficiente para gerenciar as compras de supermercado da semana.",
                    appUrl: "https://devtec2020.github.io/Lista-de-Compras/",
                    codeUrl: "https://github.com/DevTec2020/Lista-de-Compras"                    
                }, {
                    image: Despesas,
                    title: "Refund",
                    tag: "Sistema Web",
                    stacks: ["HTML", "JavaScript", "CSS"],
                    description: "Facilita o processo dos usuários registrem suas despesas para análise e reembolso.",
                    appUrl: "https://devtec2020.github.io/exercicio-reembolso/",
                    codeUrl: "https://github.com/DevTec2020/exercicio-reembolso"                    
                }, {
                    image: Todolist,
                    title: "To-do-list",
                    tag: "Sistema Web",
                    stacks: ["HTML", "TypeScript", "CSS", "Tailwind"],
                    description: "Lista de terefas com contador para controle das tasks.",
                    appUrl: "https://to-do-list-omega-flame.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/To-do-list"                    
                }
            ]



export function Projetos() {
    return (
        <section id="Projetos" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-orange-400 mb-4">Meus Projetos</h2>
                <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Array com os projetos */}
                {PROJETO.map((projeto, index) => (
                    // Cards
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-3 hover:shadow-lg transition-all duration-500 ease-in-out">
                        <div className="relative overflow-hidden h-48">
                            <img src={projeto.image} 
                                alt={`Projeto ${projeto.title}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">{projeto.tag}</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{projeto.title}</h3>
                            <p className="text-gray-600 mb-4">{projeto.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projeto.stacks.map((stack, idx) => (
                                    <span key={idx} className="bg-gray-300 text-gray-800 font-medium px-2 py-1 rounded text-xs">{stack}</span>
                                    
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-10">
                                <a href={projeto.appUrl} target="_blank" className="text-orange-600 font-semibold hover:text-orange-800">Deploy</a>
                                <a href={projeto.codeUrl} target="_blank" className="text-gray-500 hover:text-orange-600 font-semibold">Code</a>
                            </div>
                        </div>
                    </div>                    
                ))}
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    Ver Mais Projetos <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>
    )
}