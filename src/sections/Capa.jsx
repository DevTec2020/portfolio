import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import gdr from "../assets/empresas/gdr.png"
import fortes from "../assets/empresas/fortes.png"
import superar from "../assets/empresas/superar.png"
import fusion from "../assets/empresas/fusion.png"
import Bgcapa from "../assets/teste.jpg"


export function Capa(){
    const [cargoDev, setCargoDev] = useState("")

    useEffect(() => {
      const cargo = ["Front end","Web"]
      let index = 0
  
      const interval = setInterval(() => {
        index = (index + 1) % cargo.length;
        setCargoDev(cargo[index]);
      }, 2000)
  
      return () => clearInterval(interval);
    },[]);
  
    return (
        <section className="flex flex-col justify-center">
            {/* WhatsApp Float Button */}
            <a href="https://wa.me/85985646542" class="fixed w-14 h-14 bottom-6 right-6 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg z-50 hover:bg-green-600 transition-all" target="_blank" aria-label="Fale comigo pelo WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-white" />
            </a>

            {/*Apresentação */}
            <div className="flex flex-col items-start h-full text-left px-5 sm:px-32 py-32 sm:py-40 bg-cover bg-center text-gray-500"
                style={{ backgroundImage: `url(${Bgcapa})` }}
            >
                
                <h2 className="sm:text-4xl text-2xl font-light">Olá 👋! sou Leonardo Batista</h2>
                <h1 className="sm:text-5xl text-2xl font-bold mb-6">
                    Desenvolvedor 
                    <span className="ms-4 text-orange-500">{cargoDev}</span>
                </h1>
                <p className="text-xl mb-8">Transformo ideias em soluções digitais, responsivas e de alto desempenho</p>

                <div className="space-x-5 pt-10">
                <a href="#Projetos" className="px-10 py-4 transition delay-75 duration-500 bg-orange-500 hover:bg-white text-white hover:text-orange-500 rounded-lg font-bold border-2 border-orange-500">
                    Ver Projetos
                </a>  

                <a href="#Contato" className="px-10 py-4 transition delay-75 duration-500 bg-white hover:text-orange-500 rounded-lg font-bold text-orange-500 border-2 border-orange-500">
                    Fale Comigo
                </a>
                </div>
            </div>

            {/* Empresas */}
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full max-w-[900px] text-center ">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 text-center mb-2">
                        Clientes e Parceiros
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">Alguns dos clientes que já tive o prazer de trabalhar</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-7 grayscale mt-5">
                        <img src={gdr} alt="logo Gdr" className="h-20 md:h-24" />
                        <img src={fortes} alt="logo Fortes" className="h-14 md:h-16" />
                        <img src={superar} alt="logo Superar" className="h-28 md:h-32" />
                        <img src={fusion} alt="logo comunidade" className="h-14 md:h-16" />
                    </div>
                </div>
            </div>
        </section>
        
    )
}