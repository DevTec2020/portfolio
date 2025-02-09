import { useState } from "react";
import { Header } from "./header";
import img from "./assets/imgSection1.jpg";

function App() {
  return (
    <>
      <section
        className="relative min-h-screen bg-black text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <Header />
        <div className="absolute inset-y-0 left-56 flex flex-col justify-center space-y-5">
          <h2 className="text-4xl font-light">Olá 👋! sou Leonardo Batista</h2>
          <h1 className="text-7xl font-semibold">Desenvolvedor web</h1>
          <div className="space-x-7 pt-10">
            <button className="px-6 py-2 bg-orange-500 text-white rounded">
              Contato
            </button>
            <a href="#" className="text-white">
              Currículo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
