import { useState, useEffect } from "react";
import { Header } from "./header";
import img from "./assets/imgSection1.jpg";



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
        className="relative min-h-screen bg-black text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
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
            <button className="px-10 py-4 transition delay-75 duration-500 bg-orange-400 hover:bg-white hover:text-orange-400 rounded font-semibold">
              Linkedin
            </button>

            <button className="px-10 py-4 transition delay-75 duration-500  hover:bg-white hover:text-orange-400 rounded font-semibold">
              <a href="#">
                GitHub
              </a>
            </button>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
