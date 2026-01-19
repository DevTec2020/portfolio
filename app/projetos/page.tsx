'use client';
import ProjetosCards from "../components/ProjetosCards";
import PROJETOSALL from "../data/ProjetosAll";

export default function ProjetosPage(){
    return(
        <section id="projetos" className="py-14 px-10 md:px-20">
            <h3 className="mt-20 text-3xl font-bold text-center mb-20 text-cyan-400 uppercase tracking-widest">Projetos</h3>
            <ProjetosCards dados={PROJETOSALL}/>
        </section>
    )
}