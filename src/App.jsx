import { useState, useEffect } from "react";

import { Header } from "./header";
import { Sobre } from "./sobre"
import { Projetos } from "./projetos"
import { Contato } from "./contato"


function App() {
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
      <section className="relative h-screen  text-black">
        <Header/>

        <div className="flex flex-col justify-center">
          {/*Apresentação */}
          <div className="flex flex-col items-start text-left px-5 sm:px-32 bg-black/30 py-40 sm:py-48">
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
          <div className="mt-10 flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-400">Empresas para as quais desenvolvi projetos</h3>
            <div className="mt-5 flex flex-wrap justify-center gap-8">
              {/* Aqui você pode adicionar imagens ou logos das empresas */}
              <img src="/logo1.png" alt="Empresa 1" className="h-12" />
              <img src="/logo2.png" alt="Empresa 2" className="h-12" />
              <img src="/logo3.png" alt="Empresa 3" className="h-12" />
            </div>
          </div>
        </div>
      </section>
      
      <Sobre/>
      <Projetos/>
      <Contato/>
    </>
  );
}

export default App;
