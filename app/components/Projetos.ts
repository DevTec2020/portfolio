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
import TrocaExe from "../assets/Projetos/TrocaExe.webp"
import Emive from "../assets/Projetos/Emive.webp"
import AirTek from "../assets/Projetos/Airtek.webp"
import Cascar from "../assets/Projetos/Cascar.webp"
import PoupeMais from "../assets/Projetos/PoupeMais.webp"

const PROJETO = [
                {
                    image: PoupeMais,
                    title: "Ótica Poupe Mais",
                    tag: "Landing Page",
                    stacks: ["React", "Tailwind", "Javascript", "SEO"],
                    description: "Landing Page responsiva projetada para funcionar como portfólio  da ótica.",
                    appUrl: "https://landing-page-otica-poupe-mais.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/LandingPage-Otica-Poupe-Mais"                    
                },
                {
                    image: Cascar,
                    title: "Cascar Engenharia",
                    tag: "Site Institucional",
                    stacks: ["React", "Tailwind", "Javascript", "Zod", "EmailJS"],
                    description: "Site institucional desenvolvido para a Cascar Engenharia. Com validação de formulário via Zod e envio de e-mail via EmailJS.",
                    appUrl: "https://landing-page-cascar-engenharia.vercel.app",
                    codeUrl: "https://github.com/DevTec2020/LandingPage-Cascar-engenharia"                    
                },{
                    image: AirTek,
                    title: "Air-tek Compressores",
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
                    codeUrl: null                    
                },{
                    image: TrocaExe,
                    title: "TrocaExe",
                    tag: "Automação",
                    stacks: ["Python", "Tkinter"],
                    description: "Sistema que realiza a troca de executáveis em lote na nuvem da Fortes.",
                    appUrl: null,
                    codeUrl: null                    
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