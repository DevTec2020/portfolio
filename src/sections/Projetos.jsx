import SiteNote from "../assets/Projetos/SiteNote.jpg"
import PetValley from "../assets/Projetos/PetValley.jpg"
import DevBurguer from "../assets/Projetos/DevBurguer.jpg"
import CadMetas from "../assets/Projetos/CadMetas.jpg"
import FormNasa from "../assets/Projetos/FormNasa.jpg"
import FormFusion from "../assets/Projetos/FormFusion.jpg"
import GaleriaDev from "../assets/Projetos/GaleriaDev.jpg"
import Supermarket from "../assets/Projetos/Supermarket.jpg"
import Despesas from "../assets/Projetos/Reembolso.jpg"
import Todolist from "../assets/Projetos/To-do-list.jpg"



export function Projetos() {
    return (
        <section id="Projetos" className="flex flex-col items-center justify-center min-h-screen w-full bg-orange-400/80 px-8 py-5  overflow-hidden">
            <div className="text-4xl font-bold text-white mb-10">
                Projetos
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Templates de dados para projetos */}

                {[{
                    image: SiteNote,
                    title: "SiteNote",
                    stacks: ["HTML", "CSS", "Javascript"],
                    description: "Aplicação web projetada para ajudar a criar, editar, deletar notas e listas de tarefas de forma eficiente e intuitiva.",
                    appUrl: "https://devtec2020.github.io/SiteNotes/",
                    codeUrl: "https://github.com/DevTec2020/SiteNotes"                    
                },{
                    image: PetValley,
                    title: "PetValley",
                    stacks: ["HTML", "CSS", "Bulma"],
                    description: "Site para clínica veterinária, com foco em usabilidade e design responsivo.",
                    appUrl: "https://pet-valley.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/Pet-Valley"
                }, {
                    image: DevBurguer,
                    title: "DevBurguer",
                    stacks: ["HTML", "Tailwind", "JavaScript"],
                    description: "Cardápio Online com envio de pedidos diretamente para o WhatsApp.",
                    appUrl: "https://dev-burguer-jade.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/DevBurguer"
                }, {
                    image: CadMetas,
                    title: "CadMetas",
                    stacks: ["JavaScript", "NodeJs", "Json"],
                    description: "Gerencia metas via linha de comando, permitindo cadastro, marcação, visualização, exclusão e persistência em JSON.",
                    appUrl: null,
                    codeUrl: "https://github.com/DevTec2020/CadMetas"
                }, {
                    image: FormNasa,
                    title: "FormNasa",
                    stacks: ["HTML", "SASS", "Bootstrap"],
                    description: "Formulário minimalista, onde estudei Bootstrap, focado na simplicidade e eficiência.",
                    appUrl: "https://devtec2020.github.io/FormNasa/",
                    codeUrl: "https://github.com/DevTec2020/FormNasa"
                }, {
                    image: FormFusion,
                    title: "FormFusion",
                    stacks: ["React", "Tailwind", "TypeScript", "Zod"],
                    description: "Formulário para cadastro de membros da comunidade com persistência em localstorage.",
                    appUrl: "https://formulario-dev-fusion.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/FormularioDevFusion"
                }, {
                    image: GaleriaDev,
                    title: "GaleriaDev",
                    stacks: ["React", "Tailwind", "TypeScript"],
                    description: "Galeria dinâmica que busca imagens via API, permitindo salvar favoritas com persistência em localStorage.",
                    appUrl: "https://galeriadev.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/GaleriaDev"                    
                }, {
                    image: Supermarket,
                    title: "Supermarket",
                    stacks: ["HTML", "JavaScript", "CSS"],
                    description: "Aplicação web simples e eficiente para gerenciar as compras de supermercado da semana.",
                    appUrl: "https://devtec2020.github.io/Lista-de-Compras/",
                    codeUrl: "https://github.com/DevTec2020/Lista-de-Compras"                    
                }, {
                    image: Despesas,
                    title: "Refund",
                    stacks: ["HTML", "JavaScript", "CSS"],
                    description: "Facilita o processo dos usuários registrem suas despesas para análise e reembolso.",
                    appUrl: "https://devtec2020.github.io/exercicio-reembolso/",
                    codeUrl: "https://github.com/DevTec2020/exercicio-reembolso"                    
                }, {
                    image: Todolist,
                    title: "To-do-list",
                    stacks: ["HTML", "TypeScript", "CSS", "Tailwind"],
                    description: "Lista de terefas com contador para controle das tasks.",
                    appUrl: "https://to-do-list-omega-flame.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/To-do-list"                    
                }].map((projeto, index) => (
                    <div key={index} className="max-w-xs bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <img className="rounded-t-lg h-52 object-cover" src={projeto.image} alt={`Projeto ${projeto.title}`} />

                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{projeto.title}</h5>
                            <div className="mb-4 flex flex-wrap">
                                {projeto.stacks.map((stack, idx) => (
                                    <span key={idx} className="bg-gray-700 text-gray-400 text-xs font-medium me-2 px-2 py-1 rounded border border-gray-500">{stack}</span>
                                ))}
                            </div>
                            
                            <p className="h-24 mb-3 font-normal text-gray-400">{projeto.description}</p>
                                
                            <div className="flex gap-2">
                                {projeto.appUrl && 
                                    <a href={projeto.appUrl} target="_blank" 
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                            APP
                                    </a>
                                }
                                    <a href={projeto.codeUrl} target="_blank" 
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                                            CODE
                                    </a>
                            </div>

                        </div>
                    </div>                    
                ))}

            </div>
        </section>
    )
}