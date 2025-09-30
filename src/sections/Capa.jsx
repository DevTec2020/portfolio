import { useState, useEffect } from "react";

import profile from "../assets/EuCapa.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import gdr from "../assets/empresas/gdr.webp"
import fortes from "../assets/empresas/fortes.webp"
import fusion from "../assets/empresas/fusion.webp"
import flyjobs from "../assets/empresas/flyjobs.webp"
import mvx from "../assets/empresas/MVX.webp"
import emive from "../assets/empresas/Emive.webp"
import Airtek from "../assets/empresas/Air-tek.webp"
import Cascar from "../assets/empresas/Cascar.webp"

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
        <section id="inicio" className="text-gray-600 py-20">
            {/* WhatsApp Float Button */}
            <a href="https://wa.me/85985646542" className="fixed w-14 h-14 bottom-6 right-6 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg z-50 hover:bg-green-600 transition-all" target="_blank" aria-label="Fale comigo pelo WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-white" />
            </a>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="sm:text-3xl text-2xl font-light">Olá 👋! sou Leonardo Batista</h2>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        <span>Desenvolvedor</span> 
                        <span className="ms-4 text-orange-500">{cargoDev}</span>
                    </h2>
                    <p className="text-xl mb-2">Transformo ideias em soluções web, responsivas e de alto desempenho utilizando as melhores tecnologias do mercado.</p>
                   
                    <div className="flex space-x-4 text-2xl mb-8">
                        <a href="https://github.com/DevTec2020" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="mailto:leonardo.silva.inf@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                        <a href="https://www.linkedin.com/in/devtec-leobatista/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://wa.me/85985646542" target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></a>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#Projetos" className="px-10 py-4 text-center transition-all bg-orange-500 text-white rounded-lg font-bold border-2 border-orange-500">
                            Ver Projetos
                        </a>
                        <a href="#Contato" className="px-10 py-4 text-center transition-all bg-white rounded-lg font-bold text-orange-500 border-2 border-orange-500">Fale Comigo</a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                            <img src={profile} 
                                alt="Desenvolvedor Web" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-5 bg-white text-orange-500 px-6 py-2 rounded-full shadow-lg font-bold">
                            <span className="text-sm md:text-base">10+ anos de experiência com TI</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-36">
                <h2 className="text-2xl font-semibold text-orange-400 text-center">Empresas que confiam no meu trabalho</h2>
                <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                    <img src={gdr} alt="Logo GDR" className="h-16" />
                    <img src={fortes} alt="Logo Fortes" className="h-16"/>
                    <img src={fusion} alt="Logo Fusion" className="h-18"/>
                    <img src={flyjobs} alt="Logo Flyjobs" className="h-16"/>
                    <img src={mvx} alt="Logo MVX" className="h-16"/>
                    <img src={emive} alt="Logo Emive" className="h-16"/>
                    <img src={Airtek} alt="Logo Airtek" className="h-16"/>
                    <img src={Cascar} alt="Logo Cascar" className="h-10"/>
                </div>
            </div>
        </section>
        </>
        
    )
}