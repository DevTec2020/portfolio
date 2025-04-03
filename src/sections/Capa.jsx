import { useState, useEffect } from "react";

import gdr from "../assets/empresas/gdr.png"
import fortes from "../assets/empresas/fortes.png"
import superar from "../assets/empresas/superar.png"
import fusion from "../assets/empresas/fusion.png"
import teste from "../assets/imgSection1_.jpg"


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
        <div className="flex flex-col justify-center">
            {/*Apresentação */}
            <div className="flex flex-col items-start text-left px-5 sm:px-32  py-40 sm:py-40 bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${teste})` }}
            >
                <h2 className="sm:text-4xl text-2xl font-light">Olá 👋! sou Leonardo Batista</h2>
                <h1 className="sm:text-5xl text-3xl font-semibold">
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
            <div className="py-4 flex flex-col items-center text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-400">Empresas para as quais desenvolvi projetos</h3>
                <div className="mt-5 pb-10 flex flex-wrap justify-center items-center gap-16 border-b-2 border-gray-400">
                    <img src={gdr} alt="logo Gdr" className="h-24 grayscale" />
                    <img src={fortes} alt="logo Fortes" className="h-16 grayscale" />
                    <img src={superar} alt="logo Superar" className="h-32 grayscale" />
                    <img src={fusion} alt="logo comunidade" className="h-16 grayscale" />

                </div>
            </div>
        </div>
        
    )
}