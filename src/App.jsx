import { useState, useEffect } from "react";

import { Header } from "./header";
import { Sobre } from "./sobre"
import { Projetos } from "./projetos"

import imgSection1 from "./assets/imgSection1.jpg";
import imgSection4 from "./assets/Profile.jpg";




function App() {
  const [cargoDev, setCargoDev] = useState("")

  useEffect(() => {
    const cargo = ["Front end", "Back end", "Web", "Full Stack"]
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % cargo.length;
      setCargoDev(cargo[index]);
    }, 2000)

    return () => clearInterval(interval);
  },[]);


  return (
    <>
      <section
        className="relative min-h-screen text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${imgSection1})` }}
      >
        <Header />
        <div className="absolute inset-y-0 left-56 flex flex-col justify-center space-y-5 text-white">
          <h2 className="text-4xl font-light">Olá 👋! sou Leonardo Batista</h2>
          <h1 className="text-6xl font-semibold">
            Desenvolvedor 
            <span className="ms-4 text-orange-400">
              {cargoDev}
            </span>
          </h1>

          <div className="space-x-5 pt-10">
            <a href="https://www.linkedin.com/in/DevTec-LeoBatista/" target="_blank">
              <button className="px-10 py-4 transition delay-75 duration-500 bg-orange-400 hover:bg-white hover:text-orange-400 rounded font-semibold">
                Linkedin
              </button>
            </a>  

            <a href="https://github.com/DevTec2020" target="_blank">
              <button className="px-10 py-4 transition delay-75 duration-500  hover:bg-white hover:text-orange-400 rounded font-semibold">
                GitHub
              </button>
            </a>
              

          </div>
        </div>
      </section>
      
      <Sobre/>
      
      <Projetos/>

      <section id="Contato" className="flex items-center justify-center min-h-screen bg-white px-8">
        <div className="grid grid-cols-2 max-w-6xl gap-8 items-center">

            {/* Imagem */}
            <div className="flex justify-end">
                <img
                    src={imgSection4}
                    alt="Designer working on laptop"
                    className="rounded-lg shadow-lg max-w-full"
                />
            </div>

            {/* Texto */}
            <div>
                <h1 className="text-4xl font-semibold text-orange-400">
                    Contato
                </h1>

                <button className="mt-10 px-6 py-3 bg-[#C4A484] text-white font-semibold rounded-lg shadow-md hover:bg-[#a88d6b] transition">
                    <a href="" target="_blank">
                        W
                    </a>
                </button>
                
                <button className="mt-10 px-6 py-3 bg-[#C4A484] text-white font-semibold rounded-lg shadow-md hover:bg-[#a88d6b] transition">
                    <a href="" target="_blank">
                        Li
                    </a>
                </button>

                
                <button className="mt-10 px-6 py-3 bg-[#C4A484] text-white font-semibold rounded-lg shadow-md hover:bg-[#a88d6b] transition">
                    <a href="" target="_blank">
                        git
                    </a>
                </button>

                
                <button className="mt-10 px-6 py-3 bg-[#C4A484] text-white font-semibold rounded-lg shadow-md hover:bg-[#a88d6b] transition">
                    <a href="" target="_blank">
                        W
                    </a>
                </button>
            </div>


        </div>
    </section>

    </>
  );
}

export default App;
