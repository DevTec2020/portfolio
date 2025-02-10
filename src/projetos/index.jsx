import {ProjetosStack} from "./ProjetosStack.jsx"
import {ProjetosUrl} from "./ProjetosUrl.jsx"
import {ProjetosDesc} from "./ProjetosDesc.jsx"

import SiteNote from "../assets/Projetos/SiteNote.jpg"
import PetValley from "../assets/Projetos/PetValley.jpg"
import DevBurguer from "../assets/Projetos/DevBurguer.jpg"
import CadMetas from "../assets/Projetos/CadMetas.jpg"
import FormNasa from "../assets/Projetos/FormNasa.jpg"

export function Projetos() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-[#C4A484] px-8 py-5">
            <div className="text-4xl font-semibold text-white">
                Projetos
            </div>

            <div className="grid grid-cols-3 mt-20 gap-10">
                {/* SiteNote Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={SiteNote} alt="Projeto SiteNote" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">SiteNote</h5>
                        <div className="mb-4">
                            <ProjetosStack stack="HTML" />
                            <ProjetosStack stack="CSS" />
                            <ProjetosStack stack="Javascript" />
                        </div>

                        <ProjetosDesc txt="Aplicação web projetada para ajudar a criar, editar, deletar notas e listas de tarefas de forma eficiente e intuitiva."/>

 
                        <div className="flex  gap-2">
                            <ProjetosUrl url="https://devtec2020.github.io/SiteNotes/" txt="APP"/>
                            <ProjetosUrl url="https://github.com/DevTec2020/SiteNotes" txt="CODE"/>
                        </div>

                    </div>
                </div>

                {/* PetValley Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={PetValley} alt="Projeto SiteNote" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">PetValley</h5>
                        <div className="mb-4">
                            <ProjetosStack stack="HTML" />
                            <ProjetosStack stack="CSS" />
                            <ProjetosStack stack="Bulma" />
                        </div>

                        <ProjetosDesc txt="Site para clínica veterinária, com foco em usabilidade e design responsivo."/>
 
                        <div className="flex  gap-2">
                            <ProjetosUrl url="https://pet-valley.vercel.app" txt="APP"/>
                            <ProjetosUrl url="https://github.com/DevTec2020/Pet-Valley" txt="CODE"/>
                        </div>

                    </div>
                </div>


                {/* DevBurguer Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={DevBurguer} alt="Projeto SiteNote" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">DevBurguer</h5>
                        <div className="mb-4">
                            <ProjetosStack stack="HTML" />
                            <ProjetosStack stack="Tailwind" />
                            <ProjetosStack stack="JavaScript" />
                        </div>

                        <ProjetosDesc txt="Cardápio Online de hamburgueria, com uma interface moderna e funcional. Permitindo que os pedidos sejam encaminhados diretamente para o WhatsApp."/>
 
                        <div className="flex  gap-2">
                            <ProjetosUrl url="https://dev-burguer-jade.vercel.app" txt="APP"/>
                            <ProjetosUrl url="https://github.com/DevTec2020/DevBurguer" txt="CODE"/>
                        </div>

                    </div>
                </div>


                {/* CadMetas Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={CadMetas} alt="Projeto SiteNote" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">CadMetas</h5>
                        <div className="mb-4">
                            <ProjetosStack stack="JavaScript" />
                            <ProjetosStack stack="NodeJs" />
                            <ProjetosStack stack="Json" />
                        </div>

                        <ProjetosDesc txt="Gerencia metas por linha de comando. Podendo fazer cadastro, marcação, visualização, exclusão e também a persistência dos dados via arquivo JSON."/>
 
                        <div className="flex  gap-2">
                            <ProjetosUrl url="https://github.com/DevTec2020/CadMetas" txt="CODE"/>
                        </div>

                    </div>
                </div>



                {/* FormNasa Card*/}
                <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow ">
                    <img className="rounded-t-lg" src={FormNasa} alt="Projeto SiteNote" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">FormNasa</h5>
                        <div className="mb-4">
                            <ProjetosStack stack="HTML" />
                            <ProjetosStack stack="SASS" />
                            <ProjetosStack stack="Bootstrap" />
                        </div>

                        <ProjetosDesc txt="Formulário minimalista, estilizado com o Bootstrap, focado na simplicidade e eficiência."/>
 
                        <div className="flex  gap-2">
                            <ProjetosUrl url="https://devtec2020.github.io/FormNasa/" txt="APP"/>
                            <ProjetosUrl url="https://github.com/DevTec2020/FormNasa" txt="CODE"/>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}