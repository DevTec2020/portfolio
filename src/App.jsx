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
        <div className="absolute inset-y-0 left-56 flex flex-col justify-center space-y-5 text-white">
          <h2 className="text-4xl font-light">Olá 👋! sou Leonardo Batista</h2>
          <h1 className="text-7xl font-semibold">Desenvolvedor web</h1>
          <div className="space-x-10 pt-10">
            <button className="px-10 py-4 transition delay-75 duration-500 bg-orange-400 hover:bg-white hover:text-black rounded font-semibold">
              Contato
            </button>

            <button className="px-10 py-4 transition delay-75 duration-500 hover:bg-white hover:text-black rounded font-semibold">
              <a href="#">
                Currículo
              </a>
            </button>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
