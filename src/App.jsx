import { Header } from "./sections/Header";
import { Capa } from "./sections/Capa";
import { Sobre } from "./sections/Sobre"
import { Projetos } from "./sections/Projetos"
import { Contato } from "./sections/Contato"


function App() {
  return (
    <>
      <section className="relative h-screen  text-black">
        <Header/>
        <Capa/>
      </section>
      
      <Sobre/>
      <Projetos/>
      <Contato/>
    </>
  );
}

export default App;
