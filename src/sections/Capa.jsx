import { useState, useEffect } from "react";

import profile from "../assets/EuCapa.png"
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
        <>
        <section id="inicio" class="text-gray-600 py-20">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="sm:text-3xl text-2xl font-light">Olá 👋! sou Leonardo Batista</h2>
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        <span>Desenvolvedor</span> 
                        <span className="ms-4 text-orange-500">{cargoDev}</span>
                    </h2>
                    <p class="text-xl mb-8">Transformo ideias em soluções web, responsivas e de alto desempenho utilizando as melhores tecnologias do mercado.</p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#Projetos" class="px-10 py-4 text-center transition-all bg-orange-500 text-white rounded-lg font-bold border-2 border-orange-500">
                            Ver Projetos
                        </a>
                        <a href="#Contato" class="px-10 py-4 text-center transition-all bg-white rounded-lg font-bold text-orange-500 border-2 border-orange-500">Fale Comigo</a>
                    </div>
                </div>

                <div class="md:w-1/2 flex justify-center">
                    <div class="relative">
                        <div class="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                            <img src={profile} 
                                alt="Desenvolvedor Web" 
                                class="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div class="absolute -bottom-2 -right-5 bg-white text-orange-500 px-6 py-2 rounded-full shadow-lg font-bold">
                            <span class="text-sm md:text-base">7+ anos de experiência com TI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    )
}