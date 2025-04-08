import { useState, useEffect } from "react";

import gdr from "../assets/empresas/gdr.png"
import fortes from "../assets/empresas/fortes.png"
import superar from "../assets/empresas/superar.png"
import fusion from "../assets/empresas/fusion.png"
import Bgcapa from "../assets/imgSection1_.jpg"


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
            {/*Apresentação */}
            <div className="flex flex-col items-start h-full text-left px-5 sm:px-32 py-32 sm:py-40 bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${Bgcapa})` }}
            >
                <h2 className="sm:text-4xl text-2xl font-light">Olá 👋! sou Leonardo Batista</h2>
                <h1 className="sm:text-5xl text-2xl font-bold">
                    Desenvolvedor 
                    <span className="ms-4 text-orange-500">{cargoDev}</span>
                </h1>

                <div className="space-x-5 pt-20">
                <a href="https://www.linkedin.com/in/DevTec-LeoBatista/" target="_blank">
                    <button className="px-10 py-4 transition delay-75 duration-500 bg-orange-500 hover:bg-white hover:text-orange-500 rounded-lg font-bold border-2 border-orange-500">
                    Linkedin
                    </button>
                </a>  

                <a href="https://github.com/DevTec2020" target="_blank">
                    <button className="px-10 py-4 transition delay-75 duration-500 hover:bg-white hover:text-orange-500 rounded-lg font-bold text-orange-500 border-2 border-orange-500">
                    GitHub
                    </button>
                </a>
                </div>
            </div>

            {/* Empresas */}
            <div className=" flex flex-col items-center justify-center py-8 px-4">
                <div className="w-full max-w-[900px] text-center ">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 text-center mb-6">
                        Desenvolvi projetos para:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-7 grayscale">
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